//This script is called an inline script
/*
let js = 'amazing';
if (js == 'amazing')
    alert('Javascript is FUN!');

40 + 8 + 23 - 10 //Will not print out in the console

console.log(40 + 8 + 23 - 10); // Console.log whenever you want to access the developer console
*/

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

//Values and variables 
/*
console.log("Jonas"); //Jonas is the value
console.log(23); //Vaule is the smallest unit of information in javascript


let firstName = "Luciano"; //creating a variable in your computers memory
//First box "firstname" which inside is "Jonas"

console.log(firstName);
console.log(firstName);
console.log(firstName);  // Write the varible instead of passing a value like "Luciano"
*/
//You can't start to name a variable with an uppercase, nummber and name codes like Function, new and so on...

//Name a variable that makes the programmer easier to understand

//////////////////////////////////////////////////
//////////////////////////////////////////////////

//DATA TYPES

/*
let javaScriptIsFun = true;
console.log(javaScriptIsFun);


console.log(typeof true); //This operator "typeof" will make a new value which is a string with the type of this value. It will be "Boolean"
//To show the type of the value

console.log(typeof javaScriptIsFun); //Boolean
console.log(typeof 23); //number
console.log(typeof 'Jonas'); //string


javaScriptIsFun = 'YES'; //Changed the value data's in the variable
console.log(typeof javaScriptIsFun); //from boolean to a string

let year;
console.log(year); //undefined
console.log(typeof year); //undefined

year = 1991; //changing from an undefined to a number
console.log(typeof year); //number
*/
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

//VAR,CONST AND VAR

/*
let age = 30;
age = 31; // we mutated the variable
// It's okto declarea variable

const birthYear = 1991;
birthYear = 1990; // can't be assigned
//It won't work due to const is a variable who can't be changed in the near futher

//const is used to not change the variable forever, on the other hand let can be changed

var job = 'programmer'; //var is an old way of defining variables
job = 'teacher';
//Don't use var in the modern world, in other word don't use var

lastName = 'Meow'; // Don't do this too without using let or const, even if it works
console.log(lastName);
*/
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

//BASICS OPERATORS
/*
// Mathematical operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah); //Jones is 46 and Sarahs age is 19

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
//2 ** 3 means 2 tothe powerof 3 = 2 * 2 * 2


const firstName = 'Luciano';
const lastName = 'Cucarano';
console.log(firstName + ' ' + lastName);


// Assignment operatos
let x = 10 + 5; // x = 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
console.log(x); // x = 100


// Comparison operators
console.log(agJonas > ageSarah); // True, Jonas is 46 and Sarah is 19
console.log(ageSarah >= 18); //True
// >,<,>=,<=

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018); //True
*/
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

// OPERATORS PRECEDENCE
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018); //MDN is a well known and widely used documentation site. It shows which operator will be executed first. For example + and - goes first than > and <

let x, y;
x = y = 25 - 10 - 5; // x = y = 10 (with --> = <-- they read right to left) if they didn't x and y would not be 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSara, averageAge); // 46, 19 and 32.5
*/

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

// CODING CHALLENGE 1 
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:

Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.

Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK!!
*/
/*
//My own code test
const marksHeight = 1.95;
const makrsMass = 78;
const johnHeight = 1.76;
const johnMass = 85;

const m_BMI = makrsMass / marksHeight ** 2;
const j_BMI = johnMass / (johnHeight * johnHeight);
const markHigherBMI = m_BMI > j_BMI;

console.log(m_BMI, j_BMI, markHigherBMI);
*/

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

//STRING AND TEMPLATE LITERALS
/*
const firstName = 'Jonas';
const job = 'teacher';
const birthDay = 1991;
const year = 2037;

//The hard and annoying way to code
const jonas = "I'm " + firstName + ', a ' + (year - birthDay) + ' years old ' + job;
console.log(jonas);

//Better way and easier!
const jonasNew = `I'm ${firstName} a ${year - birthDay} year old ${job}`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log(`String with \n\
multiple \n\
lines`); // \n\ <--- a new line
*/
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// TALKING DECISTIONS: IF / ELSE STATEMENTS
/*
const age = 19; //Make my own variable and use it in if

if (age >= 18) { // Will be activated if you are 18 or above
    console.log('Lucinao kan starta sina kör lektioner');
} else { //Or else will this be activated
    const yearLeft = 18 - age;
    console.log(`Det fattas ${yearLeft} år för dig att kunna ta kör lektioner!`);
}

const birthDay = 2002;

let century
if (birthDay <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//CODING CHALLENGE 2
/*
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.

Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement
GOOD LUCK!
*/

