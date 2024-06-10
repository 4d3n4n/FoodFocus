
// DRAG AND DROP
function dragAndDrop() {
    // Initialisation de SortableJS sur le conteneur de cartes
    var el = document.querySelector('.aliment-card-collection');

    var uniqueElement = document.querySelector('.aliment-card[data-id="uniqueId2"]');

    if (uniqueElement) {

        var sortable = Sortable.create(el, {
            animation: 150, // durée de l'animation du déplacement
            onEnd: function (/**Event*/evt) {
                var itemEl = evt.item; // l'élément déplacé
                // Vous pourriez vouloir enregistrer l'état ici ou dans `onUpdate`
                saveOrder();
            },
        });

        // Fonction pour enregistrer l'ordre des cartes dans le stockage local
        function saveOrder() {
            var order = [];
            document.querySelectorAll('.aliment-card-collection .aliment-card').forEach(function (card, index) {
                order.push({
                    id: card.getAttribute('data-id'), // Assurez-vous que chaque carte a un attribut `data-id` unique
                    position: index + 1
                });
            });
            localStorage.setItem('cardOrder', JSON.stringify(order));
        }

        // Fonction pour restaurer l'ordre des cartes à partir du stockage local
        function restoreOrder() {
            var order = JSON.parse(localStorage.getItem('cardOrder'));
            if (order) {
                order.forEach(function (obj) {
                    var card = document.querySelector('.aliment-card[data-id="' + obj.id + '"]');
                    el.appendChild(card); // Déplace la carte dans la nouvelle position
                });
            }
        }

        // Appelez `restoreOrder` au chargement de la page pour rétablir l'ordre des cartes
        window.addEventListener('load', restoreOrder);
    }
}

const body = document.querySelector('body');
const searchContainer = document.querySelector('.search-bar');
const searchResultContainer = document.getElementById('search-results-container');
const alimentCardCollection = document.querySelector('.aliment-card-collection');
let searchInput = document.querySelector('#form_searchTerm');
let id = 1;


function addprodutToList() {
    profileContainer.classList.remove('low-opacity');
    dateContainer.classList.remove('low-opacity');
    gaugeContainer.classList.remove('low-opacity');
    macrosPersonalInfoSection.classList.remove('low-opacity');
    rightSection.classList.remove('low-opacity');
    suiviContainer.classList.remove('low-opacity');

    body.classList.remove('search-active');

    searchResultContainer.style.display = 'none';
    searchContainer.style.borderRadius = '20px';
    searchContainer.style.borderBottom = 'none';
}
function controleSaisieSearch(searchInput) {
    const trimmedValue = searchInput.trim();
    const regex = /^[a-zA-Z\s]+$/;

    profileContainer.classList.add('low-opacity');
    dateContainer.classList.add('low-opacity');
    gaugeContainer.classList.add('low-opacity');
    macrosPersonalInfoSection.classList.add('low-opacity');
    rightSection.classList.add('low-opacity');
    suiviContainer.classList.add('low-opacity');

    body.classList.add('search-active');

    searchResultContainer.style.display = 'block';
    searchContainer.style.borderRadius = '20px 20px 0 0';
    searchContainer.style.borderBottom = '1px solid var(--primary-color)';

    if (!regex.test(trimmedValue) || trimmedValue === '') {
        addprodutToList();
    }
}


// animation de recherche
const searchingCard = `<div class="search-result-card searching-card">
                            <div class="search-aliment-icon-container">
                                <i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i>
                                <span class="sr-only">Loading...</span>                            
                            </div>
                            <div class="search-aliment-info-container">
                                <div class="search-aliment-text-container">
                                    <h3 class="search-aliment-name">
                                        <i class="fa fa-spinner fa-pulse fa-1x fa-fw" style="color: white; font-size: 16px;"></i>
                                        <span class="sr-only">Loading...</span>    
                                    </h3>
                                </div>
                                <p class="search-aliment-calories-container"><span class="search-aliment-calories">
                                    <i class="fa fa-spinner fa-pulse fa-1x fa-fw" style="color: white; font-size: 10px;"></i>
                                    <span class="sr-only">Loading...</span>
                                </span> Kcal</p>
                            </div>
                            <div class="search-aliment-quantity-container">
                                <p>saisir qté / gr</p>
                                <input disabled class="search-aliment-quantity" id="search-aliment-quantity" type="number" min="1" step="1" placeholder="ICI">
                            </div>
                            <button id="plus-aliment-button" disabled><i class="fa-solid fa-circle-plus" id="plus-aliment-icon"></i></button>
                        </div>`;


function getIconForFoodGroup(foodGroup) {
    const icons = {
        "en:fruits": "fa-solid fa-apple-whole",
        "en:vegetables": "fa-solid fa-carrot",
        "en:grains": "fa-solid fa-bread-slice",
        "en:meats": "fa-solid fa-drumstick-bite",
        "en:cereals": "fa-solid fa-wheat-awn",
        "en:fishes": "fa-solid fa-fish",
        "en:fish-and-seafood": "fa-solid fa-shrimp",
        "en:legumes": "fa-solid fa-leaf",
        "en:cheeses": "fa-solid fa-cheese",
        "en:desserts": "fa-solid fa-cookie",
        "en:beverages": "fa-solid fa-glass-water",
        "en:meals": "fa-solid fa-utensils",
        "en:snacks": "fa-solid fa-candy-cane",
        "en:sweets": "fa-solid fa-cookie",
        "en:spreads": "fa-solid fa-bread-slice",
        "en:breads": "fa-solid fa-bread-slice",
        "en:sandwiches": "fa-solid fa-burger",
        "en:pizza-pies-and-quiches": "fa-solid fa-pizza-slice",
        "en:breakfasts": "fa-solid fa-mug-saucer",
        "en:eggs": "fa-solid fa-egg",
        "en:appetizers": "fa-solid fa-hotdog",
        "en:alcoholic-beverages": "fa-solid fa-wine-bottle",
    };
    return icons[foodGroup] || "fa-solid fa-utensils";
}





