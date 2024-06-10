const questionContainers = document.querySelectorAll('.question-container');
const reponseContainers = document.querySelectorAll('.reponse-container');
const arrows = document.querySelectorAll('.fa-circle-chevron-down');

// LOGIQUE DE BASE
// for (let i = 0; i < questionContainers.length; i++) {
//     questionContainers[i].addEventListener('click', () => {
//         if (reponseContainers[i].classList.contains('open-reponse')) {
//             reponseContainers[i].classList.remove('open-reponse');
//             arrow[i].classList.remove('rotate');
//         } else {
//             reponseContainers.forEach(reponseContainer => {
//                 reponseContainer.classList.remove('open-reponse');
//             });
//             arrow.forEach(arrow => {
//                 arrow.classList.remove('rotate');
//             });
//             reponseContainers[i].classList.toggle('open-reponse');
//             arrow[i].classList.toggle('rotate');
//         }
//     });
// }



function setHeight(element, height) {
    element.style.height = height;
}

function toggleReponse(container, index) {
    // Fermer toutes les réponses ouvertes
    reponseContainers.forEach((reponse, idx) => {
        if (idx !== index && reponse.classList.contains('open-reponse')) {
            setHeight(reponse, '0px');
            reponse.classList.remove('open-reponse');
            arrows[idx].classList.remove('rotate'); // Fermer également la flèche
        }
    });

    // Ouvrir ou fermer la réponse sélectionnée
    if (container.classList.contains('open-reponse')) {
        setHeight(container, '0px');
        container.classList.remove('open-reponse');
        arrows[index].classList.remove('rotate');
    } else {
        const currentHeight = container.scrollHeight + 'px';
        setHeight(container, currentHeight);
        container.classList.add('open-reponse');
        arrows[index].classList.add('rotate');
    }
}

questionContainers.forEach((questionContainer, index) => {
    questionContainer.addEventListener('click', () => {
        toggleReponse(reponseContainers[index], index);
    });
});
