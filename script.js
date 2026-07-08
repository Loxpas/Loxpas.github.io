/* =========================================================================
   DATA — edita estos arreglos para actualizar el sitio sin tocar HTML/CSS
   ========================================================================= */

const techSkills = {
    Frontend: [
        { icon: "fa-brands fa-html5", color: "icon-html", label: "HTML5" },
        { icon: "fa-brands fa-css3-alt", color: "icon-css", label: "CSS3" },
        { icon: "fa-brands fa-js", color: "icon-js", label: "JavaScript" },
        { icon: "fa-solid fa-file-code", color: "icon-ts", label: "TypeScript" },
        { icon: "fa-brands fa-react", color: "icon-react", label: "React" },
        { icon: "fa-brands fa-react", color: "icon-react", label: "React Native" },
        { icon: "fa-solid fa-layer-group", color: "icon-mui", label: "Material UI" },
    ],
    Backend: [
        { icon: "fa-brands fa-python", color: "icon-python", label: "Python" },
        { icon: "fa-brands fa-node-js", color: "icon-node", label: "Node.js" },
        { icon: "fa-solid fa-server", color: "icon-django", label: "Django" },
        { icon: "fa-brands fa-php", color: "icon-php", label: "PHP" },
        { icon: "fa-solid fa-server", color: "icon-fastapi", label: "FastAPI" },
    ],
    "Bases de Datos": [
        { icon: "fa-solid fa-database", color: "icon-mysql", label: "MySQL" },
        { icon: "fa-solid fa-database", color: "icon-sqlserver", label: "SQL Server" },
        { icon: "fa-solid fa-database", color: "icon-postgres", label: "PostgreSQL" },
        { icon: "fa-solid fa-leaf", color: "icon-mongo", label: "MongoDB" },
    ],
    "Mobile & Game Dev": [
        { icon: "fa-brands fa-android", color: "icon-kotlin", label: "Kotlin" },
        { icon: "fa-solid fa-gamepad", color: "icon-godot", label: "Godot" },
    ],
    "Herramientas y Control de Versiones": [
        { icon: "fa-brands fa-git-alt", color: "icon-git", label: "Git" },
        { icon: "fa-brands fa-github", color: "icon-github", label: "GitHub" },
        { icon: "fa-brands fa-linux", color: "icon-linux", label: "Linux" },
    ],
    "Business Intelligence": [
        { icon: "fa-solid fa-chart-simple", color: "icon-powerbi", label: "Power BI" },
        { icon: "fa-solid fa-file-excel", color: "icon-excel", label: "Excel" },
    ],
};

// Agrupa las categorías en columnas para replicar el layout original (2 cajas)
const skillColumns = [
    ["Frontend", "Backend"],
    ["Bases de Datos", "Mobile & Game Dev", "Herramientas y Control de Versiones", "Business Intelligence"],
];

const timeline = {
    educacion: [
        {
            titulo: "Ingeniería En Software",
            institucion: "Universidad de Colima",
            logo: "img/udcLogo.png",
            fecha: "2021 - 2025",
            descripcion: "En esta etapa, evolucioné de programador a ingeniero, profundizando en principios avanzados de arquitectura de software, patrones de diseño y metodologías ágiles (Scrum). Apliqué estos conocimientos en el desarrollo de soluciones robustas y escalables, con un fuerte enfoque en la calidad del código y el testing.",
        },
        {
            titulo: "Analista Programador",
            institucion: "Universidad de Colima",
            logo: "img/udcLogo.png",
            fecha: "2018 - 2021",
            descripcion: "Formación técnica centrada en los fundamentos del desarrollo. Aquí adquirí una base sólida en lógica de programación, algoritmos y estructuras de datos.",
        },
    ],
    experiencia: [
        {
            titulo: "Desarrollador Jr.",
            institucion: "WoodWard Group",
            logo: "img/woodwardLogo.png",
            fecha: "Septiembre 2025 - Actualidad",
            items: [
                "Mantenimiento y desarrollo de nuevas funcionalidades en el portal de la empresa.",
                "Desarrollo de app movil para la entrada de mercancias del buque a las bodegas de la empresa.",
                "Levantamiento de requerimientos y análisis de procesos para optimizar - Crear flujos de trabajo internos.",
            ],
        },
        {
            titulo: "Analista de Datos",
            institucion: "Alsa Informatica",
            logo: "img/alsaLogo.png",
            fecha: "Enero 2025 - Septiembre 2025",
            items: [
                "Elaboración de reportes para el área contable mediante consultas SQL complejas.",
                "Desarrollo de automatizaciones para optimizar procesos y reducir tareas repetitivas.",
                "Soporte en la implementación de un nuevo sistema ERP, colaborando en la migración y adaptación de datos.",
                "Apoyo a la toma de decisiones a través de reportes estructurados, claros y precisos.",
            ],
        },
        {
            titulo: "Front-End Developer Jr.",
            institucion: "Smartiie - Prácticas",
            logo: "img/smarttieLogo.jpg",
            fecha: "Noviembre 2024 - Julio 2025",
            items: [
                "Desarrollo de componentes de interfaz de usuario responsivos utilizando React.",
                "Creación de herramientas internas y tableros para optimizar flujos de trabajo.",
                "Participación en revisiones de código y ciclos de sprints ágiles para garantizar entregables de alta calidad.",
                "Colaboración con diseñadores para asegurar una implementación pixel-perfect de las interfaces.",
            ],
        },
    ],
};

