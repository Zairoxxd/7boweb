document.getElementById("formulario-contacto").addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (nombre && email && mensaje) {
        document.getElementById("mensajeExito").style.display = "block";
        document.getElementById("mensajeError").style.display = "none";
        this.reset();
    } else {
        document.getElementById("mensajeError").style.display = "block";
        document.getElementById("mensajeExito").style.display = "none";
    }
});

// Botón de configuración y troll
const configBtn = document.createElement("button");
configBtn.innerHTML = "⚙️";
configBtn.style.position = "fixed";
configBtn.style.bottom = "20px";
configBtn.style.right = "20px";
configBtn.style.padding = "12px";
configBtn.style.borderRadius = "50%";
configBtn.style.border = "none";
configBtn.style.background = "#bb86fc";
configBtn.style.color = "#fff";
configBtn.style.fontSize = "1.5rem";
configBtn.style.cursor = "pointer";
configBtn.style.boxShadow = "0 4px 8px rgba(0,0,0,0.3)";
document.body.appendChild(configBtn);

// Panel de configuración
const configPanel = document.createElement("div");
configPanel.style.position = "fixed";
configPanel.style.bottom = "80px";
configPanel.style.right = "20px";
configPanel.style.background = "#1e1e1e";
configPanel.style.border = "2px solid #bb86fc";
configPanel.style.padding = "15px";
configPanel.style.borderRadius = "10px";
configPanel.style.display = "none";
configPanel.style.boxShadow = "0 6px 20px rgba(0,0,0,0.5)";
configPanel.innerHTML = `
    <h3 style="color:#bb86fc; margin-top: 0;">Configuración</h3>
    <button id="btn-troll" style="
        background: #e53935;
        color: #fff;
        border: none;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
    ">CP Gratis 😈</button>
`;
document.body.appendChild(configPanel);

// Mostrar/Ocultar panel
configBtn.addEventListener("click", () => {
    configPanel.style.display = configPanel.style.display === "none" ? "block" : "none";
});

// Botón troll
document.getElementById("btn-troll").addEventListener("click", () => {
    window.open("https://www.youtube.com/watch?v=6n3pFFPSlW4", "_blank"); // ¡Video troll!
});
