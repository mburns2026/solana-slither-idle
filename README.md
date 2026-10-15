# Backend Slither.Idle (testnet) — passo a passo

Tudo grátis (Cloudflare Workers + D1) e na rede de teste (devnet) da Solana. Rode os comandos no **PowerShell**, dentro desta pasta (`backend`).
**Nunca** suba para o GitHub: `ADMIN_KEY`, `JWT_SECRET` nem o arquivo da tesouraria (`treasury.json`). Esta pasta não precisa ficar no repositório do site.

## Parte A — Colocar o servidor no ar
1. Instale o **Node.js LTS** (nodejs.org). Depois: `npm install`
2. `npx wrangler login` (abre o navegador; crie a conta grátis na Cloudflare se precisar)
3. `npx wrangler d1 create slither` → copie o `database_id` mostrado e cole no `wrangler.toml`
4. `npx wrangler d1 execute slither --remote --file=schema.sql`
5. `npx wrangler secret put JWT_SECRET` → cole um texto longo e aleatório (30+ caracteres)
6. `npx wrangler secret put ADMIN_KEY` → outra senha longa (é a chave dos saques)
7. `npx wrangler deploy` → ele mostra a URL (ex.: `https://slither-idle-api.SEUUSUARIO.workers.dev`)
8. Teste abrindo `URL/health` no navegador: deve aparecer `{"ok":true,"testnet":true}`
9. No `config.js` do site coloque `API_URL: 'a URL do passo 7'` e envie ao GitHub.
   Em `wrangler.toml`, `ALLOW_ORIGIN` deve ser o endereço do seu site (já está o do GitHub Pages); se mudar, rode `npx wrangler deploy` de novo.

## Parte B — Token de teste na devnet (grátis)
Precisa da **Solana CLI** (siga o guia oficial de instalação em solana.com/docs).
```
solana config set --url devnet
solana-keygen new -o treasury.json          # guarde esse arquivo com cuidado
solana airdrop 2 -k treasury.json           # SOL de teste (se falhar, use faucet.solana.com)
spl-token create-token --decimals 6 --fee-payer treasury.json --mint-authority treasury.json
spl-token create-account <MINT> --owner treasury.json --fee-payer treasury.json
spl-token mint <MINT> 1000000000 --mint-authority treasury.json --fee-payer treasury.json
```
No `config.js`: `TOKEN_MINT: '<MINT>'`, `POOL_WALLET: '<endereço da treasury>'`, `NETWORK: 'devnet'`, `RPC: 'https://api.devnet.solana.com'`.
O painel de queima do site passa a mostrar os dados reais da devnet.

## Parte C — Pagar saques e queimar (rode quando quiser, ex.: 1x por dia)
```
$env:API="https://SUA-URL.workers.dev"; $env:ADMIN_KEY="sua-admin-key"
$env:MINT="<MINT>"; $env:KEYPAIR="C:\caminho\treasury.json"
node payout.mjs            # simulação: só mostra o que faria
node payout.mjs --send     # envia os saques e queima de verdade
```
Teste primeiro com UM saque pequeno da sua própria carteira Phantom (configurada em **devnet**).

## O que o servidor garante (e o que não)
- **Garante:** login por assinatura da Phantom (sem mover fundos), saldo só no servidor, teto diário de 300 com retorno decrescente, limites por tempo real (o cliente não consegue "ganhar mais rápido" que o relógio), compras e queima contabilizadas, saque com limite diário.
- **Não garante:** que cada moeda foi realmente comida (o navegador informa isso). Por isso o ganho é limitado por tempo e por carteira. Contas suspeitas ficam marcadas no campo `sus` do banco.
- Antes de usar valor real: auditoria, limites ainda menores e revisão jurídica.
