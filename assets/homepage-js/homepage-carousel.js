let activeIndex = 0;

function updateCiblesDesktop(newIndex) {
    const cibles = document.querySelectorAll('.cible');
    // Retirer la classe 'active' de toutes les cibles
    cibles.forEach(cible => cible.classList.remove('active'));

    cibles[newIndex].classList.add('active');
    cibles[(newIndex + 1) % cibles.length].classList.add('active');

    cibles[1].classList.remove('active-desktop');
    activeIndex = newIndex;
}

function updateCiblesMobile(newIndex) {
    const cibles = document.querySelectorAll('.cible');
    cibles.forEach(cible => cible.classList.remove('active'));

    cibles[activeIndex].classList.remove('active');
    cibles[newIndex].classList.add('active');

    activeIndex = newIndex;
}

function checkScreenSize() {
    const cibles = document.querySelectorAll('.cible');
    const nextButton = document.getElementById('cible-button-next');
    const prevButton = document.getElementById('cible-button-prev');

    // Nettoyer les classes et les écouteurs d'événements précédents
    cibles.forEach(cible => {
        cible.classList.remove('active', 'active-desktop');
    });
    nextButton.removeEventListener('click', updateCiblesDesktop);
    nextButton.removeEventListener('click', updateCiblesMobile);
    prevButton.removeEventListener('click', updateCiblesDesktop);
    prevButton.removeEventListener('click', updateCiblesMobile);

    if (window.innerWidth <= 768) {
        // SMARTPHONE
        cibles[0].classList.add('active');

        nextButton.addEventListener('click', () => updateCiblesMobile((activeIndex + 1) % cibles.length));
        prevButton.addEventListener('click', () => updateCiblesMobile((activeIndex - 1 + cibles.length) % cibles.length));
    } else {
        // DESKTOP
        cibles[0].classList.add('active');
        cibles[1].classList.add('active-desktop');

        nextButton.addEventListener('click', () => updateCiblesDesktop((activeIndex + 2) % cibles.length));
        prevButton.addEventListener('click', () => updateCiblesDesktop((activeIndex - 2 + cibles.length) % cibles.length));
    }
}

document.addEventListener('DOMContentLoaded', checkScreenSize);
window.addEventListener('resize', checkScreenSize);
