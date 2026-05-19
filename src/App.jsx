import { useState, useEffect } from "react";

const NAVY = "#0b1826";
const GOLD = "#c9a84c";
const NAVY2 = "#1a2e45";

function LogoIcon({ size = 40, color = "white" }) {
  return (
    <svg viewBox="0 0 50 58" fill="none" width={size} height={size}>
      <path d="M4 17L25 5L46 17" stroke={color} strokeWidth="5.5" strokeLinecap="square" fill="none"/>
      <path d="M10 24L25 16L40 24" stroke={color} strokeWidth="4" strokeLinecap="square" fill="none"/>
      <polygon points="25,32 42,42 42,54 25,58 8,54 8,42" stroke={color} strokeWidth="4.5" fill="none"/>
      <polygon points="25,39 35,44 35,52 25,55 15,52 15,44" fill={color}/>
    </svg>
  );
}

// ─── CONTENT DATA ─────────────────────────────────────────────────────────────

const DETAIL = {
  center: {
    badge: "Grupo Arce Monsegur",
    headline: "Nicolás Arce Monsegur",
    sub: "Martillero · Corredor Inmobiliario · Agente CNV",
    intro: `Profesional con formación dual en el mercado inmobiliario y el mercado de capitales. Combino la solidez técnica de la corredura matriculada con la visión financiera del asesor de inversiones, ofreciendo una perspectiva integral única en Argentina.\n\nMi filosofía: cada decisión inmobiliaria es también una decisión financiera. Con esa convicción guío a familias, inversores y empresas para maximizar su patrimonio con seguridad jurídica, transparencia y criterio técnico.`,
    credentials: [
      { label: "Martillero público matriculado", desc: "Habilitado para remates judiciales, voluntarios y privados en todo el territorio nacional" },
      { label: "Corredor inmobiliario matriculado", desc: "Intermediación profesional en compraventa, locación y tasación de bienes inmuebles" },
      { label: "Agente productor CNV registrado", desc: "Comisión Nacional de Valores — distribución de instrumentos del mercado de capitales" },
      { label: "Idóneo mercado de capitales", desc: "Acreditación para asesoramiento en inversiones, fondos y portfolios financieros" },
      { label: "Lic. en Desarrollo de Negocios Inmobiliarios", desc: "Universidad Siglo 21 — estructuración, financiamiento y gestión de proyectos" },
    ],
    stats: [
      { n: "+15 años", l: "de trayectoria en el mercado" },
      { n: "+200 M USD", l: "en operaciones gestionadas" },
      { n: "CNV", l: "Agente productor registrado" },
      { n: "360°", l: "Asesoramiento integral" },
    ],
    vmo: [
      { icon: "◎", title: "Visión", body: "Ser la firma de referencia en Argentina para inversores que buscan integrar el mercado inmobiliario con el mercado de capitales, reconocidos por calidad técnica, transparencia y creación sostenida de valor patrimonial." },
      { icon: "◈", title: "Misión", body: "Brindar asesoramiento integral y estratégico en real estate e inversiones financieras, combinando las credenciales de corredor inmobiliario matriculado y agente CNV para ofrecer soluciones a medida con seguridad jurídica." },
      { icon: "◇", title: "Objetivos", body: "• Consolidar un fondo inmobiliario de USD 500K+ a corto plazo\n• Escalar la cartera de administración a 50+ unidades\n• Desarrollar Family Office para 10+ familias patrimoniales\n• Posicionarse como referente en estructuración de fideicomisos en NOA y CABA" },
    ],
    re_blocks: [
      { title: "Por qué Real Estate", body: "En Argentina, el ladrillo es el refugio de valor por excelencia. En contextos de alta inflación y volatilidad cambiaria, los inmuebles ofrecen preservación de capital en dólares, generación de renta y revalorización estructural." },
      { title: "El valor de lo financiero", body: "Integrar instrumentos del mercado de capitales — bonos, CEDEARs, ON — permite diversificar, generar liquidez y capturar oportunidades que el ladrillo solo no ofrece. La combinación es la clave de un portafolio robusto." },
      { title: "Oportunidades únicas", body: "Argentina presenta una de las mayores brechas del mundo entre el valor de los inmuebles y su costo de construcción. Las subastas judiciales, el flipping estratégico y los desarrollos en pozo generan retornos imposibles en mercados maduros." },
      { title: "Fideicomiso como herramienta", body: "El fideicomiso es la estructura legal más eficiente para inversiones colectivas e individuales: separa el patrimonio, protege al inversor, facilita la transmisión y optimiza la carga fiscal bajo el marco argentino vigente." },
    ],
    trust: [
      { icon: "🏛", title: "Respaldo regulatorio", body: "Operamos bajo el Código Civil y Comercial, la Ley 26.831 de Mercado de Capitales y la normativa CNV vigente. Cada operación tiene cobertura legal completa." },
      { icon: "🔒", title: "Separación patrimonial", body: "Toda inversión se estructura bajo fideicomiso, garantizando que el patrimonio del inversor quede separado del nuestro en todo momento." },
      { icon: "📊", title: "Transparencia total", body: "Rendición de cuentas mensual con estado de resultados detallado, documentación accesible y comunicación directa con el responsable de cartera." },
      { icon: "🤝", title: "Alineación de intereses", body: "Nuestros honorarios incluyen carried interest y hurdle rate: solo ganamos en exceso si usted supera el rendimiento mínimo acordado." },
      { icon: "📋", title: "Due diligence riguroso", body: "Cada activo pasa por análisis técnico, legal y financiero antes de ingresar al portafolio. Valuaciones independientes, estudio de títulos y análisis de flujo de fondos." },
      { icon: "🎓", title: "Formación continua", body: "Actualización permanente en normativa CNV, estructuras fiduciarias y tendencias del real estate local e internacional." },
    ],
  },
  fci: {
    badge: "Mercado de Capitales",
    headline: "Fondos Comunes de Inversión",
    body: `Como agente productor registrado ante la CNV, gestionamos el acceso de inversores calificados a fondos que combinan seguridad jurídica, transparencia y rendimientos superiores al mercado.\n\nLos fondos operan bajo estructura de fideicomiso financiero o fondo común cerrado, garantizando separación patrimonial y protección del inversor.`,
    items: [
      { label: "Capital mínimo", value: "USD 10.000" },
      { label: "Estructura legal", value: "Fideicomiso financiero / FCC" },
      { label: "Registro", value: "Agente productor CNV matriculado" },
      { label: "Retorno objetivo", value: "18–24% USD anual" },
      { label: "Plazo base", value: "36 meses con liquidez semestral" },
      { label: "Comisión", value: "2% anual + 20% carried interest" },
    ],
    children: [
      { id: "fci_re", label: "FCI Real Estate", desc: "Flipping, desarrollos y subastas judiciales" },
      { id: "fci_fin", label: "FCI Financiero", desc: "Renta mixta, moderado, anti-inflacionario" },
    ],
  },
  fci_re: {
    badge: "Fondo Inmobiliario — Oportunístico",
    headline: "FCI Real Estate",
    body: "Vehículo oportunístico que captura valor en distintos segmentos del mercado inmobiliario argentino, combinando tres líneas de acción que generan retornos superiores con independencia del ciclo del mercado.",
    items: [
      { label: "Flipping residencial", value: "Compra, refacción y reventa. Margen bruto objetivo: 25–40% USD por operación" },
      { label: "Subastas judiciales", value: "Adquisición en remates con descuento de 30–50% sobre valor de mercado. Arce Monsegur como martillero actuante" },
      { label: "Desarrollos en pozo", value: "Participación en proyectos de construcción con upside de valorización" },
      { label: "Oportunidades de mercado", value: "Operaciones tácticas ante distorsiones de precio o urgencias del vendedor" },
    ],
    highlight: { label: "Retorno objetivo", value: "22–28% USD anual", sub: "Plazo 36 meses · Liquidez semestral · Hurdle 8% USD" },
  },
  fci_fin: {
    badge: "Fondo Financiero — Moderado",
    headline: "FCI Financiero",
    body: "Fondo de renta mixta con perfil moderado, diseñado para preservar el poder adquisitivo del capital y obtener rendimientos reales positivos en dólares o en moneda local ajustada. Ideal para inversores que buscan estabilidad sin renunciar al crecimiento.",
    items: [
      { label: "Perfil de riesgo", value: "Moderado — baja volatilidad, drawdown controlado" },
      { label: "Objetivo", value: "Ganarle a la inflación en términos reales, en ARS y USD" },
      { label: "Instrumentos", value: "Bonos soberanos, ON corporativas, CEDEARs, FCI locales" },
      { label: "Cobertura", value: "Activos dolarizados + instrumentos CER/UVA" },
    ],
    highlight: { label: "Retorno objetivo", value: "CER +8% / USD +10%", sub: "Horizonte 12–24 meses · Rescate mensual disponible" },
  },
  family: {
    badge: "Gestión Patrimonial Integral",
    headline: "Family Office",
    body: "Orientado a familias e individuos de alto patrimonio. Actuamos como su CFO familiar: consolidamos, organizamos y optimizamos cada componente de su patrimonio bajo una visión estratégica unificada, diseñando un plan a medida alineado con sus valores, metas de largo plazo y necesidades de liquidez.",
    items: [
      { label: "Diagnóstico patrimonial", value: "Inventario completo de activos financieros, inmobiliarios y empresariales" },
      { label: "Planificación sucesoria", value: "Estructuración de fideicomisos de administración y transmisión generacional" },
      { label: "Optimización fiscal", value: "Estrategias de eficiencia: Ganancias, Bienes Personales, IVA" },
      { label: "Inversiones diversificadas", value: "Portafolios mixtos: real estate, mercado de capitales, activos alternativos" },
      { label: "Reporting mensual", value: "Dashboard de performance con estado patrimonial consolidado" },
      { label: "Coordinación de asesores", value: "Articulación con estudio contable, legal y notarial del cliente" },
    ],
  },
  admin: {
    badge: "Property Management",
    headline: "Administración de Propiedades",
    body: "Servicio profesional e integral para propietarios que buscan maximizar la rentabilidad de sus inmuebles sin involucrarse en la gestión operativa diaria. Actuamos como fiduciarios bajo fideicomiso de administración con rendición mensual formal.",
    items: [
      { label: "Gestión operativa 360°", value: "Check-in/out, limpieza, mantenimiento, emergencias y coordinación de proveedores" },
      { label: "Optimización de ingresos", value: "Pricing dinámico y maximización de ocupación" },
      { label: "Rendición de cuentas", value: "Estado detallado mensual: ingresos, gastos, neto al propietario" },
      { label: "Estructura fideicomiso", value: "Separación patrimonial y seguridad jurídica plena" },
    ],
    children: [
      { id: "admin_temp", label: "Alquileres Temporales (Airbnb)", desc: "Gestión completa en plataformas turísticas" },
      { id: "admin_cv", label: "Compra / Venta · Alquiler", desc: "Intermediación y administración tradicional" },
    ],
  },
  admin_temp: {
    badge: "Short-Term Rentals",
    headline: "Alquileres Temporales (Airbnb)",
    body: "Gestionamos propiedades en Airbnb, Booking y plataformas turísticas similares. El propietario solo recibe su rendición mensual; nosotros nos ocupamos de todo.\n\nEstructura de fideicomiso de administración: Arce Monsegur como fiduciario, el propietario como beneficiario — transparencia total garantizada.",
    items: [
      { label: "Publicación profesional", value: "Fotos, copywriting, gestión de reseñas y posicionamiento SEO" },
      { label: "Pricing dinámico", value: "Ajuste de tarifas por demanda, eventos, feriados y estacionalidad" },
      { label: "Operaciones diarias", value: "Check-in/out, comunicación con huéspedes 24/7, limpieza y amenities" },
      { label: "Mantenimiento preventivo", value: "Coordinación de reparaciones para mantener el estándar de la unidad" },
      { label: "Rendición mensual", value: "Ingresos brutos, gastos detallados y neto transferido al propietario" },
    ],
    highlight: { label: "Honorario fiduciario", value: "20–25% del ingreso bruto", sub: "Todo incluido · Sin costos ocultos · Transferencia mensual" },
  },
  admin_cv: {
    badge: "Intermediación y Gestión Tradicional",
    headline: "Compra / Venta · Alquiler",
    body: "Como corredores y martilleros inmobiliarios matriculados, intermediamos en compraventa y locación de inmuebles residenciales y comerciales, aportando conocimiento de mercado, red de contactos calificada y capacidad de estructuración financiera.",
    items: [
      { label: "Tasación profesional", value: "Valuación técnica con análisis comparativo de mercado actualizado" },
      { label: "Marketing inmobiliario", value: "Portales líderes, redes sociales y base de inversores propia" },
      { label: "Negociación y cierre", value: "Acompañamiento desde la oferta hasta la escritura" },
      { label: "Administración de alquileres", value: "Cobro de rentas, indexación ICL/CER, renovaciones y garantías" },
      { label: "Asesoramiento financiero", value: "Estructuración de financiamiento y créditos hipotecarios" },
    ],
    highlight: { label: "Comisión estándar", value: "3% + IVA por parte", sub: "Compraventa · Negociable en operaciones de volumen" },
  },
};

