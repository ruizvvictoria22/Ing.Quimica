const plan = {
    "1° Año": [
        { n:1, nombre:"Introducción a la Ingeniería Química", req:"-" },
        { n:2, nombre:"Ingeniería y Sociedad", req:"-" },
        { n:3, nombre:"Álgebra y Geometría Analítica", req:"-" },
        { n:4, nombre:"Análisis Matemático I", req:"-" },
        { n:5, nombre:"Física I", req:"-" },
        { n:6, nombre:"Química", req:"-" },
        { n:7, nombre:"Sistemas de Representación", req:"-" },
        { n:16, nombre:"Inglés I", req:"-" }
    ],
    
    "2° Año": [
        { n:8, nombre:"Fundamentos de Informática", req:"-" },
        { n:9, nombre:"Introducción a Equipos y Procesos", req:"1-6" },
        { n:10, nombre:"Probabilidad y Estadística", req:"-" },
        { n:11, nombre:"Química Inorgánica", req:"6" },
        { n:12, nombre:"Análisis Matemático II", req:"3-4" },
        { n:13, nombre:"Física II", req:"4-5" },
        { n:14, nombre:"Química Orgánica", req:"6" },
        { n:16, nombre:"Inglés II", req:"16" }
    ],
    
    "3° Año": [
        { n:15, nombre:"Legislación", req:"1-2" },
        { n:17, nombre:"Balances de Masa y Energía", req:"6-7-8-9-13" },
        { n:18, nombre:"Termodinámica", req:"11-12-13" },
        { n:19, nombre:"Matemática Superior Aplicada", req:"12" },
        { n:20, nombre:"Ciencia de los Materiales", req:"9-11-14" },
        { n:21, nombre:"Fisicoquímica", req:"9-12-13" },
        { n:22, nombre:"Fenómenos de Transporte", req:"9-12-13" },
        { n:23, nombre:"Química Analítica", req:"10-11-14" },
        { n:24, nombre:"Microbiología y Química Biológica", req:"11-14" },
        { n:25, nombre:"Química Aplicada", req:"9-11-13-14" }
    ],
    
    "4° Año": [
        { n:27, nombre:"Diseño, Simulación y Optimización de Procesos", req:"17-19" },
        { n:28, nombre:"Operaciones Unitarias I", req:"17-18-22" },
        { n:29, nombre:"Tecnología de la Energía Térmica", req:"17-18-21" },
        { n:30, nombre:"Economía", req:"9" },
        { n:31, nombre:"Operaciones Unitarias II", req:"18-21-22" },
        { n:32, nombre:"Ingeniería de las Reacciones Químicas", req:"17-18-21-22" },
        { n:33, nombre:"Calidad y Control Estadístico de los Procesos", req:"10" },
        { n:34, nombre:"Organización Industrial", req:"9-29-15" }
    ],

    "5° Año": [
        { n:35, nombre:"Control Automático de Procesos", req:"27-31" },
        { n:36, nombre:"Mecánica Industrial", req:"9-21" },
        { n:37, nombre:"Ingeniería Ambiental", req:"25-28-31-32" },
        { n:38, nombre:"Procesos Biotecnológicos", req:"17-21-22-24" },
        { n:39, nombre:"Higiene y Seguridad en el Trabajo", req:"11-14-17" },
        { n:40, nombre:"Máquinas e Instalaciones Eléctricas", req:"28" },
        { n:41, nombre:"Proyecto Final", req:"27-28-29-31-32-34" }
    ]
};


// GENERACIÓN DE LA MALLA
const container = document.getElementById("levels-container");

for (const nivel in plan) {
    const title = document.createElement("div");
    title.className = "level-title";
    title.textContent = nivel;
    container.appendChild(title);

    const grid = document.createElement("div");
    grid.className = "grid";

    plan[nivel].forEach(mat => {
        const div = document.createElement("div");
        div.className = "course";
        div.textContent = `${mat.n}. ${mat.nombre}`;
        div.onclick = () => showInfo(mat);
        grid.appendChild(div);
    });

    container.appendChild(grid);
}


// CUADRO DE INFORMACIÓN
function showInfo(mat) {
    const box = document.getElementById("info-box");
    box.style.display = "block";
    box.innerHTML = `
        <h2>${mat.n}. ${mat.nombre}</h2>
        <p><b>Correlativas:</b> ${mat.req}</p>
    `;
}
