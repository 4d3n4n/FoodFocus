const caloriesConsommeesElement = document.querySelector('.calories-consomme');
const caloriesConsommees = parseInt(caloriesConsommeesElement.textContent);

const caloriesCalculeesElement = document.querySelector('.calories-calc');
const caloriesCalculees = parseInt(caloriesCalculeesElement.textContent);

var opts = {
    angle: 0, // The span of the gauge arc
    lineWidth: 0.05, // The line thickness
    radiusScale: 1, // Relative radius
    pointer: {
        length: 0, // Pointer length set to 0 for no pointer (donut type gauge)
        strokeWidth: 0, // Pointer stroke width set to 0 for no pointer
        color: '#000000' // Pointer color
    },
    limitMax: false, // If false, the max value increases automatically if value > maxValue
    limitMin: false, // If true, the min value of the gauge will be fixed
    colorStart: '#6F6EA0', // Colors
    colorStop: '#314feb', // just experiment with them
    strokeColor: '#ffffff3a', // to see which ones work best for you
    generateGradient: true,
    highDpiSupport: true, // High resolution support
};

// Initialisation de la jauge de type "donut"
var target = document.getElementById('calorieGauge'); // Votre élément canvas
var gauge = new Donut(target).setOptions(opts); // Créer une jauge sexy!
gauge.maxValue = caloriesCalculees; // set max gauge value
gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
gauge.animationSpeed = 32; // set animation speed (32 is default value)

// Mettre à jour la valeur de la jauge
gauge.set(caloriesConsommees); // set actual value