// ─── MIND MAP LAYOUT ──────────────────────────────────────────────────────────

const CX = 550, CY = 440;

const NODES = {
  center:     { x: CX,  y: CY,  r: 108, lines: ["GRUPO", "ARCE", "MONSEGUR"], isCenter: true },
  fci:        { x: 200, y: 190, r: 88,  lines: ["Fondos Comunes", "de Inversión"] },
  family:     { x: 170, y: 660, r: 88,  lines: ["Family", "Office"] },
  admin:      { x: 880, y: 440, r: 88,  lines: ["Administración", "de Propiedades"] },
  fci_re:     { x: 60,  y: 50,  r: 66,  lines: ["FCI", "Real Estate"],           isSub: true },
  fci_fin:    { x: 340, y: 50,  r: 66,  lines: ["FCI", "Financiero"],             isSub: true },
  admin_temp: { x: 990, y: 230, r: 66,  lines: ["Alquileres", "Temporales", "(Airbnb)"], isSub: true },
  admin_cv:   { x: 990, y: 650, r: 66,  lines: ["Compra/Venta", "Alquiler"],      isSub: true },
};

const CONNECTIONS = [
  ["center", "fci"], ["center", "family"], ["center", "admin"],
  ["fci", "fci_re"], ["fci", "fci_fin"],
  ["admin", "admin_temp"], ["admin", "admin_cv"],
];