const projects = [
    {
        url: "https://loxpas.github.io/",
        img: "img/laptop.png",
        alt: "Captura de pantalla de página web personal",
        titulo: "Página web personal",
        categoria: "Portafolio",
    },
    {
        url: "https://loxpas.pythonanywhere.com/",
        img: "img/toloacheLogo.png",
        alt: "Logo de la tienda en línea Toloache",
        titulo: "Toloache",
        categoria: "Tienda en Línea",
    },
    {
        url: "https://loxpas.github.io/Colima.github.io/",
        img: "img/colimaLogo.png",
        alt: "Logo del proyecto Descubre Colima",
        titulo: "Colima",
        categoria: "Descubre Colima",
    },
    {
        url: "https://loxpas.itch.io/wild-adventure",
        img: "img/espadaLogo.png",
        alt: "Logo del juego Wild Adventures",
        titulo: "Wild Adventures",
        categoria: "Juego hecho en Godot",
    },
];

/* =========================================================================
   RENDER — construye el DOM a partir de los datos de arriba
   ========================================================================= */

function renderSkills() {
    const container = document.getElementById("skills-container");
    if (!container) return;

    container.innerHTML = skillColumns
        .map((categoriesInColumn) => {
            const boxContent = categoriesInColumn
                .map((categoryName) => {
                    const items = techSkills[categoryName]
                        .map(
                            (skill) => `
                        <div class="skill-item">
                            <i class="${skill.icon} ${skill.color}" aria-hidden="true"></i>
                            <span>${skill.label}</span>
                        </div>`
                        )
                        .join("");
                    return `<h4>${categoryName}</h4><div class="tech-grid">${items}</div>`;
                })
                .join("");
            return `<div class="skills-box">${boxContent}</div>`;
        })
        .join("");
}

function renderTimelineColumn(containerId, entries, side) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = entries
        .map((entry) => {
            const body = entry.items
                ? `<ul>${entry.items.map((li) => `<li>${li}</li>`).join("")}</ul>`
                : `<p>${entry.descripcion}</p>`;

            return `
            <div class="item ${side}">
                <h4>${entry.titulo}</h4>
                <div class="institucion">
                    <img src="${entry.logo}" alt="Logo ${entry.institucion}" loading="lazy">
                    <span class="casa">${entry.institucion}</span>
                </div>
                <span class="fecha">${entry.fecha}</span>
                ${body}
            </div>`;
        })
        .join("");
}

function renderProjects() {
    const container = document.getElementById("galeria-container");
    if (!container) return;

    container.innerHTML = projects
        .map(
            (p) => `
        <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="proyecto">
            <img src="${p.img}" alt="${p.alt}" loading="lazy">
            <div class="overlay">
                <h3>${p.titulo}</h3>
                <p>${p.categoria}</p>
            </div>
        </a>`
        )
        .join("");
}

document.addEventListener("DOMContentLoaded", () => {
    renderSkills();
    renderTimelineColumn("educacion-container", timeline.educacion, "izq");
    renderTimelineColumn("experiencia-container", timeline.experiencia, "der");
    renderProjects();
});

/* =========================================================================
   INTERACCIÓN — menú responsive
   ========================================================================= */

let menuVisible = false;

function mostrarOcultarMenu() {
    const nav = document.getElementById("nav");
    menuVisible = !menuVisible;
    nav.classList = menuVisible ? "responsive" : "";
}

function seleccionar() {
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