//My test code
/*
const marksHeight = 1.95;
const makrsMass = 90;
const johnHeight = 1.76;
const johnMass = 85;

const m_BMI = makrsMass / marksHeight ** 2;
const j_BMI = johnMass / (johnHeight * johnHeight);
const markHigherBMI = m_BMI > j_BMI;

if (markHigherBMI) {
    console.log(`Mark's BMI ${m_BMI} is higher than John's ${j_BMI}!`);
} else {
    console.log(`John's BMI ${j_BMI} is higher than Mark's ${m_BMI}!`);
}
*/
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

// Type Conversion

//Start with conversion
/*
const inputYear = '1991';
console.log(Number(inputYear), inputYear); //Number function makes from string to numbers
console.log(Number(inputYear) + 18); //2009

console.log(inputYear + 18);//the results is 199118 due to "1991" is a string

console.log(number("Jonas")); //You will get NaN which stands for "Not a number"

console.log(typeof NaN); //Will say "Number". It's a weird result of this. Actually means an invalid number, not a number.

console.log(String(23), 23); //Makes a number to a string instead
*/

// Type coercion
/*
console.log('I am ' + 23 + ' years old'); //Whenever there is a string and the number. The number will be converted to a string.

console.log('I am ' + (String(23) + ' years old')); //If we didn't have automatic type coercion like many other languages don't, then we would have to manually do this.

console.log('23' - '10' - 3); //Gives us 10. It converted the strings to numbers. The minus triggers the opposite conversion.

console.log('23' + '10' + 3); //23103. 10 to 3 is converted to strings
console.log('23' * '2');//Will be converted to numbers so it's 46
console.log('23' / '2');//Same goes to dividing so it's 11.5
console.log('23' > '18');//True. Javascript will convert strings to numbers automatically.

let n = '1' + 1; //Be 11
n = n - 1; //11 - 1 = 10
console.log(n); //Will be 10
*/
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

//TRUTHY AND FALSY VALUES

//5 falsy values: 0,' ', undefined, null and NaN
/*
console.log(Boolean(0)); //False
console.log(Boolean(undefined)); //False
console.log(Boolean('Jonas')); //True
console.log(Boolean({})); //True
console.log(Boolean('')); //False

const money = 0; //0 is false (If it was 1 or 1242 it would be true)
if (money) { //Money = 0 which goes false
    console.log("Don't spend it all :)");
} else {
    console.log("You should get a job!");
}

let height; //The height is undefined which is a false value
if (height) { //False
    console.log("YEY! Height is defined");
} else {
    console.log("Height is UNDEFINED!");
}
*/
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

//EQUALITY OPERATORS: == vs. ===
/*
const age = '18';
//Whenever or if block only has one line, we don't actually need two curly braces --> {} <---
if (age === 18) console.log('You just became an adult! :D (Strict)'); //False

if (age == 18) console.log('You just became an adult! :D (Loose)'); //True

//General rule of clean code, avoid the loose equality operator as much as you can

const favourite = Number(prompt("What is your favourite number?"));
console.log(favourite); //The answer is what you put to the console. Example I put 23 and then the console will write 23
console.log(typeof favourite); //String

if (favourite == 23) { //23 === 23 --> True
    console.log('Cool! 23 is an amazing number');
} else if (favourite === 7) {
    console.log('7 is also a cool number');
} else if (favourite === 69) {
    console.log('69 is a supercool number!!');
} else {
    console.log('Number is not 69 or 23 or 7');
}

if (favourite !== 69) console.log('Why not 69? :(');
//!== is when it's not 69 will this console activate, but it's strict like -->===<--. (!= is a loose like -->==<--)
*/
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//LOGICAL OPERATORS
/*
const hasDrivesLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDrivesLicense && hasGoodVision);// AND
console.log(hasDrivesLicense || hasGoodVision);// OR
console.log(!hasDrivesLicense); // NOT - True to false

//if (hasDrivesLicense && hasGoodVision) {
//    console.log('Sarah is able to drive');
//} else {
//    console.log('Someone else should drive');
//}

const isTried = true; // C
console.log(hasDrivesLicense && hasGoodVision && isTried); //isTried got from true to false with NOT-operator

if (hasDrivesLicense && hasGoodVision && !isTried) {
    console.log('Sarah is able to drive');
} else {
    console.log('Someone else should drive...');
}
*/
////////////////////////////////////////////////////////////////////////////////////////////7///////////////////////////////////////////////////////////////////