function Line({ x1, y1, x2, y2, delay = 0 }) {
  const len = Math.hypot(x2 - x1, y2 - y1);
  return (
    <line x1={x1} y1={y1} x2={x2} y2={y2}
      stroke={GOLD} strokeWidth="1.4" opacity="0.4"
      strokeDasharray={len} strokeDashoffset={len}
      style={{ animation: `dl 0.7s ${delay}s ease forwards` }}
    />
  );
}

function MapNode({ id, onNavigate }) {
  const n = NODES[id];
  const [hov, setHov] = useState(false);
  const fill = n.isCenter ? GOLD : hov ? "#22384f" : NAVY2;
  const tc   = n.isCenter ? NAVY : GOLD;
  const sc   = hov || n.isCenter ? GOLD : "rgba(201,168,76,0.45)";
  const fs   = n.isSub ? 11.5 : n.isCenter ? 13.5 : 13;
  const lh   = fs + 4;
  const tot  = n.lines.length * lh;

  return (
    <g onClick={() => onNavigate(id)}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ cursor: "pointer", animation: `pi 0.5s ${n.isCenter ? 0.05 : n.isSub ? 0.75 : 0.4}s ease both`, opacity: 0 }}>
      {hov && (
        <circle cx={n.x} cy={n.y} r={n.r + 9} fill="none"
          stroke={GOLD} strokeWidth="1" opacity="0.28"
          style={{ animation: "pr 1.8s ease-in-out infinite" }}/>
      )}
      <circle cx={n.x} cy={n.y} r={n.r} fill={fill} stroke={sc}
        strokeWidth={hov || n.isCenter ? 2.5 : 1.5}
        style={{ transition: "all 0.28s" }}/>
      {n.lines.map((line, i) => (
        <text key={i}
          x={n.x} y={n.y - tot / 2 + i * lh + lh * 0.65}
          textAnchor="middle" dominantBaseline="middle"
          fill={tc} fontFamily="'Barlow Condensed', sans-serif"
          fontSize={fs} fontWeight="700" letterSpacing="0.05em"
          style={{ pointerEvents: "none" }}>
          {line}
        </text>
      ))}
      <text x={n.x} y={n.y + n.r - (n.isSub ? 9 : 11)}
        textAnchor="middle"
        fill={n.isCenter ? "rgba(11,24,38,0.55)" : "rgba(201,168,76,0.5)"}
        fontSize="9" fontFamily="'Barlow', sans-serif"
        style={{ pointerEvents: "none" }}>
        ver →
      </text>
    </g>
  );
}

