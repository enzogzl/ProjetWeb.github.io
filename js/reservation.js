document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Votre réservation a été prise en compte!');
});

function animateText(element, message) {
    var index = 0;
    var textAnimation = setInterval(function() {
        element.textContent += message[index++];
        if (index === message.length) {
            clearInterval(textAnimation);
        }
    }, 50);
}

document.addEventListener("DOMContentLoaded", function() {
    const reservationForm = document.getElementById("reservation-form");
    const confirmationMessage = document.createElement("p");
    confirmationMessage.textContent = "Votre réservation a été soumise avec succès";
    confirmationMessage.classList.add("confirmation-message");

    reservationForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Empêcher le rechargement de la page par défaut

        // Ajouter la classe d'animation pour la confirmation
        confirmationMessage.style.opacity = 1;
        reservationForm.appendChild(confirmationMessage);

        // Supprimer le message de confirmation après 3 secondes
        setTimeout(function() {
            confirmationMessage.style.opacity = 0;
            setTimeout(function() {
                confirmationMessage.remove();
            }, 500); // Temps de l'animation de disparition
        }, 2000); // 2 secondes d'affichage
    });
});
