/* 
Types - Data Types

- Booleans(Truth and false)
- Strings
- Numbers
 */


/*
strings
- are datatypes used to represent text and wrapped in single quotes double quotes or backticks. 


*/


var stringOne = "double quotes";
// prettier-ignore
var stringTwo = 'single quotes';

var stringThree = `back ticks`;

// use a comma to seperate two variables for printing to the console
console.log(stringOne, stringTwo);

// ! Adding strings together
// Example of putting together two strings
// ! Problem is they are smashed together
console.log(stringOne + stringTwo);
// ! The Fix
console.log(stringOne + " " + stringTwo);
// using backTicks
console.log(`${stringOne} ${stringTwo}`);  // output: double quotes single quotes





var greeting = 'Good Afternoon';
var firstName = 'Lauren';
console.log(`${greeting} ${firstName}`);

// ! If you want to find out what type of variable is you can use typeof

console.log(typeof firstName);

var moneyOne = "20";
var moneyTwo = "10";

console.log(moneyOne + moneyTwo);
// combining two strings is called concatenation.

/* 
numbers

*/

let currentTemp = 23;
console.log("currentTemp:", currentTemp);

let calculatedTip = 50 * 0.25;
console.log(calculatedTip.toFixed(2));

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log("numbersAreHard", numbersAreHard);

// ! Convert Strings to numbers
//  Number()

console.log("Converting string to Number:", Number(moneyOne) + Number(moneyTwo));

// Way #2
// add a plus to the start of the variable
// ex: +moneyOne

console.log(+moneyOne + +moneyTwo);


/* 
Booleans: 
- Only has two possible values
true or false 
*/
//! example
var isOver21 = true;
console.log("isOver21", isOver21);
var isTeenager = false;
console.log("isTeenager", isTeenager);
console.log("typeof", typeof isOver21);

/* 
Null
- Null is an empty value.
- Think of it as we have an empty container - nothing is in it but it exists as space to fill later on.
*/
let isLoggedIn = null

/* 
undefined
- No value is assigned and does not act as an empty container 
*/

var myName;
//  because we did not assinged and default is undefinded

var myLastName = undefined;
var myAddress = "123 Main st";

console.log(Boolean(myLastName));
console.log(Boolean(isLoggedIn));
console.log(Boolean(myAddress));