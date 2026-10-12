// Estado e economia de TESTE compartilhados entre site (store.html) e jogo (play.html).
// Regras espelham a economia real: teto diário com retorno decrescente, sem multiplicadores, sinks com queima.
(function () {
  const KEY = 'slitheri_save_v1', CAP = 300, FAUCET = 250, FAUCET_MS = 864e5, VIP_PRICE = 250;
  const SKINS = [
    {id: 0, price: 0,    colors: ['#ff007f', '#00ffcc'], magnet: 0},
    {id: 1, price: 500,  colors: ['#00f2fe', '#4facfe'], magnet: 0},
    {id: 2, price: 1500, colors: ['#ffffff', '#f3ba2f'], magnet: 30},
    {id: 3, price: 3000, colors: ['#9945ff', '#14f195'], magnet: 50}];
  const day = () => new Date(Date.now() - new Date().getTimezoneOffset() * 6e4).toISOString().slice(0, 10);
  let mem = null;
  const read = () => { try { return localStorage.getItem(KEY); } catch (e) { return mem; } };
  const write = v => { mem = v; try { localStorage.setItem(KEY, v); } catch (e) {} };
  const num = (v, d = 0) => (Number.isFinite(+v) && +v >= 0) ? +v : d;
  function load() {
    let o = null; try { o = JSON.parse(read()); } catch (e) {}
    o = Object.assign({bal: 100, vip: false, owned: [0], skin: 0, day: day(), today: 0, burned: 0, faucetAt: 0}, o || {});
    o.bal = num(o.bal, 100); o.today = num(o.today); o.burned = num(o.burned); o.faucetAt = num(o.faucetAt); o.vip = o.vip === true;
    if (!Array.isArray(o.owned) || !o.owned.includes(0)) o.owned = [0];
    if (!SKINS[o.skin] || !o.owned.includes(o.skin)) o.skin = 0;
    if (o.day !== day()) { o.day = day(); o.today = 0; }
    return o;
  }
  const fire = () => window.dispatchEvent(new Event('savechange'));
  const S = window.Save = {s: load(), CAP, FAUCET, VIP_PRICE, SKINS};
  // Sempre relê o estado mais recente antes de gravar: duas abas não sobrescrevem uma à outra.
  function commit(fn) {
    S.s = load(); const r = fn(S.s);
    for (const k of ['bal', 'today', 'burned']) S.s[k] = Math.round(S.s[k] * 1e4) / 1e4;
    write(JSON.stringify(S.s)); fire(); return r;
  }
  S.skin = () => SKINS[S.s.skin];
  S.faucetWait = () => Math.max(0, S.s.faucetAt + FAUCET_MS - Date.now());
  // Ganho com retorno decrescente: quanto mais já ganhou hoje, menor o pagamento. Nunca passa de CAP.
  S.earn = x => commit(s => { const rate = Math.max(0, 1 - s.today / CAP), paid = x * rate; s.today += paid; s.bal += paid; return {paid, rate}; });
  S.spend = c => commit(s => { if (s.bal < c) return false; s.bal -= c; s.burned += c * .5; return true; });
  S.buySkin = id => commit(s => {
    if (!s.owned.includes(id)) { const p = SKINS[id].price; if (s.bal < p) return 'poor'; s.bal -= p; s.burned += p * .5; s.owned.push(id); }
    s.skin = id; return 'ok';
  });
  S.buyVip = () => commit(s => { if (s.vip) return 'have'; if (s.bal < VIP_PRICE) return 'poor'; s.bal -= VIP_PRICE; s.burned += VIP_PRICE * .5; s.vip = true; return 'ok'; });
  S.claim = () => commit(s => { if (s.faucetAt + FAUCET_MS > Date.now()) return {ok: false}; s.bal += FAUCET; s.faucetAt = Date.now(); return {ok: true}; });
  addEventListener('storage', e => { if (e.key === KEY) { S.s = load(); fire(); } });
})();
