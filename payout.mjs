// Paga os saques pendentes e queima os tokens "gastos" no jogo — na rede escolhida (devnet para testes).
// A chave da tesouraria fica SÓ no seu computador (nunca no servidor). Uso:
//   node payout.mjs          → simulação (não envia nada)
//   node payout.mjs --send   → envia de verdade
// Variáveis: API, ADMIN_KEY, MINT, KEYPAIR (caminho do .json da tesouraria), RPC (padrão: devnet)
import fs from 'node:fs';
import {Connection, Keypair, PublicKey} from '@solana/web3.js';
import {getOrCreateAssociatedTokenAccount, transfer, burn, getMint} from '@solana/spl-token';

const {API, ADMIN_KEY, MINT, KEYPAIR, RPC = 'https://api.devnet.solana.com'} = process.env, SEND = process.argv.includes('--send');
if (!API || !ADMIN_KEY || !MINT || !KEYPAIR) { console.error('Defina API, ADMIN_KEY, MINT e KEYPAIR.'); process.exit(1); }
const post = (p, b) => fetch(API + p, {method: 'POST', headers: {'Content-Type': 'application/json', 'X-Admin-Key': ADMIN_KEY}, body: JSON.stringify(b)}).then(r => r.json());
const conn = new Connection(RPC, 'confirmed'), payer = Keypair.fromSecretKey(Uint8Array.from(JSON.parse(fs.readFileSync(KEYPAIR, 'utf8')))), mint = new PublicKey(MINT);
const unit = 10n ** BigInt((await getMint(conn, mint)).decimals), raw = x => BigInt(Math.round(x * 1e4)) * unit / 10000n;
const q = await (await fetch(API + '/admin/queue', {headers: {'X-Admin-Key': ADMIN_KEY}})).json();
console.log(`${SEND ? 'ENVIANDO' : 'SIMULAÇÃO'} | saques pendentes: ${q.withdrawals.length} | queima pendente: ${q.burnPending}`);
const src = await getOrCreateAssociatedTokenAccount(conn, payer, mint, payer.publicKey);
for (const w of q.withdrawals) {
  console.log(`  saque #${w.id}: ${w.amount} → ${w.wallet}`);
  if (!SEND) continue;
  try {
    const dst = await getOrCreateAssociatedTokenAccount(conn, payer, mint, new PublicKey(w.wallet));
    const sig = await transfer(conn, payer, src.address, dst.address, payer, raw(w.amount));
    await post('/admin/done', {id: w.id, sig}); console.log('    ok', sig);
  } catch (e) { console.error('    falhou:', e.message); await post('/admin/failed', {id: w.id}); }   // devolve o saldo ao jogador
}
if (q.burnPending >= 1) {
  console.log(`  queimar ${q.burnPending} tokens da tesouraria`);
  if (SEND) { const sig = await burn(conn, payer, src.address, mint, payer, raw(q.burnPending)); await post('/admin/burned', {amount: q.burnPending, sig}); console.log('    ok', sig); }
}
