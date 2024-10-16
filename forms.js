// Evitar cambio de pagina al presionar boton
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene la redirección por defecto
    
    const form = this;
    const formData = new FormData(form);
    
    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            form.reset(); // Limpia el formulario
            document.getElementById('confirmationMessage').style.display = 'block'; // Muestra el mensaje de confirmación
        } else {
            alert('Hubo un problema al enviar el formulario. Inténtalo de nuevo más tarde.');
        }
    })
    .catch(error => {
        alert('Hubo un problema al enviar el formulario. Inténtalo de nuevo más tarde.');
    });
    });
    