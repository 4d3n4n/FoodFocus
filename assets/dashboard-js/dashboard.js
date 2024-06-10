const historyButton = document.querySelector('.history-container');

historyButton.addEventListener('click', () => {
    if (historyButton.classList.contains('active')) {
        historyButton.classList.remove('active');
    } else {
        historyButton.classList.add('active');
    }
});

const home = document.getElementById('home');
const ajoutAliment = document.getElementById('ajout');
const suivi = document.getElementById('suivi');

const suiviContainer = document.querySelector('.suivi-container');
const searchBar = document.querySelector('.search-bar');

home.addEventListener('click', () => {
    profileContainer.style.display = 'flex';
    dateContainer.style.display = 'flex';
    gaugeContainer.style.display = 'flex';
    macrosPersonalInfoSection.style.display = 'flex';
    rightSection.style.display = 'flex';

    suiviContainer.style.display = 'none';
    searchBar.style.display = 'none';
    searchBar.classList.remove('show');
    main.classList.remove('search-config');
});

const main = document.querySelector('main');
const profileContainer = document.querySelector('.dashboard-profile-container');
const dateContainer = document.querySelector('.date-container');
const gaugeContainer = document.querySelector('.gauge-container');
const macrosPersonalInfoSection = document.querySelector('.macros-personal-infos-container');
const rightSection = document.querySelector('.right-section');

ajoutAliment.addEventListener('click', () => {
    profileContainer.style.display = 'flex';
    dateContainer.style.display = 'none';
    gaugeContainer.style.display = 'none';
    macrosPersonalInfoSection.style.display = 'none';
    suiviContainer.style.display = 'none';
    rightSection.style.display = 'none';

    searchBar.style.display = 'flex';
    searchBar.classList.add('show');

    main.classList.add('search-config');
});


suivi.addEventListener('click', () => {
    profileContainer.style.display = 'flex';
    dateContainer.style.display = 'flex';
    gaugeContainer.style.display = 'none';
    macrosPersonalInfoSection.style.display = 'none';
    rightSection.style.display = 'none';

    suiviContainer.style.display = 'flex';
    searchBar.style.display = 'none';
    searchBar.classList.remove('show');
});

