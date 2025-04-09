function toggleConfigMenu() {
    const menu = document.getElementById('configMenu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

// Cambiar a modo oscuro
function activarModoOscuro() {
    document.body.classList.remove('light-mode');
}

// Cambiar a modo claro
function activarModoClaro() {
    document.body.classList.add('light-mode');
}

// Botón troll
function activarTroll() {
    window.open('https://www.youtube.com/watch?v=6n3pFFPSlW4', '_blank');
}

// Envío de formulario falso (simulación)
document.getElementById("formulario-contacto").addEventListener("submit", function (e) {
    e.preventDefault();

    // Simula éxito
    const exito = document.getElementById("mensajeExito");
    const error = document.getElementById("mensajeError");

    exito.style.display = "block";
    error.style.display = "none";

    setTimeout(() => {
        exito.style.display = "none";
    }, 3000);
});
// Botón troll
document.getElementById("btn-troll").addEventListener("click", () => {
    window.open("https://www.youtube.com/watch?v=6n3pFFPSlW4", "_blank"); // ¡Video troll!
});
