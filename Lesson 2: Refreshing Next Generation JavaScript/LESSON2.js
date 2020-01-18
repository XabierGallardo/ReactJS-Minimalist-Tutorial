#Next Generation JavaScript

//1. VARIABLES///////////////////////////////////////////////////////////////
/*Modern variables in JavaScript (ES6) are let and const

let: keyword for a variable value

const: keyword for a constant value*/

#var
var myName = "Xan";
console.log(myName);

myName = "Xaquin";
console.log(myName);

//Xan 
//Xaquin



#let
let myName = "Xan";
console.log(myName);

myName = "Xaquin";
console.log(myName);

//Xan
//Xaquin



#const
const myName = "Xan";
console.log(myName);

myName = "Xaquin";
console.log(myName);

//Xan 
//ERROR (TypeError: Assignment to constant variable)




//2. ARROW FUNCTIONS///////////////////////////////////////////////////////////////

JS functions
function myFunction() {
	...
}

Arrow Functions
const myFunction = () => {
	...
}


Arrow Functions:
/*
- No more .this keyword
- No need of () if there's only one argument
- No need of {} if there's a simple return statement
*/
const multiply = (number) => number * 2; //or const multiply = number => number * 2; 
console.log(multiply(2));

//4




//3. MODULES: EXPORT & IMPORT///////////////////////////////////////////////////////////////
/*
The idea is to import content to a JS file, from another JS file.
There are default exports and named exports
*/
#person.js
const person = {
	name: 'Xan'
}

//default keyword means that if we just import something from that file, it'll always be our default person
export default person 


#utility.js
export const clean = () => {...}
export const baseData = 10;


#app.js
import person from './person.js'
import prs from './person.js'

import { baseData } from './utility.js'
import { clean } from './utility.js'




#In summary:
//default export: (you choose the name)
import person from './person.js'
import prs from './person.js'

//named export: (name is defined by export)
import { smth } from './utility.js'
import { smth as Smth } from './utility.js'
import * as bundled from './utility.js'




//4. CLASSES///////////////////////////////////////////////////////////////

/*Almost everything in JS are objects (except primitive values)
We create JavaScript objects as blueprints*/

class Person {
	name = 'Xan' //Properties (variables)
	call = () => { //Methods (functions)
		...
	}
}

const myPerson = new Person(); //A class is instantiated with the "new" keyword
myPerson.call();

class Person extends Master //Classes supports inheritance (inherites properties and methods from a superior class)

class Human {
	constructor() {
		this.gender = "Male";
	}

	printGender() {
		console.log(this.gender);
	}
}

class Person extends Human { //We are extending another class
	constructor() {
		super(); //super method executes the parent constructor
		this.name = "Xan";
		this.gender = "female";
	}

	printMyName() {
		console.log(this.name);
	}
}

const person = new Person();
person.printMyName(); //Xan
person.printGender(); //female

/*Classes are just blueprints for JS Objects
Classes are used by React to create its components*/




//5. CLASSES, PROPERTIES AND METHODS///////////////////////////////////////////////////////////////

/*Properties*/
//ES6
constructor() {
	this.myPropertie = "value"
}

//ES7 
myPropertie = "value" //We skip the constructor call

/*Methods*/
//ES6
myMethod() {
	...
}

//ES7 
myMethod = () => { //The arrow function as a propertie value, there are no problems with "this" keyword
	...
}

//EXAMPLE (we removed a lot of the previous code)
class Human {
	gender = "Male";
	printGender = () => {
		console.log(this.gender); //Still using this keyword when we're reaching out of the propertie
	}
}

class Person extends Human { //We are extending another class
		name = "Xan";
		gender = "female";

	printMyName = () => {
		console.log(this.name);
	}
}

const person = new Person();
person.printMyName(); //Xan
person.printGender(); //female




//6. SPREAD & REST OPERATORS///////////////////////////////////////////////////////////////

//Spread operator (used to split up array elements or objects properties)
...

const newArray = [...oldArray, 1, 2];
const newObject = {...oldObject, newProp:5};

//Rest (used to merge a list of function arguments into an array)
...

function sortArgs(...args) {
	return args.sort();
}

//EXAMPLE Spread operator
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];
console.log(newNumbers); //[1, 2, 3, 4]

const numbers = [1, 2, 3];
const newNumbers = [numbers, 4];
console.log(newNumbers); //[[1, 2, 3], 4]

const person = {
	name: "Xan"
};

const newPerson = {
	...person,
	age: 28
}

console.log(newPerson);
/*[object Object] {
	age: 28,
	name: "Max"
}*/


//EXAMPLE Rest operator
const filter = (...args) => { 
	return args.filter(el => el === 1); //Return true or false if the element is equal to 1
}

console.log(filter(1, 2, 3)); //[1]


//7. DESTRUCTURING///////////////////////////////////////////////////////////////
//Destructuring allows us to easily extract array elements or objects properties and store them in variables

//Array Destructuring
[a,b] = ["Hello", "Max"];
console.log(a); //Hello
console.log(b); //Max

//Object Destructuring
{name} = {name:"Max", age: 28}
console.log(name); //Max
console.log(age); //undefined

//EXAMPLE Array Destructuring
const numbers = [1,2,3];
[num1, ,num3] = numbers;
console.log(num1,num3); //1 3




//8. CLASSES///////////////////////////////////////////////////////////////




//9. CLASSES///////////////////////////////////////////////////////////////




//10. CLASSES///////////////////////////////////////////////////////////////




//11. CLASSES///////////////////////////////////////////////////////////////




//12. CLASSES///////////////////////////////////////////////////////////////