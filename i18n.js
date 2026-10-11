// Idiomas: EN (padrão, texto no próprio HTML) + PT / ES / ZH. Formato: chave: [pt, es, zh]
(function () {
const D = {
ti:["Solana Slither.Idle — $SLITHERI","Solana Slither.Idle — $SLITHERI","Solana Slither.Idle — $SLITHERI"],
n1:["Como funciona","Cómo funciona","玩法"],n2:["Tokenomics","Tokenomics","代币经济"],n3:["Economia","Economía","经济模型"],n4:["Roadmap","Hoja de ruta","路线图"],n5:["Whitepaper","Whitepaper","白皮书"],
play:["▶ JOGAR","▶ JUGAR","▶ 开始游戏"],
h1:["Slither.io + Idle<br>na Solana","Slither.io + Idle<br>en Solana","Slither.io + 放置<br>基于 Solana"],
hp:["Jogue direto no navegador, deixe o Auto-Bot coletar enquanto você está fora e junte <b>$SLITHERI</b>.","Juega directo en el navegador, deja que el Auto-Bot recolecte mientras no estás y acumula <b>$SLITHERI</b>.","直接在浏览器中游玩,离线时让自动机器人替你收集,累积 <b>$SLITHERI</b>。"],
pn:["▶ JOGAR AGORA","▶ JUGAR AHORA","▶ 立即游玩"],wp:["📜 WHITEPAPER","📜 WHITEPAPER","📜 白皮书"],
hw:["COMO FUNCIONA","CÓMO FUNCIONA","玩法介绍"],hws:["Simples de entender, difícil de largar.","Fácil de entender, difícil de dejar.","易于上手,让人欲罢不能。"],
c1t:["🐍 1. Jogue","🐍 1. Juega","🐍 1. 游玩"],c1:["Controle a cobra com o mouse (ou o dedo), colete moedas e derrube rivais.","Controla la serpiente con el ratón (o el dedo), recoge monedas y derrota a los rivales.","用鼠标(或手指)控制蛇,收集金币并击败对手。"],
c2t:["🤖 2. Auto-Bot","🤖 2. Auto-Bot","🤖 2. 自动机器人"],c2:["Ative o modo Idle: o bot coleta e foge de perigos até a bateria acabar.","Activa el modo Idle: el bot recolecta y esquiva peligros hasta que se agote la batería.","开启放置模式:机器人会自动收集并躲避危险,直到电量耗尽。"],
c3t:["🛒 3. Evolua","🛒 3. Mejora","🛒 3. 升级"],c3:["Use $SLITHERI na loja: skins, ímã de moedas e recarga da bateria.","Usa $SLITHERI en la tienda: skins, imán de monedas y recarga de batería.","在商店使用 $SLITHERI:皮肤、金币磁铁和电池充电。"],
c4t:["🔗 4. Conecte","🔗 4. Conecta","🔗 4. 连接"],c4:["Conecte sua carteira Phantom para ligar seu progresso ao seu endereço.","Conecta tu billetera Phantom para vincular tu progreso a tu dirección.","连接 Phantom 钱包,将你的进度与钱包地址绑定。"],
tk:["TOKENOMICS","TOKENOMICS","代币经济"],tks:["Proposta inicial — sujeita a ajustes antes do lançamento.","Propuesta inicial — sujeta a cambios antes del lanzamiento.","初步方案 — 上线前可能调整。"],
ts:["Supply total","Suministro total","总供应量"],tsd:["Padrão de tokens da pump.fun","Estándar de tokens de pump.fun","pump.fun 代币标准"],
tn:["Rede","Red","网络"],tnd:["Taxas baixas e transações rápidas","Comisiones bajas y transacciones rápidas","低手续费,交易快速"],
tl:["Lançamento","Lanzamiento","发行"],tld:["Bonding curve, sem pré-venda","Bonding curve, sin preventa","联合曲线,无预售"],
tb:["Queima","Quema","销毁"],tbd:["das compras na loja e dos saques","de las compras en la tienda y retiros","来自商店消费和提现"],
dm:["90% MERCADO","90% MERCADO","90% 市场"],
tlg:["<b style='color:#f3ba2f'>10% Pool de recompensas do jogo (100M)</b> · 90% curva de liquidez / mercado","<b style='color:#f3ba2f'>10% Pool de recompensas del juego (100M)</b> · 90% curva de liquidez / mercado","<b style='color:#f3ba2f'>10% 游戏奖励池(1 亿)</b> · 90% 流动性曲线 / 市场"],
ct:["CONTRATO:","CONTRATO:","合约地址:"],cl:["Será divulgado no lançamento","Se anunciará en el lanzamiento","将在发行时公布"],cp:["COPIAR","COPIAR","复制"],
e:["ECONOMIA SUSTENTÁVEL","ECONOMÍA SOSTENIBLE","可持续经济"],es:["Desenhada para não inflacionar: emissão com teto, queima contínua e reciclagem.","Diseñada para no inflar: emisión limitada, quema continua y reciclaje.","旨在避免通胀:限额发放、持续销毁和循环利用。"],
e1t:["🚫 Zero mint","🚫 Cero mint","🚫 零增发"],e1:["Supply fixo. O jogo não consegue criar tokens novos.","Suministro fijo. El juego no puede crear tokens nuevos.","供应量固定,游戏无法增发新代币。"],
e2t:["📉 Emissão decrescente","📉 Emisión decreciente","📉 递减发放"],e2:["Orçamento diário = <b>0,1% da pool restante</b>. Cai sozinho com o tempo e não aumenta com mais jogadores ou bots.","Presupuesto diario = <b>0,1% del pool restante</b>. Disminuye solo con el tiempo y no crece con más jugadores o bots.","每日额度 = <b>剩余奖池的 0.1%</b>。随时间自动递减,不会因玩家或机器人增多而增加。"],
e3t:["🔥 Queima na loja","🔥 Quema en la tienda","🔥 商店销毁"],e3:["Cada compra: <b>50% queimado</b> e 50% volta para a pool de recompensas.","Cada compra: <b>50% se quema</b> y 50% vuelve al pool de recompensas.","每笔消费:<b>50% 销毁</b>,50% 回流至奖励池。"],
e4t:["🔥 Taxa de saque","🔥 Comisión de retiro","🔥 提现手续费"],e4:["<b>5%</b> de todo saque on-chain é queimado.","<b>5%</b> de cada retiro on-chain se quema.","每笔链上提现的 <b>5%</b> 将被销毁。"],
st:["🧮 SIMULADOR (1 ano, pool inicial de 100M)","🧮 SIMULADOR (1 año, pool inicial de 100M)","🧮 模拟器(1 年,初始奖池 1 亿)"],
sl1:["Jogadores ativos/dia","Jugadores activos/día","日活跃玩家"],sl2:["Gasto na loja por jogador/dia ($SLITHERI)","Gasto en tienda por jugador/día ($SLITHERI)","每位玩家每日商店消费($SLITHERI)"],sl3:["% das recompensas vendidas","% de recompensas vendidas","奖励出售比例"],
so1:["pool restante","pool restante","剩余奖池"],so2:["queimado (% do supply)","quemado (% del suministro)","已销毁(占总供应量)"],so3:["venda média/dia","venta media/día","日均卖出"],so4:["recompensa/jogador no dia 1","recompensa/jugador el día 1","第 1 天每位玩家奖励"],
sn:["Modelo simplificado, só para ilustrar a mecânica. Não é previsão de preço nem de ganhos.","Modelo simplificado, solo para ilustrar la mecánica. No es una predicción de precio ni de ganancias.","简化模型,仅用于说明机制,不构成价格或收益预测。"],
tr:["TRANSPARÊNCIA (compromissos de lançamento)","TRANSPARENCIA (compromisos de lanzamiento)","透明度(发行承诺)"],
x1:["Autoridade de mint revogada: o supply nunca aumenta.","Autoridad de mint revocada: el suministro nunca aumenta.","已撤销铸币权限:供应量永不增加。"],
x2:["Pool de 100M em carteira pública, com endereço divulgado no lançamento.","Pool de 100M en una billetera pública, con dirección anunciada en el lanzamiento.","1 亿奖池存放于公开钱包,地址将在发行时公布。"],
x3:["Contador de queima on-chain visível no site.","Contador de quema on-chain visible en el sitio.","网站展示链上销毁计数。"],
x4:["Sem pré-venda: o token só nasce no dia do lançamento do jogo.","Sin preventa: el token solo nace el día del lanzamiento del juego.","无预售:代币仅在游戏上线当天诞生。"],
x5:["Saldo e recompensas validados em servidor, com limite diário por carteira.","Saldo y recompensas validados en el servidor, con límite diario por billetera.","余额和奖励由服务器验证,每个钱包设有每日上限。"],
rm:["ROADMAP","HOJA DE RUTA","路线图"],rms:["De demo jogável a economia on-chain.","De demo jugable a economía on-chain.","从可玩演示到链上经济。"],
tg1:["CONCLUÍDO","COMPLETADO","已完成"],tg2:["EM BREVE","PRÓXIMAMENTE","即将开始"],tg3:["PLANEJADO","PLANIFICADO","计划中"],
r1:["Fase 1 — Demo jogável","Fase 1 — Demo jugable","第一阶段 — 可玩演示"],r1d:["Motor estilo Slither, rivais, colisões, Auto-Bot, bateria, loja demo.","Motor estilo Slither, rivales, colisiones, Auto-Bot, batería, tienda demo.","Slither 风格引擎、对手、碰撞、自动机器人、电池、演示商店。"],
r2:["Fase 2 — Site e carteira","Fase 2 — Sitio y billetera","第二阶段 — 网站与钱包"],r2d:["Site oficial, whitepaper e conexão com a Phantom.","Sitio oficial, whitepaper y conexión con Phantom.","官方网站、白皮书和 Phantom 连接。"],
r3:["Fase 3 — Backend e anti-fraude","Fase 3 — Backend y antifraude","第三阶段 — 后端与反作弊"],r3d:["Saldo validado em servidor, limites de ganho e login com a carteira.","Saldo validado en el servidor, límites de ganancia y login con la billetera.","服务器验证余额、收益上限和钱包登录。"],
r4:["Fase 4 — Token na pump.fun","Fase 4 — Token en pump.fun","第四阶段 — pump.fun 发行代币"],r4d:["Token lançado no mesmo dia do lançamento do jogo, sem pré-venda. Pool de 100M em carteira pública.","Token lanzado el mismo día que el juego, sin preventa. Pool de 100M en una billetera pública.","代币与游戏同日上线,无预售。1 亿奖池存放于公开钱包。"],
r5:["Fase 5 — Economia on-chain","Fase 5 — Economía on-chain","第五阶段 — 链上经济"],r5d:["Resgate de recompensas, loja com queima e skins exclusivas.","Retiro de recompensas, tienda con quema y skins exclusivas.","奖励提取、带销毁机制的商店和专属皮肤。"],
r6:["Fase 6 — Multiplayer","Fase 6 — Multijugador","第六阶段 — 多人模式"],r6d:["Arenas em tempo real, mundo circular, boost e rankings semanais.","Arenas en tiempo real, mundo circular, boost y rankings semanales.","实时竞技场、圆形地图、加速和每周排行榜。"],
w:["WHITEPAPER","WHITEPAPER","白皮书"],ws:["Versão 0.1 — resumo do projeto.","Versión 0.1 — resumen del proyecto.","0.1 版 — 项目概要。"],
w1t:["1. Visão","1. Visión","1. 愿景"],w1:["Unir a jogabilidade viciante de um arena-snake com a mecânica idle, em que o progresso continua mesmo com o jogador ausente, usando a Solana como camada de propriedade e recompensas.","Unir la jugabilidad adictiva de un snake de arena con la mecánica idle, donde el progreso continúa aunque el jugador esté ausente, usando Solana como capa de propiedad y recompensas.","将竞技贪吃蛇的上瘾玩法与放置机制结合,玩家离线时进度依然继续,并以 Solana 作为所有权与奖励层。"],
w2t:["2. Mecânica do jogo","2. Mecánica del juego","2. 游戏机制"],w2a:["Coletar moedas aumenta o tamanho e rende $SLITHERI.","Recoger monedas aumenta el tamaño y genera $SLITHERI.","收集金币会让蛇变长并赚取 $SLITHERI。"],w2b:["Eliminar rivais gera bônus e derruba moedas.","Eliminar rivales da bonificación y suelta monedas.","击败对手可获得奖励并掉落金币。"],w2c:["O Auto-Bot joga sozinho e consome bateria; recarregar custa $SLITHERI.","El Auto-Bot juega solo y consume batería; recargar cuesta $SLITHERI.","自动机器人会自己游玩并消耗电量;充电需要 $SLITHERI。"],
w3t:["3. Economia sustentável","3. Economía sostenible","3. 可持续经济"],w3:["Não existe emissão nova: as recompensas saem de uma pool finita de 100M $SLITHERI. Cada dia libera no máximo 0,1% do que resta, dividido entre os jogadores por pontuação, então o teto não depende de quantos jogadores ou bots existem. Compras na loja queimam 50% e devolvem 50% à pool; saques on-chain queimam 5%. Com isso a pool só encolhe se a emissão superar o reciclado, e o supply total só diminui. Nenhum modelo garante preço: o valor depende da demanda real pelo jogo.","No existe emisión nueva: las recompensas salen de un pool finito de 100M $SLITHERI. Cada día libera como máximo el 0,1% de lo que queda, repartido entre los jugadores según su puntuación, así que el tope no depende de cuántos jugadores o bots existan. Las compras en la tienda queman el 50% y devuelven el 50% al pool; los retiros on-chain queman el 5%. Así, el pool solo se reduce si la emisión supera lo reciclado, y el suministro total solo disminuye. Ningún modelo garantiza un precio: el valor depende de la demanda real del juego.","没有新增发行:奖励来自 1 亿 $SLITHERI 的有限奖池。每天最多释放剩余奖池的 0.1%,按得分分配给玩家,因此上限与玩家或机器人数量无关。商店消费 50% 销毁、50% 回流奖池;链上提现销毁 5%。因此只有当发放超过回流时奖池才会减少,总供应量只会下降。任何模型都无法保证价格:价值取决于游戏的真实需求。"],
w4t:["4. Segurança e anti-fraude","4. Seguridad y antifraude","4. 安全与反作弊"],w4:["O saldo só será válido quando calculado no servidor, nunca no navegador. A carteira Phantom é usada apenas para identificar o jogador (sem permissão para mover fundos) e, depois, para assinar mensagens de login.","El saldo solo será válido cuando se calcule en el servidor, nunca en el navegador. La billetera Phantom se usa solo para identificar al jugador (sin permiso para mover fondos) y, más adelante, para firmar mensajes de inicio de sesión.","余额只有在服务器端计算后才有效,绝不在浏览器中计算。Phantom 钱包仅用于识别玩家(无权转移资金),之后用于签名登录消息。"],
w5t:["5. Estado atual","5. Estado actual","5. 当前状态"],w5:["O jogo é uma demonstração: o saldo exibido ainda <b>não é on-chain</b> e não tem valor financeiro.","El juego es una demostración: el saldo mostrado aún <b>no es on-chain</b> y no tiene valor financiero.","游戏目前为演示版:显示的余额<b>尚未上链</b>,没有任何金融价值。"],
w6t:["6. Riscos e aviso legal","6. Riesgos y aviso legal","6. 风险与法律声明"],w6:["Criptoativos são voláteis e podem perder todo o valor. Este projeto não promete retorno, não é recomendação de investimento e depende da legislação de cada país. Faça sua própria pesquisa e use apenas valores que possa perder.","Los criptoactivos son volátiles y pueden perder todo su valor. Este proyecto no promete rendimientos, no es una recomendación de inversión y depende de la legislación de cada país. Investiga por tu cuenta y usa solo dinero que puedas permitirte perder.","加密资产波动剧烈,可能完全归零。本项目不承诺任何回报,不构成投资建议,并受各国法律约束。请自行研究,仅使用你能承受损失的资金。"],
ft:["© Solana Slither.Idle — Projeto independente, sem afiliação com Solana Foundation, Phantom, pump.fun ou slither.io.","© Solana Slither.Idle — Proyecto independiente, sin afiliación con Solana Foundation, Phantom, pump.fun ni slither.io.","© Solana Slither.Idle — 独立项目,与 Solana Foundation、Phantom、pump.fun 和 slither.io 无任何关联。"],
n6:["Comunidade","Comunidad","社区"],st1:["Pool de recompensas","Pool de recompensas","奖励池"],st2:["Tokens criados pelo jogo","Tokens creados por el juego","游戏增发的代币"],st3:["Queima na loja e nos saques","Quema en tienda y retiros","商店与提现销毁"],st4:["Idiomas","Idiomas","语言"],
cm:["ENTRE NA COMUNIDADE","ÚNETE A LA COMUNIDAD","加入社区"],cms:["Novidades, avisos do dia do lançamento, feedback e eventos semanais.","Novedades, avisos del día de lanzamiento, feedback y eventos semanales.","获取最新消息、上线日提醒、反馈渠道和每周活动。"],cmb:["💬 ENTRAR NO DISCORD","💬 UNIRSE A DISCORD","💬 加入 Discord"],
// ---- JS / jogo ----
cd0:["🚀 Token e jogo lançam no mesmo dia — data em breve","🚀 Token y juego se lanzan el mismo día — fecha próximamente","🚀 代币与游戏同日上线 — 日期即将公布"],cd1:["🚀 Já lançado!","🚀 ¡Ya lanzado!","🚀 已上线!"],cd2:["🚀 Lançamento em","🚀 Lanzamiento en","🚀 距离上线"],
wc:["🔗 Conectar Phantom","🔗 Conectar Phantom","🔗 连接 Phantom"],wd:["Clique para desconectar","Haz clic para desconectar","点击断开连接"],wt:["Conectar carteira Phantom","Conectar billetera Phantom","连接 Phantom 钱包"],wn:["Phantom não encontrada. Instale a extensão e recarregue a página.","Phantom no encontrada. Instala la extensión y recarga la página.","未检测到 Phantom。请安装扩展程序并刷新页面。"],
you:["Você","Tú","你"],of:["de","de","/"],bot:["🤖 AUTO-BOT","🤖 AUTO-BOT","🤖 自动机器人"],shop:["🛒 LOJA","🛒 TIENDA","🛒 商店"],info:["📜 INFO","📜 INFO","📜 说明"],site:["🏠 SITE","🏠 SITIO","🏠 官网"],
bal:["$SLITHERI (demo):","$SLITHERI (demo):","$SLITHERI(演示):"],brn:["Queimados 🔥:","Quemados 🔥:","已销毁 🔥:"],lb:["LEADERBOARD","CLASIFICACIÓN","排行榜"],len:["Seu tamanho:","Tu tamaño:","你的长度:"],rank:["Sua posição:","Tu posición:","你的排名:"],
sh:["LOJA $SLITHERI","TIENDA $SLITHERI","$SLITHERI 商店"],shd:["Saldo de demonstração: ainda não é on-chain.","Saldo de demostración: aún no es on-chain.","演示余额:尚未上链。"],skin:["Skin Brasil","Skin Brasil","巴西皮肤"],mag:["Super Ímã","Super Imán","超级磁铁"],bat:["Bateria 100%","Batería 100%","电池 100%"],buy:["Comprar","Comprar","购买"],rech:["Recarregar","Recargar","充电"],
ih:["Solana Slither.Idle","Solana Slither.Idle","Solana Slither.Idle"],ip:["Versão de demonstração. Tokenomics e saques on-chain (carteira Phantom/Solflare) estão planejados para as próximas versões.","Versión de demostración. Tokenomics y retiros on-chain (billetera Phantom/Solflare) están planificados para próximas versiones.","演示版本。代币经济和链上提现(Phantom/Solflare 钱包)计划在后续版本推出。"],
tbat:["Bateria esgotada! Recarregue na loja.","¡Batería agotada! Recarga en la tienda.","电量耗尽!请在商店充电。"],tbo:["A bateria do bot acabou","Se agotó la batería del bot","机器人电量已耗尽"],tdie:["💀 Você morreu! Respawn...","💀 ¡Has muerto! Reapareciendo...","💀 你死了!正在重生..."],tkill:["🔥 Rival eliminado! +0.5 $SLITHERI","🔥 ¡Rival eliminado! +0.5 $SLITHERI","🔥 击败对手!+0.5 $SLITHERI"],tpoor:["$SLITHERI insuficiente!","¡$SLITHERI insuficiente!","$SLITHERI 不足!"],tbuy:["Item adquirido!","¡Artículo adquirido!","购买成功!"],tb100:["Bateria 100%","Batería 100%","电池 100%"]
};
const J = {you:"You",of:"of",bot:"🤖 AUTO-BOT",wc:"🔗 Connect Phantom",wd:"Click to disconnect",wt:"Connect Phantom wallet",wn:"Phantom not found. Install the extension and reload the page.",
cd0:"🚀 Token and game launch on the same day — date coming soon",cd1:"🚀 Already launched!",cd2:"🚀 Launching in",
tbat:"Battery empty! Recharge in the shop.",tbo:"Bot battery ran out",tdie:"💀 You died! Respawning...",tkill:"🔥 Rival eliminated! +0.5 $SLITHERI",tpoor:"Not enough $SLITHERI!",tbuy:"Item purchased!",tb100:"Battery 100%"};
const LANGS = {en:'English', pt:'Português', es:'Español', zh:'中文'}, IDX = {pt:0, es:1, zh:2}, LOC = {en:'en-US', pt:'pt-BR', es:'es-ES', zh:'zh-CN'};
let lang = 'en'; try { lang = localStorage.getItem('lang') || 'en'; } catch (e) {}
if (!LANGS[lang]) lang = 'en';
window.t = k => (lang === 'en' || !D[k]) ? (J[k] || k) : D[k][IDX[lang]];
const css = document.createElement('style');
css.textContent = "[data-lang-select]{background:rgba(20,24,35,.85);color:#fff;border:1px solid rgba(255,255,255,.25);border-radius:6px;padding:8px;font:700 12px Orbitron,sans-serif;cursor:pointer}[data-lang-select] option{background:#0e111a}";
document.head.appendChild(css);
function apply() {
  document.documentElement.lang = lang; window.LANGLOC = LOC[lang];
  document.querySelectorAll('[data-i]').forEach(el => {
    if (el._en === undefined) el._en = el.innerHTML;
    const e = D[el.dataset.i]; el.innerHTML = (lang === 'en' || !e) ? el._en : e[IDX[lang]];
  });
  document.querySelectorAll('[data-lang-select]').forEach(s => { if (!s.options.length) for (const k in LANGS) s.add(new Option(LANGS[k], k)); s.value = lang; });
  window.dispatchEvent(new Event('langchange'));
}
document.addEventListener('change', e => { if (e.target.matches('[data-lang-select]')) { lang = e.target.value; try { localStorage.setItem('lang', lang); } catch (x) {} apply(); } });
apply();
})();
// Substitui a parte de desenho da comida/moeda no teu index.html por isto:
foods.forEach(f => {
  ctx.save();
  
  ctx.shadowColor = f.glowColor;
  ctx.shadowBlur = 12;

  // Cria um recorte circular perfeito na posição da moeda
  ctx.beginPath();
  ctx.arc(f.x, f.y, f.rad, 0, Math.PI * 2);
  ctx.clip();

  if (coinImage.complete && coinImage.naturalWidth !== 0) {
    ctx.drawImage(coinImage, f.x - f.rad, f.y - f.rad, f.rad * 2, f.rad * 2);
  } else {
    ctx.beginPath();
    ctx.arc(f.x, f.y, f.rad, 0, Math.PI * 2);
    ctx.fillStyle = f.glowColor;
    ctx.fill();
  }

  ctx.restore();
});
