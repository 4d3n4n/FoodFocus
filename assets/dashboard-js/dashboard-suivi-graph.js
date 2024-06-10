let currentPeriod = 'week'; // Période par défaut
let currentDataType = 'calories'; // Type de données par défaut

let color = '#314feb';
let colorLine = 'rgba(49, 79, 235, 0.2)';

function colorChange(dataType) {
    let color, colorLine;
    if (dataType === 'calories') {
        color = '#314feb';
        colorLine = 'rgba(49, 79, 235, 0.2)';
    } else if (dataType === 'proteins') {
        color = '#ff6384';
        colorLine = 'rgba(255, 99, 132, 0.2)';
    } else if (dataType === 'carbs') {
        color = '#ffcd56';
        colorLine = 'rgba(255, 205, 86, 0.2)';
    } else if (dataType === 'fats') {
        color = '#36a2eb';
        colorLine = 'rgba(54, 162, 235, 0.2)';
    }
    return { color, colorLine };
}


// Génération de données aléatoires
const generateRandomDataCalories = (numPoints) => Array.from({ length: numPoints }, () => Math.floor(Math.random() * 1000));
const generateRandomDataProteins = (numPoints) => Array.from({ length: numPoints }, () => Math.floor(Math.random() * 1000));
const generateRandomDataCarbs = (numPoints) => Array.from({ length: numPoints }, () => Math.floor(Math.random() * 1000));
const generateRandomDataFats = (numPoints) => Array.from({ length: numPoints }, () => Math.floor(Math.random() * 1000));

const data = {
    week: {
        labels: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
        calories: generateRandomDataCalories(7),
        proteins: generateRandomDataProteins(7),
        carbs: generateRandomDataCarbs(7),
        fats: generateRandomDataFats(7)
    },
    month: {
        labels: ["Semaine 1", "Semaine 2", "Semaine 3", "Semaine 4"],
        calories: generateRandomDataCalories(4),
        proteins: generateRandomDataProteins(4),
        carbs: generateRandomDataCarbs(4),
        fats: generateRandomDataFats(4)
    },
    year: {
        labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
        calories: generateRandomDataCalories(12),
        proteins: generateRandomDataProteins(12),
        carbs: generateRandomDataCarbs(12),
        fats: generateRandomDataFats(12)
    }
};


const generateRandomDataForLineCalories = (numPoints) => Array.from({ length: numPoints }, () => Math.floor(Math.random() * 1000));
const generateRandomDataForLineProtein = (numPoints) => Array.from({ length: numPoints }, () => Math.floor(Math.random() * 1000));
const generateRandomDataForLineCarb = (numPoints) => Array.from({ length: numPoints }, () => Math.floor(Math.random() * 1000));
const generateRandomDataForLineFat = (numPoints) => Array.from({ length: numPoints }, () => Math.floor(Math.random() * 1000));

const lineData = {
    week: {
        labels: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
        calories: generateRandomDataForLineCalories(7),
        proteins: generateRandomDataForLineProtein(7),
        carbs: generateRandomDataForLineCarb(7),
        fats: generateRandomDataForLineFat(7)
    },
    month: {
        labels: ["Semaine 1", "Semaine 2", "Semaine 3", "Semaine 4"],
        calories: generateRandomDataForLineCalories(4),
        proteins: generateRandomDataForLineProtein(4),
        carbs: generateRandomDataForLineCarb(4),
        fats: generateRandomDataForLineFat(4)
    },
    year: {
        labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
        calories: generateRandomDataForLineCalories(12),
        proteins: generateRandomDataForLineProtein(12),
        carbs: generateRandomDataForLineCarb(12),
        fats: generateRandomDataForLineFat(12)
    }
};

const config = {
    type: 'bar', // Le type principal est 'bar' pour permettre l'empilement
    data: {
        labels: data[currentPeriod].labels,
        datasets: [{
            label: 'Bar Dataset',
            data: data[currentPeriod][currentDataType],
            backgroundColor: color,
            borderColor: color,
            borderWidth: 1,
            type: 'bar'
        }, {
            label: 'Line Dataset', 
            data: lineData[currentPeriod][currentDataType],
            borderColor: color,
            borderWidth: 2,
            type: 'line',
            fill: false, 
            pointBackgroundColor: color, 
            pointBorderColor: color,
            pointRadius: 3
        }]
    },
    options: {
        scales: {
            x: {
                grid: {
                    color: colorLine, // Couleur des lignes de grille horizontales
                },
                ticks: {
                    color: color, // Couleur des étiquettes sur l'axe horizontal
                }
            },
            y: {
                stacked: true, // Activation de l'empilement pour l'axe Y
                grid: {
                    color: colorLine, // Couleur des lignes de grille verticales
                },
                ticks: {
                    color: color, // Couleur des étiquettes sur l'axe vertical
                }
            }
        },
        plugins: {
            legend: {
                display: false // Cela cache la légende
            }
        }
    }
};




let myChart = new Chart(document.getElementById('myChart'), config);



const updateChart = (period, dataType) => {
    currentPeriod = period;
    currentDataType = dataType;
    const colors = colorChange(dataType);

    // Mise à jour des données pour les barres
    myChart.data.labels = data[period].labels;
    myChart.data.datasets[0].data = data[period][dataType];
    myChart.data.datasets[0].label = dataType.charAt(0).toUpperCase() + dataType.slice(1);
    myChart.data.datasets[0].backgroundColor = colors.color;
    myChart.data.datasets[0].borderColor = colors.color;

    // Mise à jour des données pour la ligne
    myChart.data.datasets[1].data = lineData[period][dataType];
    myChart.data.datasets[1].label = dataType.charAt(0).toUpperCase() + dataType.slice(1);

    // Mise à jour des couleurs et autres options
    myChart.data.datasets[1].borderColor = colors.color;
    myChart.data.datasets[1].pointBackgroundColor = colors.color;
    myChart.data.datasets[1].pointBorderColor = colors.color;

    //couleur des lignes de grille
    myChart.options.scales.x.grid.color = colors.color;
    myChart.options.scales.x.ticks.color = colors.color;
    myChart.options.scales.y.grid.color = colors.color;
    myChart.options.scales.y.ticks.color = colors.color;

    myChart.update();
};

document.getElementById('week-btn').addEventListener('click', () => updateChart('week', currentDataType));
document.getElementById('month-btn').addEventListener('click', () => updateChart('month', currentDataType));
document.getElementById('year-btn').addEventListener('click', () => updateChart('year', currentDataType));
document.getElementById('calories-btn').addEventListener('click', () => updateChart(currentPeriod, 'calories'));
document.getElementById('proteins-btn').addEventListener('click', () => updateChart(currentPeriod, 'proteins'));
document.getElementById('carbs-btn').addEventListener('click', () => updateChart(currentPeriod, 'carbs'));
document.getElementById('fats-btn').addEventListener('click', () => updateChart(currentPeriod, 'fats'));