function MindMap({ onNavigate }) {
  return (
    <div style={{ width: "100%", overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
      <svg viewBox="0 0 1100 900"
        style={{ display: "block", margin: "0 auto", width: "100%", minWidth: 720, maxWidth: 1100 }}>
        <defs>
          <style>{`
            @keyframes dl { to { stroke-dashoffset: 0 } }
            @keyframes pi {
              from { opacity:0; transform-box:fill-box; transform-origin:center; transform:scale(0.35) }
              to   { opacity:1; transform:scale(1) }
            }
            @keyframes pr { 0%,100%{opacity:0.28} 50%{opacity:0.58} }
          `}</style>
          <radialGradient id="bgr" cx="50%" cy="50%" r="65%">
            <stop offset="0%" stopColor="#142234"/>
            <stop offset="100%" stopColor={NAVY}/>
          </radialGradient>
          <pattern id="hexp" width="80" height="70" patternUnits="userSpaceOnUse">
            <polygon points="40,3 75,22 75,55 40,70 5,55 5,22"
              fill="none" stroke="rgba(201,168,76,0.045)" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="1100" height="900" fill="url(#bgr)" rx="18"/>
        <rect width="1100" height="900" fill="url(#hexp)" rx="18"/>
        {CONNECTIONS.map(([a, b], i) => {
          const na = NODES[a], nb = NODES[b];
          return <Line key={`${a}-${b}`} x1={na.x} y1={na.y} x2={nb.x} y2={nb.y} delay={0.25 + i * 0.08}/>;
        })}
        {Object.keys(NODES).map(id => (
          <MapNode key={id} id={id} onNavigate={onNavigate}/>
        ))}
      </svg>
    </div>
  );
}

// ─── SHARED UI COMPONENTS ────────────────────────────────────────────────────

function Shell({ onBack, badge, headline, sub, children }) {
  return (
    <div style={{ minHeight: "100vh", background: NAVY, fontFamily: "'Barlow', sans-serif" }}>
      <style>{`@keyframes fsi{from{opacity:0;transform:translateX(28px)}to{opacity:1;transform:none}}`}</style>
      <div style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "rgba(11,24,38,0.97)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(201,168,76,0.18)",
        padding: "16px 40px", display: "flex", alignItems: "center", gap: 14,
      }}>
        <button onClick={onBack} style={{
          background: "none", border: "1px solid rgba(201,168,76,0.3)", color: GOLD,
          padding: "7px 16px", cursor: "pointer", fontFamily: "'Barlow', sans-serif",
          fontSize: "0.73rem", fontWeight: 700, letterSpacing: "0.1em",
          textTransform: "uppercase", borderRadius: 2,
        }}
          onMouseEnter={e => e.target.style.background = "rgba(201,168,76,0.1)"}
          onMouseLeave={e => e.target.style.background = "none"}>
          ← Volver
        </button>
        <div style={{ width: 1, height: 20, background: "rgba(201,168,76,0.2)" }}/>
        <LogoIcon size={24} color={GOLD}/>
        <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Grupo Arce Monsegur
        </span>
      </div>
      <div style={{ padding: "60px 10vw 100px", maxWidth: 1120, margin: "0 auto", animation: "fsi 0.5s ease both" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 9, marginBottom: 18 }}>
          <div style={{ width: 24, height: 1, background: GOLD }}/>
          <span style={{ color: GOLD, fontSize: "0.67rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase" }}>{badge}</span>
        </div>
        <h1 style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 800,
          color: "white", lineHeight: 0.95, marginBottom: sub ? 10 : 28,
        }}>{headline}</h1>
        {sub && <p style={{ color: GOLD, fontSize: "0.88rem", letterSpacing: "0.06em", marginBottom: 28 }}>{sub}</p>}
        <div style={{ width: 50, height: 3, background: GOLD, marginBottom: 44 }}/>
        {children}
      </div>
    </div>
  );
}

