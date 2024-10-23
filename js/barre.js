
let menuButton = document.getElementById('menu-button');
let closeButton = document.getElementById('close-button');
let navbar = document.querySelector('.navigation-items');  // Utilisation de querySelector pour sélectionner l'élément directement

menuButton.onclick = () => {
    navbar.classList.toggle('open');
    menuButton.classList.add('hidden');
    closeButton.classList.remove('hidden');
};

closeButton.onclick = () => {
    navbar.classList.toggle('open');
    closeButton.classList.add('hidden');
    menuButton.classList.remove('hidden');
};
