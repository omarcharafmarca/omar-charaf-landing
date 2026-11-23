/* ============================================================
   Omar Charaf — Landing personal
   Todo el contenido editable vive aquí. Cambia un valor, guarda
   y recarga el navegador — no hace falta tocar el HTML.
   ============================================================ */

// ---------- CIFRAS DESTACADAS ----------
const STATS = [
  { number: "+35M", label: "de impresiones en YouTube con Líderes por México" },
  { number: "+4M", label: "de vistas en entrevistas, clips y Shorts" },
  { number: "+247%", label: "de crecimiento en suscriptores: de ~6K a +21.7K en 8 meses" },
  { number: "~190K", label: "horas de visualización generadas por una sola entrevista" },
  { number: "+20", label: "años de experiencia en Servicio al Cliente" },
  { number: "#1", label: "Costumer a nivel mundial en Doctoralia (entre 5 países)" },
  { number: "96%", label: "de engagement logrado con su equipo" },
  { number: "1%", label: "de churn máximo, sostenido 2 años consecutivos" },
  { number: "+$40M", label: "de pesos ahorrados a más de 15 empresas" },
  { number: "+65%", label: "de incremento en ventas en eventos y activaciones" },
];

// ---------- TRAYECTORIA ----------
const TRAYECTORIA = [
  {
    puesto: "Host",
    empresa: "Líderes por México",
    fecha: "2026 – Actualidad",
    bullets: [
      "Conduje 19 entrevistas a fondo con figuras del entretenimiento, deporte, negocios y política.",
      "Mi contenido (entrevistas, clips y Shorts) suma más de 4 millones de vistas.",
      "Contribuí a que el canal triplicara sus suscriptores: de ~6K a +21.7K en 8 meses (+247%).",
      "Mis entrevistas son los 3 videos más vistos del canal en el periodo; solo una de ellas generó ~190 mil horas de visualización.",
    ],
  },
  {
    puesto: "Control de Inventarios, Insumos y Producción",
    empresa: "Tequila Lobos 1707",
    fecha: "Febrero 2022 – Febrero 2026",
    bullets: [
      "Control de inventario de todos los insumos necesarios para la producción.",
      "Revisión de que la producción cumpla con los estándares solicitados por cada país.",
      "Logística de exportación del producto terminado y verificación de pedidos especiales.",
      "Conciliación mensual del inventario, cuadrando entradas y salidas.",
    ],
  },
  {
    puesto: "Costumer Senior Clínicas",
    empresa: "Doctoralia México",
    fecha: "Mayo 2018 – Julio 2023",
    bullets: [
      "Número 1 a nivel mundial entre los Costumer de Brasil, Turquía, Italia, España y Argentina, con 96% de engagement.",
      "Mejoras en los procesos de capacitación a especialistas, logrando 3 años consecutivos de renovación en la plataforma.",
      "Liderazgo del equipo con mejores prácticas para un churn máximo de 1% durante 2 años consecutivos.",
    ],
  },
  {
    puesto: "Director de Proyecto",
    empresa: "Ahorro Telecom",
    fecha: "Enero 2015 – Abril 2018",
    bullets: [
      "Participación en la creación de la empresa para generar ahorro en la facturación de Telmex: más de 40 millones de pesos ahorrados a más de 15 empresas.",
      "Creación del pipeline de logística de proyecto para mantener relaciones duraderas con el cliente.",
    ],
  },
  {
    puesto: "Costumer Service Analyst",
    empresa: "C3ntro Telecom",
    fecha: "Enero 2013 – Diciembre 2014",
    bullets: [
      "Análisis de más de 200 empresas en sus consumos de telefonía para elaborar propuestas de ahorro, cerrando más del 90% de los clientes.",
      "Número 1 en propuestas de valor durante 5 meses consecutivos por eficiencia en el trabajo.",
    ],
  },
  {
    puesto: "Supervisor de Centros del Deporte",
    empresa: "CONADE",
    fecha: "Abril 2009 – Diciembre 2012",
    bullets: [
      "Auditoría en más de 25 estados de la República, con un ahorro de más de 28 millones de pesos destinados directamente al deporte en México.",
      "Participación activa en los primeros Juegos de los Mexicanos en el exterior, con más de 2,500 atletas hijos de inmigrantes; más de 100 llegaron a representar a México en Juegos Olímpicos.",
    ],
  },
  {
    puesto: "Gerente de Relaciones Públicas",
    empresa: "BAR BAR",
    fecha: "Noviembre 1997 – Enero 2009",
    bullets: [
      "Realización de eventos (fiestas temáticas, desfiles de moda) que incrementaron las ventas en un 65%.",
      "Desarrollo de relaciones con nuevas generaciones de clientes del lugar.",
    ],
  },
];

