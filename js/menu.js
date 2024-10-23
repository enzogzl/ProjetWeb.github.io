/*Pour afficher nos cartes */
function showPDF(pdfUrl) { 
    var frame = document.getElementById('pdf-frame');
    frame.src = pdfUrl;
    frame.style.display = 'block';
}
function showPDF(pdfUrl) {
    var frame = document.getElementById('pdf-frame');
    var defaultContent = document.getElementById('default-content');
    var pdfContainer = document.getElementById('pdf-container');

    if (pdfUrl.includes('Menu.pdf') || pdfUrl.includes('Cartevins.pdf')) {
        frame.src = pdfUrl;
        pdfContainer.style.display = 'block';
        defaultContent.style.display = 'none';
        
        // Centrer la frame PDF
        pdfContainer.style.display = 'flex';
        pdfContainer.style.justifyContent = 'center';
        pdfContainer.style.alignItems = 'center';
    } else {
        // Afficher le contenu par défaut
        defaultContent.style.display = 'block';
        pdfContainer.style.display = 'none';
    }
}
