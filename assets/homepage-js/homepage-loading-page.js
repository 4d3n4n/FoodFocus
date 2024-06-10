window.addEventListener('load', function() {
    const loader = document.querySelector('.loader');
    const content = document.querySelector('body');
    
    // Afficher la page de chargement pendant 2 secondes (2000 millisecondes)
    setTimeout(function() {
        // Masquer la page de chargement
        loader.style.display = 'none';
        // Afficher le contenu principal
        content.style.display = 'block';
    }, 1000); // Réglage du délai en millisecondes (dans cet exemple, 2000 ms ou 2 secondes)
});