function SecHead({ label, title }) {
  return (
    <div style={{ marginBottom: 28, marginTop: 4 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 10 }}>
        <div style={{ width: 20, height: 1, background: GOLD }}/>
        <span style={{ color: GOLD, fontSize: "0.66rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>{label}</span>
      </div>
      <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)", fontWeight: 800, color: "white" }}>{title}</h2>
      <div style={{ width: 38, height: 3, background: GOLD, marginTop: 12 }}/>
    </div>
  );
}

function Grid({ children }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 2, background: "rgba(255,255,255,0.03)", marginBottom: 64 }}>
      {children}
    </div>
  );
}

function Block({ title, value, desc }) {
  return (
    <div style={{ background: "#0d1e30", padding: "24px 26px", borderLeft: `3px solid ${GOLD}` }}>
      {title && <div style={{ color: GOLD, fontSize: "0.67rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 7 }}>{title}</div>}
      {value && <div style={{ color: "rgba(255,255,255,0.82)", fontSize: "0.87rem", lineHeight: 1.6 }}>{value}</div>}
      {desc  && <div style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.84rem", lineHeight: 1.7, marginTop: title ? 4 : 0 }}>{desc}</div>}
    </div>
  );
}

// ─── CENTER PAGE ─────────────────────────────────────────────────────────────

function CenterPage({ onBack }) {
  const d = DETAIL.center;
  return (
    <Shell onBack={onBack} badge={d.badge} headline={d.headline} sub={d.sub}>
      <p style={{ color: "rgba(255,255,255,0.63)", fontSize: "0.97rem", lineHeight: 1.88, maxWidth: 700, marginBottom: 48, whiteSpace: "pre-line" }}>
        {d.intro}
      </p>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 2, marginBottom: 64 }}>
        {d.stats.map(s => (
          <div key={s.n} style={{ background: "#0d1e30", padding: "22px 24px", borderBottom: `3px solid ${GOLD}` }}>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.9rem", fontWeight: 800, color: GOLD, lineHeight: 1 }}>{s.n}</div>
            <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.48)", marginTop: 4 }}>{s.l}</div>
          </div>
        ))}
      </div>

      {/* Credentials */}
      <SecHead label="Credenciales profesionales" title="Formación & Habilitaciones" />
      <Grid>
        {d.credentials.map((c, i) => <Block key={i} title={c.label} desc={c.desc}/>)}
      </Grid>

      {/* VMO */}
      <SecHead label="Identidad corporativa" title="Visión · Misión · Objetivos" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18, marginBottom: 64 }}>
        {d.vmo.map((v, i) => (
          <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: `1px solid rgba(201,168,76,0.18)`, padding: "36px 30px", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 16, right: 20, fontFamily: "'Barlow Condensed', sans-serif", fontSize: "4.5rem", fontWeight: 800, color: "rgba(201,168,76,0.05)", lineHeight: 1 }}>{v.icon}</div>
            <div style={{ color: GOLD, fontSize: "1.6rem", marginBottom: 12 }}>{v.icon}</div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.5rem", fontWeight: 800, color: "white", marginBottom: 14 }}>{v.title}</div>
            <div style={{ width: 28, height: 2, background: GOLD, marginBottom: 16 }}/>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.87rem", lineHeight: 1.85, whiteSpace: "pre-line" }}>{v.body}</p>
          </div>
        ))}
      </div>

      {/* RE philosophy */}
      <SecHead label="Filosofía de inversión" title="Real Estate & Finanzas en Argentina" />
      <Grid>
        {d.re_blocks.map((c, i) => (
          <div key={i} style={{ background: "#0d1e30", padding: "30px 26px" }}>
            <div style={{ width: 24, height: 2, background: GOLD, marginBottom: 14 }}/>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.15rem", fontWeight: 700, color: "white", marginBottom: 10 }}>{c.title}</div>
            <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.56)", lineHeight: 1.8 }}>{c.body}</div>
          </div>
        ))}
      </Grid>

      {/* Trust */}
      <SecHead label="Por qué elegirnos" title="Confianza & Transparencia" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 14, marginBottom: 40 }}>
        {d.trust.map((t, i) => (
          <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: `1px solid rgba(201,168,76,0.15)`, padding: "26px 24px" }}>
            <div style={{ fontSize: "1.7rem", marginBottom: 10 }}>{t.icon}</div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.05rem", fontWeight: 700, color: "white", marginBottom: 8 }}>{t.title}</div>
            <div style={{ fontSize: "0.83rem", color: "rgba(255,255,255,0.56)", lineHeight: 1.75 }}>{t.body}</div>
          </div>
        ))}
      </div>
    </Shell>
  );
}

