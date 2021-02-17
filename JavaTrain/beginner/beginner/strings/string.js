//String in Javascript (common methods)
let fruit = 'banana';
let mroefruits = 'banana\napple';        //new line --> \n
let fruitList = 'banana, apple, orange, blackberry';

console.log(fruit.length);      // counts how many words does "banana" have
console.log(fruit.indexOf(nan));     // This is to get an index to see something can be found, for example "nan" in banana it's 2. They start count to 0.  
console.log(fruit.slice(2, 5));     //  It start sliceing to 2. It's starts with 0 in b than 1 in a and so on. however 5 stands for end slice to stop.
            
console.log(fruit.replace('ban', '123')); //It will go from "banana" to "123ana"

console.log(fruit.toUpperCase()); //BANANA <-- Caps
console.log(fruit.toLowerCase()); //banana <-- none caps

console.log(fruit.charAt(2)); // Will be n
console.log(fruit[2]);        //same thing here but a shoter code

console.log(fruit.split('')) //It will be "b" "a" "n" "a" "n" "a" (split by characters)
console.log(fruitList.split(',')) //It will be "banana, apple, orange, blackberry" (split by a comma)




