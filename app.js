/*
=============================================
ES6+ Module
=============================================
- Vanilla and frameworks e.g REACT, e.t.c
*/

/*
=============================================
var, let and const 
=============================================
var - we can define, update, and redefine variables using var
let - can define, and update but cannot redefine
const - cannot redefine,  mutate primitive type
*/
// var
// define
// var number = 100;
// console.log(number);
// // update
// number = 200;
// console.log(number);
// //redefine
// var number = 'orange';
// console.log(number);

// let
// let amount = 100;
// console.log(amount);
// amount = 200;
// console.log(amount);
// let amount = 'orange';
// console.log(amount);

// const- cannot be reassign using primitive data type eg string and number, however, we can reassign by reference by type e,g object, array, functions. The value can mutate
// const total = 100;
// console.log(total);
// // total = 200;
// const person = { name: 'bob' };
// person.name = 'john';
// console.log(person.name);

/*
================
Global scope 
.................
var - only function scope
let and const - block scope - Anything within curly braces { }
*/

// Global scope variables

// var amount = 100; //any variable outside function is global scope - can be accessed anywhere within the document.

// function greet() {
//   //local scope - this will work well with let and const as well
//   var random = 'some random value';
//   console.log(`Hello there ${amount} ${random}`); //both global and local variable are accessed within the function.
// }

// // console.log(random); // big fat error

// // greet();

// // var
// // var total = 1000;
// // var test = true;

// // if (test) {
// //   var total = 'oranges plus onions';
// //   console.log('Hello there');
// // }

// // console.log(total);

// // let
// let total = 50000;
// let test = true;

// if (test) {
//   //local scope
//   let total = 'oranges plus onions';
//   let value = 'some random value';
//   console.log(`Hello there ${total} are ${value}`);
// }
// // console.log(value);
// {
//   let total = 2000;
//   console.log(total);
// }
// {
//   let total = 5000;
//   console.log(total);
// }

// console.log(total);

/*
============================
Initialization of variables
............................
var - you can access a variable but not value before initialization
let and const - You cannot access the variable and value
*/

// var
// console.log(amount);
// var amount = 300; //throws undefined, it access the variable and not the value

// let and const
// console.log(amount);
// let amount = 300;

/*
=============================================
TEMPLATE STRINGS/LITERALS - innerHtml
=============================================
*/

// const person = {
//   name: 'Kyle',
//   job: 'developer',
//   hobbies: ['surfing', 'baking', 'bowling'],
// };

// const result = document.getElementById('result');
// // result.innerHTML =
// //   '<h1>' + person.name + '</h1>' + '<p>' + person.hobbies + '</p>';
// // console.log(person.name, person.hobbies);

// // template  string/literals

// result.innerHTML = `
// <h2>${person.name}</h2>
// <p>${person.job}</p>
// <ul> ${person.hobbies
//   .map((item) => {
//     return `<li>${item}</li>`;
//   })
//   .join('')}</ul>
// `;

/*
=============================================
Tagged, TEMPLATE STRINGS/LITERALS - innerHtml using ES6
=============================================
- Once we run out function, we pass in template string in the function
- we return the value from the function
*/

// const author = 'Some Author!';
// const statement = 'Some Statement!';

// const quote = hightlight`here is the ${statement} by ${author} and it could not be more true`;
// console.log(quote);

// const result = document.getElementById('result');
// result.innerHTML = quote;

// function hightlight(text, ...vars) {
//   const awesomeText = text.map((item, index) => {
//     return `${item} <strong>${vars[index] || ''}</strong>`;
//   });
//   return awesomeText.join('');
// }

/*
=============================================
ARROW FUNCTIONS
=============================================
-Arrow function or Fat Arrow Functions
-no name, always expression, assign to a variable
-no function keyword
-'this'
*/
//recap: How to set up functions

// first way
// function sayHi() {
//   console.log('Hello world!!!');
// }
// sayHi();

// second way

// const hello = function (name) {
//   console.log(`hello ${name}`);
// };

// hello('bob');

// third - Arrow function

const sayHi = () => console.log('Hello world');

sayHi();

const double = (value) => value * 2;

const num = double(4);
console.log(num);
