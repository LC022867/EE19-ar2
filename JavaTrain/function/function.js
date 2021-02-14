
/*
1. Create a function
2. Call the function
*/

//Create
function fun() {
    console.log('this is a fuction')
}


//Call
fun();

/* Let's create a functons that take in a name and says hello followed by your name

for example 

Name: "Luciano"
Return: "Hello Luciano"
*/

function greeting(yourName) {
    let result = 'Hello' + ' ' + yourName; //String concatenation
    console.log(result);
}

let namE = prompt('What is your name?');
greeting(namE);

//How do agruments work in functions?
//How do we add 2 numbers together in a function?

function sumNumbers(num1, num2) {
    let result = num1 + num2; //Make a variable 
    console.log(result);
}

sumNumbers(10, 10); //Like 10 + 10 = 20