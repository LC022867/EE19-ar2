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

//CHALLANGE 1 PART 2
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time

Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores
GOOD LUCK :)
*/

/*
const calcAverage = (a, b, c) => (a + b + c) / 3

let test1D = calcAverage(44, 23, 71);
let test2K = calcAverage(65, 54, 49);
console.log(test1D, test2K);


function checkWinner(avgDolhins, avgKoalas) {
    if (avgDolhins >= 2 * avgKoalas) {
        return console.log(`Dolhins wins!! (${avgDolhins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolhins) {
        return console.log(`Koalas wins!! (${avgKoalas} vs. ${avgDolhins})`);
    } else {
        return console.log(`No one wins :(`);
    }
}

//test1
checkWinner(test1D, test2K);

//Test 2
test1D = calcAverage(85, 54, 41);
test2K = calcAverage(23, 34, 27);
checkWinner(test1D, test2K);
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//INTRODUCTION TO ARRAY
/*
const populations = [60, 10, 33, 144];

console.log(populations.length === 4);

function percentageOfWorld1(percent) {
    return percent / 7800;
}
const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
];

console.log(percentages);
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//BASIC ARRAY OPERATION (METHOD)    
/*
const neighbours = ['Sweden', 'Norway', 'Finland'];
console.log(neighbours);

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) {
    console.log('Probably not a central European country! :D');
}

//Change "Sweden" to "Sweden is good :)"
neighbours[neighbours.indexOf('Sweden')] = 'Sweden is good! :)';
console.log(neighbours);
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//INTRODUCTION OBJEECTS
/*
const myCountry = {
    country: 'Sweden',
    capital: 'Stockholm',
    language: 'Swedish',
    population: '10 Miljon',
    neighbours: ['Norway', 'Finland', 'Denmark']
};
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//DOT VS. BRACKET NOTATION
/*
//Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki.'
const myCountry = {
    country: 'Sweden',
    capital: 'Stockholm',
    language: 'Swedish',
    population: 10,
    neighbours: ['Norway', 'Finland', 'Denmark']
};

console.log(`${myCountry.country} has ${myCountry.population} million swedish - speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

//Increase the country's population by two million using dot notation.
myCountry.population += 2;
console.log(myCountry.population);

//decrease it by two million using brackets notation.
myCountry['population'] -= 2;
console.log(myCountry['population']);
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//OBJECT METHODS

//Add a method called 'describe' to the 'myCountry' object. This method will log a string to the console, similar to the string logged in the previous assignment, but this time using the 'this' keyword.

//Call the 'describe' method

//Add a method called 'checkIsland' to the 'myCountry' object. This method will set a new property on the object, called 'isIsland'. 'isIsland' will be true if there are no neighbouring countries, and false if there are. Use the ternary operator to set the property.
/*
const myCountry = {
    country: 'Sweden',
    capital: 'Stockholm',
    language: 'Swedish',
    population: 10,
    neighbours: ['Norway', 'Finland', 'Denmark'],

    describe: function () {
        console.log(`${this.country} has ${this.population} million swedish - speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
    },

    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true : false;
    }
};

console.log(myCountry.describe());
console.log(myCountry.checkIsland());
console.log(myCountry);
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//THE FOR LOOPS¨
/*
for (let vote = 1; vote <= 50; vote++) {
    console.log(`Voter number ${vote} is currently voting`);
}
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*

//LOOPING ARRAYS, BREAKING AND CONTINUING

const populations = [10, 1441, 332, 83];
const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
    const perc = percentageOfWorld1(populations[i]);
    percentages2.push(perc);

    function percentageOfWorld1(percent) {
        return percent / 7800;
    }
}

console.log(percentages2);
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//LOOPING BACKWARDS AND LOOPS IN LOOPS
/*
const listOfneighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden',
        'Russia']
];

for (var i = 0; i < listOfneighbours.length; i++) {

    for (var ne = 0; ne < listOfneighbours[i].length; ne++) {
        console.log(`Neighbour: ${listOfneighbours[i][ne]}`);
    }
}
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//THE WHILE LOOP
/*
const populations = [10, 1441, 332, 83];
const percentages3 = [];

let i = 0;
while (i < populations.length) {
    const perc = percentageOfWorld1(populations[i]);
    percentages3.push(perc);

    function percentageOfWorld1(percent) {
        return percent / 7800;
    };
    i++;
}
console.log(percentages3);
*/
//The loop is better because it has a counter. The array 'populations' is the counter to have many times we need to repeat.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////