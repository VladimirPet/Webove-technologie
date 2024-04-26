document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var problem = document.getElementById('problem').value.trim();
    var email = document.getElementById('email').value.trim();
    var serviceType = document.querySelector('input[name="serviceType"]:checked');
    var agree = document.getElementById('agree').checked;

    // Validate form fields
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

    // If all validations pass, submit the form
    alert('Formulár je úspešne odoslaný!');
    // Here you can submit the form using AJAX or redirect to another page
});

// Function to validate email address
function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
