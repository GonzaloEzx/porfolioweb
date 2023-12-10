document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById('formularioContacto');
    const botonMenu = document.getElementById('botonMenu');
    const menu = document.getElementById('menu');

    // Evento de envío del formulario
    formulario.addEventListener('submit', function (event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;

        if (nombre && email && mensaje) {
            console.log('Nombre:', nombre);
            console.log('Email:', email);
            console.log('Mensaje:', mensaje);
            // Aquí puedes añadir el código para enviar el formulario
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });

    // Evento de clic para el botón del menú
    botonMenu.addEventListener('click', function () {
        menu.classList.toggle('visible');
    });
});
