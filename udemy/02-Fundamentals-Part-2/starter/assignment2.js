'use strict';

//FUNCTIONS
/*
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const sweden = describeCountry('Sweden', 10, 'Stockholm');
console.log(sweden);

const finland = describeCountry('Finland', 5.5, 'Helsink')
console.log(finland);

const italy = describeCountry('Italy', 60, 'Rom');
console.log(italy);
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//FUNCTION DECLARATIONS VS. EXPRESSIONS
/*
//FUNCTION DECLARATIONS
function percentageOfWorld1(population) {
    return population / 7900 * 100;
}

const china1 = percentageOfWorld1(1441);
const sweden1 = percentageOfWorld1(10);
const italy1 = percentageOfWorld1(60);


//FUNCTION EXPRESSION
const percentageOfWorld2 = function (population) {
    return population / 7900 * 100;
}

const china2 = percentageOfWorld1(1441);
const sweden2 = percentageOfWorld1(10);
const italy2 = percentageOfWorld1(60);

//The result of declaration
console.log(china1, sweden1, italy1);

//The result of expression
console.log(china2, sweden2, italy2);
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ARROW FUNCTIONS
/*
const percentageOfWorld3 = population => (population / 7900) * 100;

const china3 = percentageOfWorld3(1441);
const sweden3 = percentageOfWorld3(10);
const italy3 = percentageOfWorld3(60);

//The result of arrow function
console.log(china3, sweden3, italy3);
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//FUNCTIONS CALLING OTHER FUNCTIONS
/*
function percentageOfWorld1(percent) {
    return percent / 7800;
}

const describePopulation = function (country, population) {
    const percentage = percentageOfWorld1(population);
    const description = `${country} has ${population} million
    people, which is about ${percentage}% of the world.`;
    console.log(description);
};

describePopulation('Sweden', 10);
describePopulation('China', 1441);
describePopulation('Norway', 5.3);
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////