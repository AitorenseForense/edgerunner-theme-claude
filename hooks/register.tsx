import type { EngineInterface, Register, ThemeSetArgs } from 'claude-code'

import { makeColors } from './make-colors.js'

// Luna Edgerunner: espacio negro, la Tierra en el horizonte, polvo lunar,
// acento amarillo neon y detalles lavanda/rosa. Solo modo oscuro.
const { theme, problems } = makeColors({
  label: 'Luna Edgerunner',
  only: 'dark',
  roles: { accent: '#FCF427', danger: '#E0444F', success: '#8CCB6E', warning: '#F2B84B', pro: '#C9A6F5' },
  dark: {
    gray: {
      anchors: {
        'surface-0': '#04040F',
        'surface-1': '#0D1424',
        'surface-2': '#16213A',
        'surface-3': '#1A2640',
        'text-primary': '#F2EDE0',
        'text-secondary': '#C9BFA8',
        'text-muted': '#A59881',
      },
    },
  },
})

const SCENE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
<style>
.s circle{fill:#F2EDE0;opacity:.5}
.a{animation:tw 7s ease-in-out infinite}
.b{animation:tw 9s ease-in-out infinite 2s}
.c{animation:tw 11s ease-in-out infinite 4s}
@keyframes tw{0%,100%{opacity:.5}50%{opacity:.12}}
.halo{animation:glow 16s ease-in-out infinite}
@keyframes glow{0%,100%{opacity:.7}50%{opacity:1}}
.cl{animation:drift 80s ease-in-out infinite alternate}
@keyframes drift{from{transform:translateX(-14px)}to{transform:translateX(14px)}}
</style>
<defs>
<linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#04040F"/><stop offset="1" stop-color="#0A1020"/></linearGradient>
<radialGradient id="atm" cx="800" cy="1060" r="760" gradientUnits="userSpaceOnUse"><stop offset=".9" stop-color="#4FA3D1" stop-opacity="0"/><stop offset=".935" stop-color="#4FA3D1" stop-opacity=".5"/><stop offset="1" stop-color="#4FA3D1" stop-opacity="0"/></radialGradient>
<radialGradient id="earth" cx="820" cy="860" r="700" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#E8DDBF"/><stop offset=".22" stop-color="#5B6F86"/><stop offset=".55" stop-color="#1A2A40"/><stop offset="1" stop-color="#070B18"/></radialGradient>
<linearGradient id="ground" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#B4A88E"/><stop offset=".3" stop-color="#5B5447"/><stop offset="1" stop-color="#15120E"/></linearGradient>
<clipPath id="ec"><circle cx="800" cy="1060" r="700"/></clipPath>
<filter id="soft" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="6"/></filter>
</defs>
<rect width="1600" height="1000" fill="url(#sky)"/>
<g class="s"><circle class="c" cx="308" cy="404" r="0.8"/><circle class="a" cx="1097" cy="96" r="1.2"/><circle class="a" cx="1039" cy="219" r="0.8"/><circle class="a" cx="888" cy="428" r="0.8"/><circle class="b" cx="185" cy="434" r="0.8"/><circle class="a" cx="457" cy="63" r="1.6"/><circle class="a" cx="452" cy="47" r="1"/><circle class="c" cx="858" cy="147" r="0.8"/><circle class="c" cx="1147" cy="185" r="0.8"/><circle class="b" cx="762" cy="99" r="0.8"/><circle class="a" cx="1267" cy="210" r="1.6"/><circle class="" cx="1591" cy="321" r="1.6"/><circle class="" cx="740" cy="306" r="1"/><circle class="b" cx="1431" cy="249" r="0.8"/><circle class="c" cx="1075" cy="506" r="1.2"/><circle class="" cx="589" cy="74" r="0.8"/><circle class="" cx="337" cy="350" r="1"/><circle class="" cx="863" cy="40" r="0.8"/><circle class="c" cx="696" cy="358" r="1.6"/><circle class="" cx="140" cy="95" r="1.2"/><circle class="" cx="1427" cy="66" r="0.8"/><circle class="c" cx="1325" cy="456" r="1.2"/><circle class="" cx="1369" cy="355" r="0.8"/><circle class="" cx="727" cy="172" r="0.8"/><circle class="" cx="120" cy="223" r="1.2"/><circle class="b" cx="1512" cy="253" r="1.6"/><circle class="" cx="1016" cy="82" r="1"/><circle class="" cx="822" cy="284" r="1"/><circle class="" cx="1126" cy="285" r="1.6"/><circle class="c" cx="1398" cy="389" r="1"/><circle class="b" cx="169" cy="180" r="1"/><circle class="b" cx="1348" cy="238" r="0.8"/><circle class="" cx="1206" cy="186" r="1.2"/><circle class="c" cx="8" cy="149" r="1.6"/><circle class="c" cx="1248" cy="326" r="1"/><circle class="a" cx="935" cy="401" r="1.6"/><circle class="" cx="807" cy="106" r="1.6"/><circle class="" cx="127" cy="195" r="0.8"/><circle class="b" cx="902" cy="166" r="0.8"/><circle class="c" cx="1230" cy="53" r="0.8"/><circle class="a" cx="1160" cy="154" r="0.8"/><circle class="c" cx="1256" cy="26" r="0.8"/><circle class="b" cx="1257" cy="385" r="1"/><circle class="c" cx="711" cy="372" r="1.6"/><circle class="a" cx="236" cy="499" r="1.6"/><circle class="" cx="990" cy="319" r="0.8"/><circle class="b" cx="209" cy="350" r="1.2"/><circle class="" cx="1417" cy="165" r="0.8"/><circle class="b" cx="1081" cy="370" r="1"/><circle class="a" cx="1552" cy="305" r="0.8"/><circle class="c" cx="1061" cy="375" r="1"/><circle class="c" cx="1580" cy="228" r="1.2"/><circle class="b" cx="1255" cy="199" r="1"/><circle class="" cx="1515" cy="232" r="1"/><circle class="" cx="728" cy="29" r="0.8"/><circle class="c" cx="967" cy="265" r="1"/><circle class="c" cx="915" cy="357" r="1.2"/><circle class="a" cx="451" cy="104" r="1"/><circle class="" cx="402" cy="345" r="1"/><circle class="" cx="1278" cy="1" r="1.6"/><circle class="c" cx="1317" cy="86" r="0.8"/><circle class="" cx="1457" cy="204" r="1.6"/><circle class="b" cx="888" cy="340" r="0.8"/><circle class="" cx="948" cy="411" r="0.8"/><circle class="b" cx="348" cy="130" r="0.8"/><circle class="b" cx="1209" cy="476" r="1"/><circle class="" cx="1346" cy="358" r="1"/><circle class="b" cx="43" cy="14" r="0.8"/><circle class="b" cx="888" cy="199" r="1"/><circle class="a" cx="515" cy="217" r="1.2"/><circle class="b" cx="1564" cy="333" r="1.2"/><circle class="" cx="268" cy="62" r="1.2"/><circle class="" cx="1356" cy="430" r="1"/><circle class="b" cx="1072" cy="19" r="1.6"/><circle class="b" cx="1246" cy="4" r="1"/><circle class="b" cx="289" cy="484" r="0.8"/><circle class="a" cx="667" cy="494" r="0.8"/><circle class="a" cx="508" cy="195" r="1.2"/><circle class="a" cx="1581" cy="100" r="1.6"/><circle class="a" cx="1556" cy="64" r="1.6"/></g>
<!-- planet rising behind the horizon -->
<circle class="halo" cx="800" cy="1060" r="760" fill="url(#atm)"/>
<circle cx="800" cy="1060" r="700" fill="url(#earth)"/>
<g clip-path="url(#ec)"><g class="cl" fill="#F2EDE0" opacity=".2" filter="url(#soft)"><ellipse cx="519" cy="768" rx="87" ry="22" transform="rotate(7 519 768)"/><ellipse cx="768" cy="648" rx="117" ry="8" transform="rotate(3 768 648)"/><ellipse cx="633" cy="864" rx="131" ry="15" transform="rotate(5 633 864)"/><ellipse cx="1112" cy="849" rx="121" ry="21" transform="rotate(-8 1112 849)"/><ellipse cx="646" cy="905" rx="106" ry="14" transform="rotate(11 646 905)"/><ellipse cx="280" cy="960" rx="60" ry="20" transform="rotate(6 280 960)"/><ellipse cx="288" cy="921" rx="74" ry="15" transform="rotate(7 288 921)"/><ellipse cx="1137" cy="611" rx="131" ry="20" transform="rotate(1 1137 611)"/><ellipse cx="641" cy="567" rx="96" ry="22" transform="rotate(-8 641 567)"/><ellipse cx="974" cy="970" rx="57" ry="15" transform="rotate(-6 974 970)"/><ellipse cx="497" cy="707" rx="139" ry="18" transform="rotate(-3 497 707)"/><ellipse cx="677" cy="543" rx="113" ry="13" transform="rotate(5 677 543)"/><ellipse cx="904" cy="657" rx="83" ry="18" transform="rotate(-12 904 657)"/><ellipse cx="1337" cy="738" rx="125" ry="19" transform="rotate(-7 1337 738)"/><ellipse cx="965" cy="811" rx="109" ry="22" transform="rotate(6 965 811)"/><ellipse cx="897" cy="594" rx="67" ry="18" transform="rotate(6 897 594)"/><ellipse cx="671" cy="901" rx="101" ry="21" transform="rotate(8 671 901)"/><ellipse cx="990" cy="1026" rx="48" ry="14" transform="rotate(-8 990 1026)"/><ellipse cx="449" cy="988" rx="93" ry="21" transform="rotate(-9 449 988)"/><ellipse cx="367" cy="941" rx="45" ry="14" transform="rotate(10 367 941)"/><ellipse cx="902" cy="673" rx="75" ry="16" transform="rotate(-5 902 673)"/><ellipse cx="1098" cy="1014" rx="49" ry="9" transform="rotate(7 1098 1014)"/><ellipse cx="862" cy="479" rx="92" ry="12" transform="rotate(7 862 479)"/><ellipse cx="497" cy="696" rx="83" ry="13" transform="rotate(-1 497 696)"/><ellipse cx="1367" cy="909" rx="88" ry="14" transform="rotate(2 1367 909)"/><ellipse cx="1094" cy="898" rx="116" ry="18" transform="rotate(5 1094 898)"/><ellipse cx="235" cy="803" rx="104" ry="12" transform="rotate(1 235 803)"/><ellipse cx="986" cy="618" rx="78" ry="14" transform="rotate(-4 986 618)"/><ellipse cx="825" cy="663" rx="41" ry="20" transform="rotate(1 825 663)"/><ellipse cx="1099" cy="1005" rx="88" ry="17" transform="rotate(6 1099 1005)"/><ellipse cx="866" cy="901" rx="120" ry="13" transform="rotate(2 866 901)"/><ellipse cx="558" cy="539" rx="117" ry="19" transform="rotate(-4 558 539)"/><ellipse cx="900" cy="940" rx="47" ry="18" transform="rotate(-12 900 940)"/><ellipse cx="1064" cy="993" rx="98" ry="12" transform="rotate(6 1064 993)"/><ellipse cx="867" cy="844" rx="63" ry="13" transform="rotate(12 867 844)"/><ellipse cx="640" cy="669" rx="78" ry="20" transform="rotate(0 640 669)"/><ellipse cx="307" cy="832" rx="112" ry="18" transform="rotate(11 307 832)"/><ellipse cx="459" cy="871" rx="123" ry="20" transform="rotate(-4 459 871)"/><ellipse cx="637" cy="890" rx="95" ry="18" transform="rotate(10 637 890)"/><ellipse cx="396" cy="883" rx="82" ry="18" transform="rotate(-5 396 883)"/><ellipse cx="701" cy="527" rx="61" ry="9" transform="rotate(-2 701 527)"/><ellipse cx="962" cy="871" rx="112" ry="15" transform="rotate(-4 962 871)"/><ellipse cx="653" cy="918" rx="107" ry="11" transform="rotate(-2 653 918)"/><ellipse cx="1228" cy="715" rx="63" ry="21" transform="rotate(-4 1228 715)"/><ellipse cx="557" cy="585" rx="50" ry="20" transform="rotate(7 557 585)"/><ellipse cx="710" cy="876" rx="77" ry="16" transform="rotate(-4 710 876)"/><ellipse cx="754" cy="624" rx="77" ry="14" transform="rotate(6 754 624)"/><ellipse cx="648" cy="508" rx="59" ry="11" transform="rotate(-12 648 508)"/><ellipse cx="764" cy="531" rx="119" ry="16" transform="rotate(1 764 531)"/><ellipse cx="905" cy="467" rx="131" ry="11" transform="rotate(-11 905 467)"/><ellipse cx="1158" cy="651" rx="124" ry="19" transform="rotate(4 1158 651)"/><ellipse cx="1202" cy="958" rx="69" ry="21" transform="rotate(-10 1202 958)"/><ellipse cx="1331" cy="745" rx="55" ry="20" transform="rotate(-5 1331 745)"/><ellipse cx="231" cy="902" rx="128" ry="16" transform="rotate(-6 231 902)"/><ellipse cx="1332" cy="816" rx="113" ry="8" transform="rotate(-12 1332 816)"/></g></g>
<!-- moon ground -->
<path d="M0 860C200 835 380 850 560 842S900 830 1100 845S1420 838 1600 850V1000H0Z" fill="url(#ground)"/>
<path d="M0 880C260 868 520 884 800 874S1300 866 1600 878" stroke="#F2EDE0" stroke-opacity=".15" stroke-width="2" fill="none"/>
<ellipse cx="380" cy="920" rx="70" ry="10" fill="#15120E" opacity=".6"/>
<ellipse cx="1180" cy="940" rx="110" ry="14" fill="#15120E" opacity=".6"/>
<ellipse cx="820" cy="905" rx="40" ry="6" fill="#15120E" opacity=".5"/>
</svg>`

const BASE: ThemeSetArgs = {
  colors: theme,
  backdrop: { scene: 'luna', glass: { blur: 12, tint: '#04040F', opacity: 0.55 } },
}

const LOOK: ThemeSetArgs = {
  ...BASE,
  style: {
    UserMessage: {
      color: '#F2EDE0',
      backgroundColor: '#16213AEE',
      borderColor: '#2A3550',
      borderWidth: 1,
      radius: 14,
      paddingX: 14,
      paddingY: 10,
      shadow: { x: 0, y: 0, blur: 14, color: '#4FA3D133' },
    },
    AssistantMessage: {
      color: '#F2EDE0',
      backgroundColor: '#04040FD9',
      radius: 12,
      paddingX: 14,
      paddingY: 10,
    },
    Heading: { color: '#FCF427', fontWeight: 'semibold' },
    ToolUse: { color: '#E1E7FF', backgroundColor: '#0D1424E6', borderColor: '#495678', borderWidth: 1, radius: 8, paddingX: 8 },
  },
}

// Aplica el tema. Si falla con los estilos de los mensajes, aplica al menos
// los colores y el fondo.
async function apply($: EngineInterface) {
  const unpainted = problems.find(line => line.startsWith("Desktop won't paint"))
  if (unpainted !== undefined) {
    $.ui.log(unpainted)
  }
  try {
    await $.theme.set(LOOK)
  } catch (error) {
    $.ui.log(String(error))
    await $.theme.set(BASE)
  }
}

export const register: Register = on => {
  // Sesión nueva, sesión reanudada o plugin recién activado: el tema se queda
  // puesto para la sesión aunque la app todavía no esté conectada (por eso no
  // se muestra ningún aviso en la barra de estado).
  on('session.start', async ($, e, next) => {
    await apply($)
    return next(e)
  })

  // Al abrir una sesión anterior desde la app de escritorio o el móvil, se
  // vuelve a aplicar, para que los chats de Code que ya existían también lo
  // tengan.
  on('session.attach', async ($, e, next) => {
    const result = await next(e)
    if (e.surface === 'desktop' || e.surface === 'mobile') {
      await apply($)
    }
    return result
  })

  on('ui.render', { component: 'Backdrop' }, ($, e, next) => {
    if (e.surface !== 'desktop' && e.surface !== 'mobile') {
      return next(e)
    }
    const { Svg } = $.ui.resolve(e)
    return <Svg source={SCENE} alt="La Tierra sobre el horizonte lunar bajo un cielo estrellado" isInteractive />
  })
}
