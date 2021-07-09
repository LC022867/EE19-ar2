//ACTIVATING STRICT MODE

/*Strict mode is a special mode that we can activate in Javascript, which makes it easier for us to write a secure Javascript codes.

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

//FUNCTIONS CALLING OTHER FUNCTIONS 
/*
function cutPieces(fruit) { // 3. As we call the cutPieces this too is acutally the argument for the cutPieces function. So it's replacing the fruit parameter

    return fruit * 4; // 4. This will get multiplied by 4. After that the value will store into the "applePieces" variable.
}

function fruitProcessor(apples, oranges) {
    const applepieces = cutPieces(apples); //2. That value 2 will then be used to call the cutPieces function
    const organepieces = cutPieces(oranges);

    console.log(apples, oranges);
    const juice = `Juice with ${applepieces} piece of apple and ${organepieces} pieces of orange.`; // 5. Then we can use "applepireces or organepices"
    return juice;
}

console.log(fruitProcessor(2, 3)); //1. Here in the fruitprocessor 2 and 3, this will replace the apples to 2 and organes to 3.
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//REVIEWING FUNCTIONS
/*
const calAge = function (birthYeah) { //As you see there are two birthYeah, but they are not the same argument. So it's ok to use the same argument.
    return 2037 - birthYeah;
}

const yearsUntilRetirement = function (birthYeah, firstName) {
    const age = calAge(birthYeah);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement //The return keyword will immediately exit the function. So you need to put that last.
    } else {
        console.log(`${firstName} has already retired :)`);
        return -1;
    }
}

console.log(yearsUntilRetirement(2002, "Luciano"));
console.log(yearsUntilRetirement(1970, "Mike"));

//The first function, the function declaration. They can be used before they are declared in the code.

//Second, we have the function expressions, and they are essentially funtions values that are stored in a variable.

//Finally, we have arrow functions that are in fact also functions expressions,but special ones. These are great for quick one-line functions where we don't need to explicitly use the return keyword, and no curly braces either

//IMPORTANT! These here are that these are three different ways of writing functions, but they all work in a similar way. All of them can receive input data, transform data, and then they can output data. No matter which type of functions we use.

//Functions structure:

//Functions name.

//Parameters: placeholders to receive input values, like local variables.

//Function body: block of codes that we want to reuse.

//Return statement to output a value from the function.
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//INTRODUCTION TO ARRAYS
/*
const friend1 = 'Olegas';
const friend2 = 'Isam';
const friend3 = 'Micheal';

//Instead of repeating the same thing, you can do this so called arrays
//two ways

const friends = ['Olegas', 'Isam', 'Micheal'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2021)

console.log(friends[0]); //Gonna pick Olegas
console.log(friends[1]); //Gonna pick Isam
console.log(friends[2]); //Gonna pick Micheal

console.log(friends.length); //Number of elements in the array = 3
console.log(friends[friends.length - 1]); //Number of elements in the array - 1 = 2

//If I want to unfriend someone in the list
friends[2] = 'Cow';
console.log(friends);


//We can do about me
const luciano = ['Luciano', 'Cucarano', 18, 'student', friends];
console.log(luciano);
console.log(luciano.length);

//exercise
const calAge = function (birthYeah) {
    return 2037 - birthYeah;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calAge(years[2]);
const age2 = calAge(years[years.length - 1]);

console.log(age1, age2);

const age = [calAge(years[2]), calAge(years[years.length - 1])];
console.log(age);
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////