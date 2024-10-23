document.getElementById('subscribeBtn').addEventListener('click', function() {
    var emailInput = document.getElementById('emailInput');
    var message = document.getElementById('message');
    var email = emailInput.value;
    
    // Simple email validation
    if (email.includes('@')) {
        // Clear the input field
        emailInput.value = '';
        
        // Display success message
        message.textContent = 'Vous avez bien été ajouté à la newsletter.';
        message.style.color = 'black';
        message.style.fontWeight = 'bold';
        message.style.fontSize = '16px';
    } else {
        // Display error message
        message.textContent = 'Veuillez entrer une adresse email valide.';
        message.style.color = 'red';
        message.style.fontWeight = 'bold';
        message.style.fontSize = '16px';
    }

    // Clear the message after 5 seconds
    setTimeout(function() {
        message.textContent = '';
    }, 3000);
});
