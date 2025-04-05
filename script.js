document.getElementById('formulario-contacto').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    // Simulación de envío de correo (mediante mailto)
    const correoDestino = 'mailto:holatenemoshambrexd@gmail.com';
    const asunto = encodeURIComponent('Mensaje desde la página oficial del 7°B');
    const cuerpo = encodeURIComponent(`Nombre: ${nombre}\nCorreo: ${email}\nMensaje: ${mensaje}`);

    // Crear el enlace mailto y redirigir al cliente de correo
    window.location.href = `${correoDestino}?subject=${asunto}&body=${cuerpo}`;

    // Mostrar mensaje de éxito
    document.getElementById('mensajeExito').style.display = 'block';
    document.getElementById('mensajeError').style.display = 'none';
});
