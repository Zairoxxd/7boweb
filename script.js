document.getElementById('formulario-contacto').addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre && email && mensaje) {
        document.getElementById('mensajeExito').hidden = false;
        document.getElementById('mensajeError').hidden = true;
        console.log('Formulario enviado:', { nombre, email, mensaje });
    } else {
        document.getElementById('mensajeError').hidden = false;
        document.getElementById('mensajeExito').hidden = true;
    }
});