// ─── GENERIC DETAIL PAGE ─────────────────────────────────────────────────────

function GenericPage({ pageId, onBack, onNavigate }) {
  const d = DETAIL[pageId];
  if (!d) return null;
  return (
    <Shell onBack={onBack} badge={d.badge} headline={d.headline}>
      <p style={{ color: "rgba(255,255,255,0.63)", fontSize: "0.96rem", lineHeight: 1.88, maxWidth: 700, marginBottom: 44, whiteSpace: "pre-line" }}>
        {d.body}
      </p>
      {d.highlight && (
        <div style={{ background: "rgba(201,168,76,0.1)", border: `1px solid rgba(201,168,76,0.28)`, padding: "26px 32px", marginBottom: 52, display: "inline-flex", flexDirection: "column", gap: 4 }}>
          <span style={{ color: "rgba(201,168,76,0.65)", fontSize: "0.67rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase" }}>{d.highlight.label}</span>
          <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "2rem", fontWeight: 800, color: GOLD, lineHeight: 1 }}>{d.highlight.value}</span>
          <span style={{ color: "rgba(255,255,255,0.38)", fontSize: "0.78rem" }}>{d.highlight.sub}</span>
        </div>
      )}
      {d.items && (
        <Grid>
          {d.items.map((item, i) => <Block key={i} title={item.label} value={item.value}/>)}
        </Grid>
      )}
      {d.children && d.children.length > 0 && (
        <div>
          <div style={{ color: GOLD, fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 18, display: "flex", alignItems: "center", gap: 9 }}>
            <div style={{ width: 18, height: 1, background: GOLD }}/> Sub-áreas
          </div>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            {d.children.map(c => (
              <button key={c.id} onClick={() => onNavigate(c.id)}
                style={{ background: "rgba(201,168,76,0.07)", border: `1.5px solid rgba(201,168,76,0.28)`, padding: "22px 28px", cursor: "pointer", textAlign: "left", transition: "all 0.28s", minWidth: 190, fontFamily: "'Barlow', sans-serif" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(201,168,76,0.13)"; e.currentTarget.style.borderColor = GOLD; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(201,168,76,0.07)"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.28)"; }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.05rem", fontWeight: 700, color: "white", marginBottom: 5 }}>{c.label}</div>
                <div style={{ fontSize: "0.79rem", color: "rgba(255,255,255,0.45)", marginBottom: 10 }}>{c.desc}</div>
                <div style={{ color: GOLD, fontSize: "0.74rem" }}>Ver detalle →</div>
              </button>
            ))}
          </div>
        </div>
      )}
    </Shell>
  );
}

