document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    
    var problem = document.getElementById('problem').value.trim();
    var email = document.getElementById('email').value.trim();
    var serviceType = document.querySelector('input[name="serviceType"]:checked');
    var agree = document.getElementById('agree').checked;

    
    if (problem === '') {
        alert('Prosím, vyplňte pole "Aký problém máte?"');
        return;
    }

    if (!emailIsValid(email)) {
        alert('Prosím, zadajte platný email.');
        return;
    }

    if (!serviceType) {
        alert('Prosím, vyberte typ služby.');
        return;
    }

    if (!agree) {
        alert('Prosím, súhlasíte s podmienkami.');
        return;
    }

   
    alert('Formulár je úspešne odoslaný!');
    
});


function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
