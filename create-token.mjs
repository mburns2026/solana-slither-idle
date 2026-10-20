// Cria o token de TESTE (devnet) sem precisar instalar a Solana CLI.
// Gera a carteira da tesouraria (treasury.json), pede SOL de teste e cria o token com todo o supply nela.
// Uso:  node create-token.mjs      (rode de novo depois de pegar SOL no faucet, se pedir)
import fs from 'node:fs';
import {Connection, Keypair, LAMPORTS_PER_SOL} from '@solana/web3.js';
import {createMint, getOrCreateAssociatedTokenAccount, mintTo} from '@solana/spl-token';

const RPC = process.env.RPC || 'https://api.devnet.solana.com', SUPPLY = Number(process.env.SUPPLY || 1_000_000_000), DEC = 6;
const conn = new Connection(RPC, 'confirmed');
let payer;
if (fs.existsSync('treasury.json')) payer = Keypair.fromSecretKey(Uint8Array.from(JSON.parse(fs.readFileSync('treasury.json', 'utf8'))));
else { payer = Keypair.generate(); fs.writeFileSync('treasury.json', JSON.stringify([...payer.secretKey])); console.log('Tesouraria criada em treasury.json — GUARDE e NUNCA suba ao GitHub.'); }
console.log('Endereço da tesouraria:', payer.publicKey.toBase58());

let bal = await conn.getBalance(payer.publicKey);
if (bal < 0.05 * LAMPORTS_PER_SOL) {
  try { const sig = await conn.requestAirdrop(payer.publicKey, LAMPORTS_PER_SOL); await conn.confirmTransaction(sig, 'confirmed'); } catch (e) { /* faucet público costuma limitar */ }
  bal = await conn.getBalance(payer.publicKey);
}
if (bal < 0.05 * LAMPORTS_PER_SOL) {
  console.log('\nAinda sem SOL de teste. Abra https://faucet.solana.com, escolha "devnet", cole o endereço acima, peça SOL e rode este comando de novo.');
  process.exit(1);
}
const mint = await createMint(conn, payer, payer.publicKey, null, DEC);
const ata = await getOrCreateAssociatedTokenAccount(conn, payer, mint, payer.publicKey);
await mintTo(conn, payer, mint, ata.address, payer, BigInt(SUPPLY) * 10n ** BigInt(DEC));
console.log(`\nPRONTO! Token criado com ${SUPPLY.toLocaleString('pt-BR')} unidades. Coloque no config.js do site:\n`);
console.log(`  TOKEN_MINT: '${mint.toBase58()}',\n  POOL_WALLET: '${payer.publicKey.toBase58()}',\n  NETWORK: 'devnet',\n  RPC: 'https://api.devnet.solana.com',\n  SUPPLY: ${SUPPLY},\n`);
console.log('Para o payout.mjs use: MINT =', mint.toBase58(), '| KEYPAIR = caminho do treasury.json');
