//ACTIVATING STRICT MODE

/*Strict mode is a special mode that we can activate in Javascript, which makes it easier for us to write secure Javascript codes.

To activate strict mode we need to use this: 'use strict';

It makes it easier for developers to avoid accidental errors. It helps to introduce the bugs into our code.

Reasons are:

 1. it will actually create visible errors for us

 2. Strict mode forbids us to do certain things

Without strict mode it will simply fail silently without letting us know what we did a mistake.
*/
/*
'use strict';

let hadDriversLicense = false;
const passTest = true;

if (passTest) hadDriversLicense = true;
if (hadDriversLicense) console.log('I can drive :D');

//can not use this varibales
//error message and it's because is reserving this word here for a feature that might implament in the future.
const interface = 'Audio';
const private = '534';
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//FUNCTIONS

/*
//All the functions doesn't need to return something
function logger() {
    console.log('My name is Jonas');
}

// calling / running / invoking function
logger();


//parameters are like variables that are specific only to this function and they all get defined ones we call the function. (represents the input data of this function)
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    //We can return any value from the function
    return juice;
}

//If we want to use that value that was returned. We need to store it in a variable.
//The parameters are called agruments
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

//We can use as many times as we wanted
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//We use return if we want to use over and over again
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//FUNCTION DECLARATIONS VS. EXPRESSIONS
/*
//FUNCTIONS DECLARATION
function calAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calAge1(1991);


//FUNCTION EXPRESSION
//all of them is basically an expression which produces a value
const calAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calAge2(1991);


//The same results
console.log(age1, age2);

//Which should I use? It's basically your own personal preference.
//I may use expression because I like to focus on a nice structure where I can define all the functions first at the top of the code and then I can call them. So it makes it more organisized.
//IMPORTANT! You most know both of them even if I won't use declarations in my case.
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ARROW FUNCTIONS

//Arrow function is a special form of function expression that is shorter and therefore faster to write.

//FUNCTION EXPRESSION
/*
const calAge2 = function (birthYear) {
    return 2037 - birthYear;
}

//ARROW FUNCTION
const calAge3 = birthYear => 2037 - birthYear;

const age3 = calAge3(1991);
console.log(age3);


//An example to use it
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Luciano'));
console.log(yearsUntilRetirement(1980, 'Bob'));

//Use the expression for now on. There is a negative about arrow functions that I don't know yet.
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////