// ─── HOME PAGE ────────────────────────────────────────────────────────────────

function Home({ onNavigate }) {
  const [sc, setSc] = useState(false);
  useEffect(() => {
    const fn = () => setSc(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div style={{ background: NAVY, minHeight: "100vh", fontFamily: "'Barlow', sans-serif" }}>
      <style>{`
        @keyframes fu { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:none} }
        * { box-sizing:border-box; margin:0; padding:0; }
        body { background:${NAVY}; }
        ::-webkit-scrollbar { width:6px; height:6px; }
        ::-webkit-scrollbar-track { background:${NAVY}; }
        ::-webkit-scrollbar-thumb { background:rgba(201,168,76,0.3); border-radius:3px; }
      `}</style>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: sc ? "12px 44px" : "18px 44px",
        background: "rgba(11,24,38,0.97)", backdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(201,168,76,0.17)", transition: "padding 0.3s",
      }}>
        <button onClick={() => onNavigate("center")}
          style={{ display: "flex", alignItems: "center", gap: 11, background: "none", border: "none", cursor: "pointer", padding: 0 }}>
          <LogoIcon size={30}/>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.1rem", fontWeight: 800, color: "white", letterSpacing: "0.08em", lineHeight: 1.1, textAlign: "left" }}>
            GRUPO ARCE MONSEGUR
            <div style={{ fontSize: "0.46rem", fontWeight: 500, letterSpacing: "0.18em", color: GOLD, fontFamily: "'Barlow', sans-serif", marginTop: 2 }}>
              REAL ESTATE · FINANZAS · INVERSIONES
            </div>
          </div>
        </button>
        <div style={{ display: "flex", gap: 6 }}>
          {[
            { id: "center", l: "Nosotros" },
            { id: "fci",    l: "FCI" },
            { id: "family", l: "Family Office" },
            { id: "admin",  l: "Propiedades" },
          ].map(it => (
            <button key={it.id} onClick={() => onNavigate(it.id)}
              style={{ background: "none", border: "1px solid rgba(201,168,76,0.26)", color: "rgba(255,255,255,0.6)", padding: "6px 14px", cursor: "pointer", fontFamily: "'Barlow', sans-serif", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", borderRadius: 2, transition: "all 0.2s" }}
              onMouseEnter={e => { e.target.style.borderColor = GOLD; e.target.style.color = GOLD; }}
              onMouseLeave={e => { e.target.style.borderColor = "rgba(201,168,76,0.26)"; e.target.style.color = "rgba(255,255,255,0.6)"; }}>
              {it.l}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section style={{ paddingTop: 82, minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
        {/* Background hex pattern */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='90' height='78'%3E%3Cpolygon points='45,3 84,24 84,60 45,78 6,60 6,24' fill='none' stroke='%23c9a84c' stroke-width='1'/%3E%3C/svg%3E")`, backgroundSize: "90px 78px" }}/>

        <div style={{ textAlign: "center", marginBottom: 10, padding: "0 20px", animation: "fu 0.7s 0.1s ease both", opacity: 0 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
            <div style={{ width: 26, height: 1, background: GOLD }}/>
            <span style={{ color: GOLD, fontSize: "0.66rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase" }}>
              Plataforma de inversiones & servicios
            </span>
            <div style={{ width: 26, height: 1, background: GOLD }}/>
          </div>
          <p style={{ color: "rgba(255,255,255,0.36)", fontSize: "0.8rem", letterSpacing: "0.05em" }}>
            Clic en el círculo central o en cualquier área para explorar
          </p>
        </div>

        <div style={{ width: "100%", padding: "0 8px", animation: "fu 0.7s 0.2s ease both", opacity: 0 }}>
          <MindMap onNavigate={onNavigate}/>
        </div>

        {/* Legend */}
        <div style={{ display: "flex", gap: 20, marginTop: 6, flexWrap: "wrap", justifyContent: "center", padding: "0 20px", animation: "fu 0.7s 0.5s ease both", opacity: 0 }}>
          {[
            { c: GOLD,   l: "Centro — info completa" },
            { c: NAVY2,  l: "Áreas principales" },
            { c: "rgba(26,46,69,0.7)", l: "Sub-áreas — clic para detalles" },
          ].map(x => (
            <div key={x.l} style={{ display: "flex", alignItems: "center", gap: 7 }}>
              <div style={{ width: 11, height: 11, borderRadius: "50%", background: x.c, border: `1px solid rgba(201,168,76,0.5)` }}/>
              <span style={{ color: "rgba(255,255,255,0.38)", fontSize: "0.7rem" }}>{x.l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#060f18", padding: "32px 44px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 14, borderTop: "1px solid rgba(201,168,76,0.12)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <LogoIcon size={22} color={GOLD}/>
          <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em" }}>GRUPO ARCE MONSEGUR</span>
        </div>
        <div style={{ color: "rgba(255,255,255,0.24)", fontSize: "0.68rem", textAlign: "center", lineHeight: 1.7 }}>
          © 2026 · Real Estate & Finanzas · Martillero y Corredor Inmobiliario matriculado<br/>
          Agente Productor CNV · Lic. en Desarrollo de Negocios Inmobiliarios (U. Siglo 21)
        </div>
        <div style={{ color: GOLD, fontSize: "0.68rem" }}>Buenos Aires, Argentina</div>
      </footer>
    </div>
  );
}

// ─── ROOT ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [page, setPage] = useState("home");
  const [hist, setHist] = useState([]);

  const go = (id) => {
    setHist(h => [...h, page]);
    setPage(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const back = () => {
    const prev = hist.length ? hist[hist.length - 1] : "home";
    setHist(h => h.slice(0, -1));
    setPage(prev);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (page === "home")   return <Home onNavigate={go}/>;
  if (page === "center") return <CenterPage onBack={back}/>;
  return <GenericPage pageId={page} onBack={back} onNavigate={go}/>;
}
