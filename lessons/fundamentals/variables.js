/* 
-Variables are named containers for storing data and values.
-we can name variables anything wit ha few exceptions.
-we use these variables to reference them a later time.
*/

/* you can start the declaration with a var, let, or const 
-variable Names in Javascript should be camel cased: starts off lowercase and each word is capatilized
ex: currentLivingAddress, currentHour, currentWeather
*/
// prettier-ignore

var firstName = "Lauren";
// (variable) + (declaration) = (value)

/* 
1. Javascript keyword to denote the creation of variable (var, let, const)
2. The name of the variable that the developer will refernce in order to grab the value that is stored. 
3. Assingment Operator
4. Initial Value
*/

console.log("hello from my console.log line:27");
// ! to run a javascript filr in terminal - use command: node [filename.js]
// !Eaxmple: node variables.js

console.log(firstName);
console.log("Variable firstName", firstName);

/* 
Variable Declaration:
- The declaration is to the left side of the assignment operator
- This is where the variable is created - it's not assinged a value yet.
- If no value assinged to it becomes undefined.
*/

// Just declared not assinged a value
var lastName;
console.log("variable lastName", lastName)
// Value is assinged
lastName = "Martinez";
console.log("Variable lastName", lastName);
// changed Value
lastName = "Smith"
console.log("Variable lastName", lastName);