// Affichage des données de l'api de la rehcerche
function fetchProductByName(searchResults) {
    searchResultContainer.innerHTML = '';

    // verif
    console.log(searchResults);

    if (searchResults) {
        searchResults.forEach(product => {
            const foodGroupIcon = getIconForFoodGroup(product.foodGroups);

            // verif
            console.log(foodGroupIcon);
            console.log(product.productName);
            console.log(product.energyKcal);

            const resultCard = document.createElement("div");
            resultCard.classList.add("search-result-card");
            resultCard.innerHTML = `
                    <div class="search-aliment-icon-container">
                        <i class="${foodGroupIcon}" id="search-aliment-type-icon"></i>
                    </div>
                    <div class="search-aliment-info-container">
                        <div class="search-aliment-text-container">
                            <h3 class="search-aliment-name">${product.productName}</h3>
                        </div>
                        <p class="search-aliment-calories-container">
                            <span class="search-aliment-calories">${product.energyKcal}</span> Kcal
                        </p>
                    </div>
                    <div class="search-aliment-quantity-container">
                        <p>saisir qté / gr</p>
                        <input class="search-aliment-quantity" id="search-aliment-quantity" type="text" min="1" step="1" placeholder="ICI">
                    </div>
                    <button id="plus-aliment-button" disabled><i class="fa-solid fa-circle-plus" id="plus-aliment-icon"></i></button>
                `;
            searchResultContainer.appendChild(resultCard);

            // Sélectionne les éléments spécifiques à cette carte
            const searchAlimentQuantity = resultCard.querySelector(
                ".search-aliment-quantity"
            );
            const ajoutAlimentButton = resultCard.querySelector(
                "#plus-aliment-button"
            );

            // Gestionnaire d'événements pour le champ de quantité
            searchAlimentQuantity.addEventListener("keyup", () => {
                ajoutAlimentButton.disabled = !isValidQuantity(searchAlimentQuantity.value);
            });

            // Gestionnaire d'événements pour le bouton d'ajout
            ajoutAlimentButton.addEventListener('click', () => {
                const quantity = parseInt(searchAlimentQuantity.value);
                addAliment(foodGroupIcon, product.energyKcal, product.productName, quantity, alimentCardCollection, id++);
                addprodutToList();
                dragAndDrop();
                searchInput.value = '';
            });
        });
    }
}


// Fonction pour valider la quantité
function isValidQuantity(value) {
    const trimmedValue = value.trim();
    const regex = /^[1-9]\d*$/;
    return regex.test(trimmedValue);
}

let searchTimeout = null;
const searchTimeoutDuration = 500;


function handleSearchInput(event) {
    controleSaisieSearch(event.target.value);
    clearTimeout(searchTimeout);
    searchResultContainer.innerHTML = searchingCard;

    searchTimeout = setTimeout(() => {
        const searchTerm = event.target.value;
        if (searchTerm.length >= 2) {
            controleSaisieSearch(searchTerm);
            performSearch(searchTerm);
        }
    }, 500);
}


function performSearch(searchTerm) {
    console.log("Search Term: ", searchTerm);

    fetch('/ajax-search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest' // Important pour Symfony
        },
        body: JSON.stringify({searchTerm: searchTerm})
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        fetchProductByName(data.products);
    })
    .catch(error => console.error('Erreur:', error));
}




document.addEventListener('DOMContentLoaded', function () {
    productsArray.forEach(product => {
        addAliment(product.typeProduit, product.caloriesProduit, product.libelleProduit, product.grammageProduit, alimentCardCollection, product.id);
    });
});




function addAliment(typeProduit, energyKcal, alimentName, alimentQuantity, alimentCardCollection, id) {

    const foodGroupIcon = getIconForFoodGroup(typeProduit);
    
    const alimentCard = document.createElement('div');
    alimentCard.classList.add('aliment-card');
    alimentCard.setAttribute('data-id', 'uniqueId' + id);
    alimentCard.innerHTML = `
        <div class="aliment-icon-container">
            <i class="${foodGroupIcon}" id="aliment-type-icon"></i>
        </div>
        <div class="aliment-info-container">
            <div class="aliment-text-container">
                <h3 class="aliment-name" id="aliment-name">${alimentName}</h3>
                <p class="aliment-quantity-container"><span class="aliment-quantity" id="aliment-quantity">${alimentQuantity}</span> gr</p>
            </div>
            <p class="aliment-calories-container"><span class="aliment-calories" id="aliment-calories">${energyKcal}</span> Kcal</p>
        </div>
        <i class="fa-solid fa-trash-can" id="delete-aliment-icon"></i>
    `;
    alimentCardCollection.appendChild(alimentCard);
    
    const deleteAlimentIcon = alimentCard.querySelector('#delete-aliment-icon');
    deleteAlimentIcon.addEventListener('click', () => {
        alimentCardCollection.removeChild(alimentCard);
        dragAndDrop();
    });
}