// ---------- COMPETENCIAS ----------
const COMPETENCIAS = [
  "Análisis de datos estratégicos",
  "Diseño e implementación de estrategias de servicio al cliente",
  "CRM y fidelización de clientes",
  "Empatía y orientación al cliente",
  "Comunicación asertiva y escucha activa",
  "Transformación digital en atención al cliente",
  "Automatización de procesos de atención",
  "Gestión de KPIs, NPS y CSAT",
  "Pensamiento crítico y toma de decisiones",
  "Adaptabilidad en entornos digitales",
];

const SOFTWARE = [
  "HubSpot", "Tableau", "Gainsight", "Hays", "Stripe",
  "Slack", "Aircall", "Typeform", "Excel", "PowerPoint",
];

// ---------- FORMACIÓN ACADÉMICA ----------
const FORMACION = [
  {
    titulo: "Diplomado en Análisis en Casos de Éxito",
    institucion: "The Power Business School",
    fecha: "Febrero 2022",
  },
  {
    titulo: "Diplomado en las Mejores Prácticas en el Servicio al Cliente",
    institucion: "The Power Business School",
    fecha: "Junio 2022",
  },
  {
    titulo: "Licenciatura en Administración de Empresas",
    institucion: "Universidad Iberoamericana",
    fecha: "Agosto 1996 – Diciembre 2001",
  },
];

// ---------- ENTREVISTAS (YouTube) ----------
// Para actualizar las vistas, cambia el número en "vistas" (sin comas).
// La página las ordena sola de mayor a menor y calcula el total.
const VISTAS_FECHA = "20 de noviembre de 2026";

const VIDEOS = [
  { id: "OeZgqAEu2ww", nombre: "Guille Santos", tema: "De la familia de George Soros a Richard Gere: secretos de una nanny", vistas: 788876 },
  { id: "ZHPcBiVBRks", nombre: "Manuela Ímaz", tema: "El infierno de vivir con un narcisista y la verdad de Amigas y Rivales", vistas: 614083 },
  { id: "GvsjWLukdOw", nombre: "Annie Castillo", tema: "¡Robaron el Melate! 160 millones: el robo del siglo", vistas: 240868 },
  { id: "3h3Hgw2ebVg", nombre: "Duilio Davino", tema: "Se sincera sobre la pérdida de su hermano", vistas: 137041 },
  { id: "z5Vr7lO7REo", nombre: "Rafael Mercadante", tema: "“Me corrieron sin avisar”: el lado oscuro de la exclusividad", vistas: 99453 },
  { id: "LXChvV1tvQA", nombre: "Omar Charaf", tema: "El Bar Bar, famosos y futbol: anécdotas inéditas", vistas: 34102 },
  { id: "IcdlGevZ0zM", nombre: "Bárbara Palmer", tema: "Caso Renata Palmer: la lucha de una familia contra la impunidad", vistas: 31955 },
  { id: "XaZz4QFLurU", nombre: "Laura Iturbide", tema: "El 11-S contado por una mexicana", vistas: 17564 },
  { id: "562UZ7BfhTg", nombre: "Rebeca Ojeda", tema: "No tenía para comer; hoy es Top 3 de Farmasi en México", vistas: 6010 },
].sort((a, b) => b.vistas - a.vistas);

const fmt = (n) => n.toLocaleString("es-MX");

// ============================================================
// Render helpers
// ============================================================

function renderStats() {
  const el = document.getElementById("statsGrid");
  if (!el) return;
  el.innerHTML = STATS.map(
    (s) => `
      <li class="stat-card" data-reveal>
        <span class="stat-number">${s.number}</span>
        <span class="stat-label">${s.label}</span>
      </li>`
  ).join("");
}

function renderTimeline() {
  const el = document.getElementById("timelineList");
  if (!el) return;
  el.innerHTML = TRAYECTORIA.map(
    (t) => `
      <li class="timeline-item" data-reveal>
        <p class="timeline-role">${t.puesto}</p>
        <p class="timeline-meta">${t.empresa} · ${t.fecha}</p>
        <ul class="timeline-bullets">
          ${t.bullets.map((b) => `<li>${b}</li>`).join("")}
        </ul>
      </li>`
  ).join("");
}

