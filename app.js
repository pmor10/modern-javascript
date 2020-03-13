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

// let val;

// // Number to string
// val = String(5);
// val = String(4 + 4);

// // Boolean to String
// val = String(true);

// // Date to String
// val = String(new Date());

// // Array to String
// val = String([1, 2, 3, 4]);

// // toString
// val = (5).toString();

// // String to number
// val = Number('5');

// console.log(val.toFixed(2));

// val = parseInt('100.30');
// val = parseFloat('100.30');


// // Output
// console.log(val);
// console.log(typeof val);
// console.log(val.length);


// const val1 = String(5);
// const val2 = 6;
// const sum = Number(val1 + val2);

// console.log(sum);
// console.log(typeof sum);

// const num1 = 100;
// const num2 = 50;
// let val;

// // Simple math with numbers
// val = num1 + num2
// val = num1 * num2
// val = num1 - num2
// val = num1 / num2
// val = num1 % num2

// // Math Objects
// val = Math.PI;
// val = Math.E;
// val = Math.round(2.4);
// val = Math.ceil(2.4);
// val = Math.floor(2.8);
// val = Math.sqrt(64);
// val = Math.abs(-3);
// val = Math.pow(8, 2);
// val = Math.min(2, 33, 4, 1, 0)

// val = Math.floor(Math.random() * 20 + 1);

// console.log(val)

// // STRING AND CONCATENATION

// const firstName = 'William';
// const lastName = 'Johnson';
// const age = 30;
// const str = 'Hello there my name is Paresa.'

// let val;
// val = firstName + ' ' + lastName;

// // Append 
// val = 'Brad ';
// val += 'Traversy';

// val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// // Escaping 
// val = 'That\'s awsome, I can\'t wait';

// // Length
// val = firstName.length;

// // Concat()
// val = firstName.concat(' ', lastName);

// // Change Case
// val = firstName.toUpperCase();
// val = firstName.toLowerCase();

// val = firstName[0];

// // indexOf()
// val = firstName.indexOf('l');

// // charAt()

// val = firstName.charAt('2');

// // Get last char
// val = firstName.charAt(firstName.length - 1);

// // substring()
// val = firstName.substring(0, 4);

// //slice()
// val = firstName.slice(0, 4);
// val = firstName.slice(-3);

// // split()
// val = str.split(' ');

// // replace
// val = str.replace('Paresa', 'Jack');

// // includes()
// val = str.includes('Hello');

// console.log(val);

// Template Literals
// const name = 'John';
// const age = 30;
// const job = 'Web Developer';
// const city = 'Miami';
// let html;

// // Without template strings (es5)
// html = '<ul><li>Name: '+ name + '</li><li>Name: '+ age + '</li><li>Name: '+ job + '</li><li>Name: '+ city + '</li></ul>';

// html = '<ul>' + 
//         '<li>Name: '+ name + '</li>' + 
//         '<li>Age: '+ age + '</li>' + 
//         '<li>Job: '+ job + '</li>' + 
//         '<li>City: '+ city + '</li>' +
//         '</ul>';


// function hello() {
//     return 'hello';
// }

// // With template strings (es6)
// html = `
//     <ul>
//         <li>Name: ${name}</li>
//         <li>Age: ${age}</li>
//         <li>Job: ${job}</li>
//         <li>City: ${city}</li>
//         <li>${2 + 2}</li>
//         <li>${hello()}</li>
//         <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
//     </ul>

// `;


// document.body.innerHTML = html;


//Create some arrays
const numbers = [43, 56, 22, 44, 54, 1, 3];
const numbers2 = new Array(22, 432, 3, 12, 1);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [32, 'Hello', true, undefined, null, {a:1, b:4}, new Date()];

let val;

// Get array length
val = numbers.length;
// Check if is array
val = Array.isArray(numbers);
// Get Single Value
val = numbers[3];
val = numbers[2];
// Find index of value
val = numbers.indexOf(56);
numbers.push(250);
numbers.shift();
numbers.reverse();

// Concatenate array
// val = numbers.concat(numbers2);

// Sorting Arrays
val = fruit.sort();
// val = numbers.sort();

// Use the compare function
// val = numbers.sort(function(x, y) {
//     return x - y;
// });

// // Reverse Set
// val = numbers.sort(function(x,y) {
//     return y - x;
//  });

// Find
function under50(num){
    return num < 50;
}

val = numbers.find(under50);

console.log(numbers);
console.log(val);

