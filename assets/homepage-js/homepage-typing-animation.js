const script3 = document.createElement('script');
script3.src = 'https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js';

// Créez un gestionnaire d'événements pour l'événement "load" du script externe.
script3.onload = function () {
    // Le script externe est chargé. Vous pouvez maintenant créer l'instance Typed.
    let typed = new Typed('.auto-type', {
        strings:
        ["évoluez", "réussissez", "changez", "brillez",],
        typeSpeed: 130,
        backSpeed: 60,
        cursorChar: '',
        backDelay: 900,
        showCursor: true,
        loop: true
    });
};

// Ajoutez le script externe au DOM.
document.body.appendChild(script3);