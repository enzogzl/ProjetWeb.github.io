// C'est pour ouvrir une application de messagerie ou une pour envoyer un email quand on clique dessus
document.querySelector(".contact-info a[href^='tel']").addEventListener("click", function(event) {
    event.preventDefault(); 
    var telephone = "+33493000000";
    window.location.href = "mailto:?body=Corps du mail&subject=Sujet&to=" + telephone;
});

document.addEventListener("DOMContentLoaded", function() {
    var envoyerButton = document.getElementById("envoyerButton");
    envoyerButton.addEventListener("click", envoyerMessage);
});

function envoyerMessage() {
    alert("Nous avons bien reçu votre demande. Nous vous répondrons au plus vite.");

    // Effacer le contenu des champs de saisie
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}
