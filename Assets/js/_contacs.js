document.getElementById('contact_form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const formData = new FormData(event.target);


    const data = Object.fromEntries(formData.entries());


    emailjs.send('service_y1hkus8', 'template_cbdpr58', data)
        .then(function(response) {
            alert('Email inviata con successo!');
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            alert('Errore nell\'invio dell\'email.');
            console.log('FAILED...', error);
        });
});