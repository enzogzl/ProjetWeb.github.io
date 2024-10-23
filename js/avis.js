
        const logo = document.querySelector(".logo img");
        const nav = document.querySelector(".navigation-items")
        let content = document.querySelector(".home .content")
    
        window.addEventListener('load', () => {
            logo.style.transform = "translateY(0)";
            nav.style.transform = "translateY(0)";
            setTimeout(() => {
                content.style.transform = "translateY(0)";
                content.style.opacity = "1";
            }, 500);
        });

        // JavaScript pour ajouter et conserver les avis
        const form = document.getElementById('avis-form');
        const avisContainer = document.getElementById('avis-container');

        let position = 0;

        document.addEventListener('DOMContentLoaded', function() {
            const avisStockes = JSON.parse(localStorage.getItem('avis')) || [];
            avisStockes.forEach((avis, index) => {
                ajouterAvisDOM(avis.nom, avis.note, avis.commentaire, index);
            });
            position = avisStockes.length;
        });

        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const nom = document.getElementById('nom').value;
            const note = document.getElementById('note').value;
            const commentaire = document.getElementById('commentaire').value;

            ajouterAvisDOM(nom, note, commentaire, position);

            const avis = {
                nom: nom,
                note: note,
                commentaire: commentaire
            };

            const avisStockes = JSON.parse(localStorage.getItem('avis')) || [];
            avisStockes.push(avis);
            localStorage.setItem('avis', JSON.stringify(avisStockes));

            form.reset();
            position++;
        });

        function ajouterAvisDOM(nom, note, commentaire, index) {
            const avis = document.createElement('div');
            avis.className = 'avis';
            avis.innerHTML = `
                <h3>${nom}</h3>
                <p>${'⭐️'.repeat(note)}</p>
                <p>${commentaire}</p>
                <button onclick="supprimerAvis(${index})">Supprimer</button>
            `;

            if (position % 2 === 0) {
                avis.style.float = 'left';
            } else {
                avis.style.float = 'right';
            }

            avisContainer.appendChild(avis);
        }

        function supprimerAvis(index) {
            const avisStockes = JSON.parse(localStorage.getItem('avis')) || [];
            avisStockes.splice(index, 1);
            localStorage.setItem('avis', JSON.stringify(avisStockes));
            location.reload(); // Recharge la page pour mettre à jour l'affichage des avis
        }

        // Animation d'ecriture

        // Récupérer l'élément span
        const typedTextSpan = document.getElementById('typed-text');

        // Texte à afficher caractère par caractère
        const textArray = ["Découvrez nos avis ou laissez-nous-en un"];
        let textArrayIndex = 0;
        let charIndex = 0;

        // Fonction pour afficher le texte caractère par caractère
        function type() {
            if (charIndex < textArray[textArrayIndex].length) {
                typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, 100); // Répéter l'affichage avec un délai de 100ms
            } else {
                setTimeout(erase, 1000); // Attendre 2 secondes avant d'effacer le texte
            }
        }

        // Fonction pour effacer le texte
        function erase() {
            if (charIndex > 0) {
                typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, 100); // Répéter l'effacement avec un délai de 50ms
            } else {
                textArrayIndex = (textArrayIndex + 1) % textArray.length; // Passer au texte suivant
                setTimeout(type, 500); // Commencer à afficher le prochain texte après un délai de 500ms
            }
        }

        // Commencer l'animation
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(type, 1000); // Démarrer l'effet de frappe après un délai de 1.5 secondes
        });

        