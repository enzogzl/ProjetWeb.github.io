document.addEventListener("DOMContentLoaded", function() {
    const etoiles = document.querySelectorAll(".etoile");
    const noteInput = document.getElementById("note");

    etoiles.forEach(function(etoile) {
        etoile.addEventListener("mouseover", function() {
            const value = this.getAttribute("data-value");
            mettreEnSurbrillance(value);
        });

        etoile.addEventListener("click", function() {
            const value = this.getAttribute("data-value");
            noteInput.value = value;
            mettreEnSurbrillance(value);
        });

        etoile.addEventListener("mouseout", function() {
            const value = noteInput.value;
            mettreEnSurbrillance(value);
        });
    });

    function mettreEnSurbrillance(value) {
        etoiles.forEach(function(etoile) {
            if (parseInt(etoile.getAttribute("data-value")) <= value) {
                etoile.textContent = "★";
            } else {
                etoile.textContent = "☆";
            }
        });
    }
});
