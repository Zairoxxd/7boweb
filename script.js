document.getElementById('config-icon').addEventListener('click', function() {
    document.getElementById('config-panel').classList.add('open');
});

document.getElementById('close-panel').addEventListener('click', function() {
    document.getElementById('config-panel').classList.remove('open');
});

// Script para el formulario de contacto
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío normal del formulario
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        // Enviar correo o mostrar un mensaje de éxito
        alert('Mensaje enviado exitosamente.');
        form.reset(); // Limpiar el formulario
    } else {
        alert('Por favor, completa todos los campos.');
    }
});
