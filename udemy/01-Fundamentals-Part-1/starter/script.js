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

