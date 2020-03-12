// // Log to console
// console.log('Hello World');
// console.log(123);
// console.log(true);

// console.log([1, 2, 3, 4]);
// console.log({a:1, b:2});
// console.table({a:1, b:2});
// console.error('This is some error');
// console.clear();
// console.warn('This is a warning');
// console.time('Hello');
//     console.log('Paresa');
//     console.log('Paresa');
//     console.log('Paresa');
//     console.log('Paresa');
//     console.log('Paresa');
//     console.log('Paresa');
//     console.log('Paresa');
// console.timeEnd('Hello');

// // VAR
// var name = 'Paresa Morton';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// // Init var
// var greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);

// //Multi Words
// var firstName = 'John'; // Camel Case
// var first_name = 'Sara'; // Underscore
// var FirstName = 'Tom'; // Pascal Case

// LET 
// let name;
// name = 'Paresa Morton';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// // CONST
// const name = 'John';
// console.log(name);
// // Can not reassign
// // name = 'Sara';
// // Have to assign a value
// const person = {
//     name: 'John',
//     age: 30
// }
// person.name = 'Sara';
// console.log(person);

// const numbers = [1, 2, 3, 4, 5];
// numbers.push(6);
// console.log(numbers);

// PRIMITIVE

// String
// const name = 'John Doe';
// // Number 
// const age = 45;
// // Boolean
// const hasKids = true;
// // Null
// const cars = null;
// // Undifiend
// let test;
// // Symbol
// const sym = Symbol();

// console.log(typeof test);


// // REFERENCE TYPES - Objects
// // Array
// const hobbies = ['Movies', 'Music'];
// // Object literal
// const address = {
//     city: 'Boston',
//     state: 'MA'
// }
// const today = new Date();
// console.log(today);
// console.log(typeof today);

let val;

// Number to string
val = String(5);
val = String(4 + 4);

// Boolean to String
val = String(true);

// Date to String
val = String(new Date());

// Array to String
val = String([1, 2, 3, 4]);

// toString
val = (5).toString();

// String to number
val = Number('5');

console.log(val.toFixed(2));

val = parseInt('100.30');
val = parseFloat('100.30');


// Output
console.log(val);
console.log(typeof val);
console.log(val.length);


const val1 = String(5);
const val2 = 6;
const sum = Number(val1 + val2);

console.log(sum);
console.log(typeof sum);

const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2
val = num1 * num2
val = num1 - num2
val = num1 / num2
val = num1 % num2

console.log(val)