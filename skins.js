// Catálogo de skins + desenho (compartilhado entre loja e jogo). Índice no array = id (ids 0–3 mantidos por compatibilidade).
(function () {
  const TIER = [['Free','Grátis','Gratis','免费'],['Common','Comum','Común','普通'],['Rare','Raro','Raro','稀有'],['Epic','Épico','Épico','史诗'],['Legendary','Lendário','Legendario','传说'],['Mythic','Mítico','Mítico','神话']];
  const TIER_COLORS = ['#9aa3b8', '#9aa3b8', '#4dd2ff', '#b44dff', '#f3ba2f', '#ff4d6d'];
  const TABS = [['All','Flags','Colors','Models','Premium'],['Todas','Bandeiras','Cores','Modelos','Premium'],['Todas','Banderas','Colores','Modelos','Premium'],['全部','国旗','配色','造型','高级']];
  const COSM = ['Cosmetic','Cosmética','Cosmética','外观'], MAG = ['coin magnet','ímã de moedas','imán de monedas','金币磁铁'], FREE = ['FREE','GRÁTIS','GRATIS','免费'];
  const FX = {fire: ['#ff8a00','#ffd23f','#ff3d00'], ice: ['#ffffff','#9fe8ff','#4dd2ff'], stars: ['#ffffff','#b9a2ff','#ffd6ff'], sparkle: ['#fff1a8','#ffd23f','#ffffff']};
  const S = [];
  const add = (n, price, tier, cat, o) => S.push(Object.assign({id: S.length, n, price, tier, cat, band: 3, magnet: 0, head: '', fx: '', anim: '', colors: ['#ffffff']}, o));
  const flag = (n, colors) => add(n, 300, 1, 'flag', {colors, band: 5});

  add(['Classic Neon','Neon Clássico','Neón Clásico','经典霓虹'], 0, 0, 'color', {colors: ['#ff007f', '#00ffcc']});
  add(['Cyber-Viper','Cyber-Viper','Cyber-Viper','Cyber-Viper'], 500, 1, 'color', {colors: ['#00f2fe', '#4facfe'], fx: 'ice'});
  add(['Diamond $HODL','Diamond $HODL','Diamond $HODL','Diamond $HODL'], 1500, 3, 'color', {colors: ['#ffffff', '#f3ba2f'], magnet: 30, head: 'crown', fx: 'sparkle'});
  add(['Solana Plasma','Solana Plasma','Solana Plasma','Solana Plasma'], 3000, 4, 'color', {colors: ['#9945ff', '#14f195', '#4dd2ff'], magnet: 50, anim: 'flow'});
  // Bandeiras (listras na ordem da bandeira)
  flag(['Brazil','Brasil','Brasil','巴西'], ['#009c3b','#ffdf00','#002776']);
  flag(['USA','EUA','EE. UU.','美国'], ['#b22234','#ffffff','#3c3b6e','#ffffff']);
  flag(['Portugal','Portugal','Portugal','葡萄牙'], ['#006600','#006600','#ff0000']);
  flag(['Spain','Espanha','España','西班牙'], ['#aa151b','#f1bf00','#f1bf00','#aa151b']);
  flag(['Argentina','Argentina','Argentina','阿根廷'], ['#74acdf','#ffffff','#74acdf']);
  flag(['Mexico','México','México','墨西哥'], ['#006847','#ffffff','#ce1126']);
  flag(['Japan','Japão','Japón','日本'], ['#ffffff','#ffffff','#bc002d']);
  flag(['China','China','China','中国'], ['#de2910','#de2910','#ffde00']);
  flag(['Germany','Alemanha','Alemania','德国'], ['#000000','#dd0000','#ffce00']);
  flag(['France','França','Francia','法国'], ['#0055a4','#ffffff','#ef4135']);
  flag(['Italy','Itália','Italia','意大利'], ['#009246','#ffffff','#ce2b37']);
  flag(['United Kingdom','Reino Unido','Reino Unido','英国'], ['#012169','#ffffff','#c8102e','#ffffff']);
  flag(['Canada','Canadá','Canadá','加拿大'], ['#ff0000','#ffffff','#ffffff','#ff0000']);
  flag(['India','Índia','India','印度'], ['#ff9933','#ffffff','#138808']);
  flag(['South Korea','Coreia do Sul','Corea del Sur','韩国'], ['#ffffff','#cd2e3a','#0047a0']);
  flag(['Colombia','Colômbia','Colombia','哥伦比亚'], ['#fcd116','#fcd116','#003893','#ce1126']);
  // Cores
  add(['Solar Orange','Laranja Solar','Naranja Solar','烈阳橙'], 200, 1, 'color', {colors: ['#ff9500','#ffcc00']});
  add(['Toxic Lime','Limão Tóxico','Lima Tóxica','剧毒青柠'], 200, 1, 'color', {colors: ['#b6ff00','#1a8f00']});
  add(['Ocean Blue','Azul Oceano','Azul Océano','海洋蓝'], 200, 1, 'color', {colors: ['#0077ff','#00d4ff']});
  add(['Violet Dream','Sonho Violeta','Sueño Violeta','紫色梦境'], 250, 1, 'color', {colors: ['#7b2ff7','#f107a3']});
  add(['Candy','Doce','Caramelo','糖果'], 300, 1, 'color', {colors: ['#ff9ad5','#9afcff','#fff59a']});
  add(['Zebra','Zebra','Cebra','斑马'], 300, 1, 'color', {colors: ['#ffffff','#111111']});
  add(['Camo','Camuflado','Camuflaje','迷彩'], 300, 1, 'color', {colors: ['#4b5320','#8a9a5b','#2f3a1d']});
  add(['Sunset','Pôr do Sol','Atardecer','日落'], 400, 2, 'color', {colors: ['#ff512f','#f09819','#dd2476']});
  // Modelos
  add(['Bunny','Coelhinho','Conejito','兔子'], 900, 2, 'model', {colors: ['#ffffff','#ffe3ef'], head: 'bunny'});
  add(['Corgi','Corgi','Corgi','柯基'], 900, 2, 'model', {colors: ['#e8923a','#ffffff'], head: 'dog'});
  add(['Rainbow Orb','Orbe Arco-íris','Orbe Arcoíris','彩虹球'], 1200, 2, 'model', {anim: 'rainbow', band: 2});
  add(['Lion King','Rei Leão','Rey León','狮子王'], 1800, 3, 'model', {colors: ['#d9a441','#c98a2b'], head: 'lion', magnet: 20});
  add(['Angel Cat','Gato Anjo','Gato Ángel','天使猫'], 1800, 3, 'model', {colors: ['#ffffff','#bfe7ff','#fff6c2'], head: 'cat', halo: true, wings: '#ffffff'});
  add(['Unicorn','Unicórnio','Unicornio','独角兽'], 2500, 3, 'model', {colors: ['#ffffff','#ffc2ea','#d9c2ff'], head: 'unicorn', fx: 'sparkle'});
  add(['Fire Serpent','Serpente de Fogo','Serpiente de Fuego','火焰灵蛇'], 3500, 4, 'model', {anim: 'fire', head: 'flame', fx: 'fire', magnet: 40});
  add(['Ice Dragon','Dragão de Gelo','Dragón de Hielo','冰龙'], 3500, 4, 'model', {colors: ['#e9fbff','#9fe8ff','#4dc3ff','#2a7de1'], head: 'dragon', fx: 'ice', magnet: 40});
  add(['Galaxy Void','Vazio Galáctico','Vacío Galáctico','银河虚空'], 5000, 4, 'model', {anim: 'galaxy', fx: 'stars', halo: true, magnet: 50});
  add(['Golden Emperor','Imperador Dourado','Emperador Dorado','黄金帝王'], 6000, 5, 'model', {colors: ['#fff2a8','#f3ba2f','#c78a00'], anim: 'flow', head: 'crown', fx: 'sparkle', magnet: 60});
  add(['Phoenix','Fênix','Fénix','凤凰'], 8000, 5, 'model', {anim: 'fire', head: 'flame', wings: '#ff7a00', fx: 'fire', magnet: 60});

  const hsl = h => { const s = .9, l = .55, a = s * Math.min(l, 1 - l), f = n => { const k = (n + h / 30) % 12; return Math.round(255 * (l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1)))); };
    return '#' + [f(0), f(8), f(4)].map(v => v.toString(16).padStart(2, '0')).join(''); };
  const PAL = {fire: ['#fff3a0','#ffb300','#ff6a00','#e63900'], galaxy: ['#1b1464','#4b2bb3','#9b5de5','#00d4ff','#ffffff']};
  function colorAt(sk, c, now) {   // cor do segmento c; animações usam poucas cores (cache de sprites)
    const n = Math.floor(c / sk.band);
    if (sk.anim === 'rainbow') return hsl((Math.round(((c * 14 + now * .08) % 360) / 10) * 10) % 360);
    if (sk.anim === 'fire') return PAL.fire[(n + Math.floor(now / 100)) % 4];
    if (sk.anim === 'galaxy') return PAL.galaxy[(n * 7 + Math.floor(now / 400)) % 5];
    if (sk.anim === 'flow') return sk.colors[(n + Math.floor(now / 150)) % sk.colors.length];
    return sk.colors[n % sk.colors.length];
  }
  const ell = (c, x, y, rx, ry, rot, fill) => { c.beginPath(); c.ellipse(x, y, rx, ry, rot, 0, 6.2832); c.fillStyle = fill; c.fill(); };
  const poly = (c, pts, fill) => { c.beginPath(); pts.forEach(([x, y], i) => c[i ? 'lineTo' : 'moveTo'](x, y)); c.closePath(); c.fillStyle = fill; c.fill(); };
  function drawHead(c, sk, r, now) {   // ctx já transladado/rotacionado para a cabeça (frente = +x)
    const h = sk.head;
    if (sk.wings) for (const s of [-1, 1]) ell(c, -r * .2, s * r * 1.5, r * 1.5, r * .5, -s * .7, sk.wings);
    if (h === 'bunny') for (const s of [-1, 1]) { ell(c, -r * .9, s * r * .7, r * 1.4, r * .38, s * .45, '#ffffff'); ell(c, -r * .9, s * r * .7, r, r * .2, s * .45, '#ffb3d1'); }
    if (h === 'dog') for (const s of [-1, 1]) ell(c, -r * .1, s * r * 1.05, r * .55, r * .8, -s * .4, '#8a4b12');
    if (h === 'cat') for (const s of [-1, 1]) poly(c, [[r * .1, s * r * .5], [r * .2, s * r * 1.4], [-r * .6, s * r * .8]], '#ffffff');
    if (h === 'unicorn') { for (const s of [-1, 1]) poly(c, [[r * .1, s * r * .5], [r * .1, s * r * 1.2], [-r * .5, s * r * .7]], '#ffffff'); poly(c, [[r * .6, -r * .25], [r * 2.2, 0], [r * .6, r * .25]], '#ffd23f'); }
    if (h === 'lion') for (let i = 0; i < 10; i++) { const a = i / 10 * 6.2832; ell(c, Math.cos(a) * r * 1.05, Math.sin(a) * r * 1.05, r * .5, r * .5, 0, i % 2 ? '#a8641a' : '#c98a2b'); }
    if (h === 'dragon') for (const s of [-1, 1]) { poly(c, [[r * .3, s * r * .6], [-r * .9, s * r * 1.7], [-r * .5, s * r * .5]], '#e9fbff'); poly(c, [[r * .9, s * r * .2], [r * 1.6, s * r * .35], [r * .9, s * r * .45]], '#9fe8ff'); }
    if (h === 'crown') for (let i = 0; i < 5; i++) { const a = i / 5 * 6.2832; poly(c, [[Math.cos(a - .25) * r * .8, Math.sin(a - .25) * r * .8], [Math.cos(a) * r * 1.5, Math.sin(a) * r * 1.5], [Math.cos(a + .25) * r * .8, Math.sin(a + .25) * r * .8]], '#ffd23f'); }
    if (h === 'flame') for (let i = 0; i < 6; i++) { const a = Math.PI + (i - 2.5) * .5, L = r * (1.5 + .4 * Math.sin((now || 0) / 90 + i * 2));
      poly(c, [[Math.cos(a - .2) * r * .7, Math.sin(a - .2) * r * .7], [Math.cos(a) * L, Math.sin(a) * L], [Math.cos(a + .2) * r * .7, Math.sin(a + .2) * r * .7]], i % 2 ? '#ffb300' : '#ff6a00'); }
    if (sk.halo) { c.beginPath(); c.arc(0, 0, r * 1.25, 0, 6.2832); c.strokeStyle = '#ffe27a'; c.lineWidth = 2.5; c.stroke(); }
  }
  function preview(cv, sk, now) {   // miniatura da loja
    const c = cv.getContext('2d'), H = cv.height, r = 12, n = 11; c.clearRect(0, 0, cv.width, H);
    const P = i => [26 + i * 13, H / 2 + Math.sin(i * .75) * 7];
    for (let i = 0; i < n; i++) {
      const [x, y] = P(i), g = c.createRadialGradient(x - 3, y - 3, 1, x, y, r);
      g.addColorStop(0, 'rgba(255,255,255,.8)'); g.addColorStop(.45, colorAt(sk, i + 20, now || 0)); g.addColorStop(1, 'rgba(0,0,0,.6)');
      c.fillStyle = g; c.beginPath(); c.arc(x, y, r, 0, 6.2832); c.fill();
    }
    const [hx, hy] = P(n - 1); c.save(); c.translate(hx, hy); drawHead(c, sk, r, now);
    for (const s of [-1, 1]) { c.beginPath(); c.arc(r * .45, s * r * .5, r * .42, 0, 6.2832); c.fillStyle = '#fff'; c.fill(); c.beginPath(); c.arc(r * .6, s * r * .5, r * .2, 0, 6.2832); c.fillStyle = '#000'; c.fill(); }
    c.restore();
  }
  window.SKINS = S;
  window.Skins = {colorAt, drawHead, preview, TIER, TIER_COLORS, TABS, FREE, FX,
    name: (sk, l) => sk.n[l] || sk.n[0], perk: (sk, l) => COSM[l] + (sk.magnet ? ' + +' + sk.magnet + ' ' + MAG[l] : '')};
})();
