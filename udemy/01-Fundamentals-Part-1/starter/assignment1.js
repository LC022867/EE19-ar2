

//Assignment 1-2
/*
let country = 'Sweden';
const continent = 'Europe';
let population = 10;
let isIsLand = country;
const language = 'Swedish';

console.log(isIsLand, country, continent, population, language);
*/

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

//Assignment 3

//BASICS OPERATORS
/*
let country = 'Sweden';
const continent = 'Europe';
let population = 10;
let isIsLand = country;
const language = 'Swedish';

console.log(population / 2);
population++
console.log(population > 6);
console.log(population < 33);

const description = `${country} is in ${continent} and it's ${populatio} million people speak ${language}`;
*/

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

//Assignment 4

//STRINGS AND TEMPLATE LITERALS
/*
let description = `${country} is in ${continent} and it's ${populatio} million people speak ${language}`;
*/

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

//Assignment 5

//TALKING DECISTIONS: IF / ELSE STATEMENTS

/*
const miljonPopulation = 10;

if (miljonPopulation > 33) {
    console.log("Portugal's population is above average");
} else {
    console.log(`Portugal's population is ${33 - miljonPopulation} below average`);
}
*/
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

//TYPE CONVERSION AND COERCION
/*
1.Predict the result of these 5 operations without executing them:
'9' - '5'; //This is 4
'19' - '13' + '17'; //This is 617
'19' - '13' + 17; //This is 23
'123' < 57; //This is false
5 + 6 + '4' + 9 - 4 - 2; //1149 - 4 - 2 = 1143
2. Execute the operations to check if you were right
*/
/*
console.log('9' - '5'); //4
console.log('19' - '13' + '17'); //617
console.log('19' - '13' + 17); //23
console.log('123' < 57); //False
console.log(5 + 6 + '4' + 9 - 4 - 2); //1143
//Got all right!! :D
*/
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

//EQUALITY OPERATORS: == vs. ===
/*
//This helps us to prevent bugs
let numNeighbours = Number(prompt("How many neighbours countries does your country have?"));

if (numNeighbours === 1) {
    console.log('Only one border!');
} else if (numNeighbours > 1) {
    console.log('More then one border!');
} else {
    console.log('No borders');
}
*/
//we need to use strict equality as much as possible. So we put an "Number" to convert from string to number so it works.

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

//LOGICAL OPERATORS

// Sarah is looking for a new country to live in. She wants to live in a country that speaks english, has less than 50 million people and is not an island.')
/*
let population = 10;
let isIsLand = 'county';
const language = 'Swedish';

if (language === 'English' && population < 50 && !isIsLand) {
    console.log('You should live in Sweden! :)');
} else {
    console.log('Sweden does not meet your criteria :(');
}
*/

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//THE SWITCH STATEMENT
/*
const language = 'chinese';

switch (language) {
    case "chinese":
    case 'mandarin':
        console.log('Most number of natvie speakers!!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
    default:
        console.log('Great language too! :D');
}
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//THE CONDITIONAL (TERNARY) OPERATOR
/*
const swedenPopulation = 12
console.log(`Sweden's population is ${swedenPopulation >= 33 ? 'above' : 'below'} average`);
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