function renderCompetencias() {
  const grid = document.getElementById("competenciasGrid");
  const row = document.getElementById("softwareRow");
  if (grid) {
    grid.innerHTML = COMPETENCIAS.map((c) => `<li data-reveal>${c}</li>`).join("");
  }
  if (row) {
    row.innerHTML = SOFTWARE.map((s) => `<li>${s}</li>`).join("");
  }
}

function renderFormacion() {
  const el = document.getElementById("formacionList");
  if (!el) return;
  el.innerHTML = FORMACION.map(
    (f) => `
      <li class="formacion-item" data-reveal>
        <span>
          <span class="formacion-titulo">${f.titulo}</span><br>
          <span class="formacion-inst">${f.institucion}</span>
        </span>
        <span class="formacion-fecha">${f.fecha}</span>
      </li>`
  ).join("");
}

function renderVideos() {
  const el = document.getElementById("videoGrid");
  if (!el) return;
  el.innerHTML = VIDEOS.map(
    (v, i) => `
      <li class="video-card" data-reveal>
        <div class="video-frame" data-video-id="${v.id}" role="button" tabindex="0"
             aria-label="Reproducir entrevista con ${v.nombre}">
          <img src="https://img.youtube.com/vi/${v.id}/hqdefault.jpg"
               alt="Miniatura de la entrevista con ${v.nombre}" loading="lazy">
          <span class="play-btn"></span>
          <span class="video-rank">#${i + 1}</span>
        </div>
        <div class="video-info">
          <p class="video-title">${v.nombre}</p>
          <p class="video-tema">${v.tema}</p>
          <p class="video-vistas">${fmt(v.vistas)} vistas</p>
        </div>
      </li>`
  ).join("");

  // Carga el iframe de YouTube solo cuando el usuario interactúa
  // (mejor privacidad y desempeño que incrustar 8 iframes de entrada).
  el.querySelectorAll(".video-frame").forEach((frame) => {
    const load = () => {
      const id = frame.getAttribute("data-video-id");
      frame.innerHTML = `<iframe
        src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0"
        title="Entrevista de Omar Charaf"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen loading="lazy"></iframe>`;
    };
    frame.addEventListener("click", load, { once: true });
    frame.addEventListener(
      "keydown",
      (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          load();
        }
      },
      { once: true }
    );
  });
}

function renderVistas() {
  const el = document.getElementById("vistasTabla");
  if (!el) return;
  const total = VIDEOS.reduce((sum, v) => sum + v.vistas, 0);
  el.innerHTML = `
    <table class="vistas-table">
      <thead>
        <tr><th>#</th><th>Invitado</th><th class="col-tema">Entrevista</th><th class="num">Vistas</th></tr>
      </thead>
      <tbody>
        ${VIDEOS.map((v, i) => `
          <tr>
            <td class="rank">${i + 1}</td>
            <td><a href="https://youtu.be/${v.id}" target="_blank" rel="noopener noreferrer">${v.nombre}</a></td>
            <td class="col-tema">${v.tema}</td>
            <td class="num">${fmt(v.vistas)}</td>
          </tr>`).join("")}
      </tbody>
      <tfoot>
        <tr><td></td><td>Total</td><td class="col-tema">${VIDEOS.length} entrevistas</td><td class="num">${fmt(total)}</td></tr>
      </tfoot>
    </table>
    <p class="vistas-nota">Vistas en YouTube al ${VISTAS_FECHA}.</p>`;
  const totalEl = document.getElementById("vistasTotal");
  if (totalEl) totalEl.textContent = fmt(total);
}

// ============================================================
// Interacciones
// ============================================================

function setupNav() {
  const toggle = document.getElementById("navToggle");
  const list = document.getElementById("navList");
  if (!toggle || !list) return;
  toggle.addEventListener("click", () => {
    const open = list.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  list.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      list.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}

function setupReveal() {
  const items = document.querySelectorAll("[data-reveal]");
  if (!items.length) return;

  // Red de seguridad: si algo falla, el contenido se muestra igual.
  const fallback = setTimeout(() => {
    items.forEach((el) => el.classList.add("reveal-fallback"));
  }, 3000);

  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("reveal-fallback"));
    clearTimeout(fallback);
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );
  items.forEach((el) => observer.observe(el));
  clearTimeout(fallback);
}

function setupYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

// ============================================================
// Init
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  renderStats();
  renderTimeline();
  renderCompetencias();
  renderFormacion();
  renderVideos();
  renderVistas();
  setupNav();
  setupReveal();
  setupYear();
});
