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

// const sayHi = () => console.log('Hello world');

// sayHi();

// const double = (value) => value * 2;

// const num = double(4);
// console.log(num);

// //two parameters and more than one line

// const multiply = (num1, num2) => {
//   const result = num1 * num2;

//   // more code here
//   return result;
// };

// sum = multiply(4, 6);
// console.log(sum);

// return object

// const object = () => ({ name: 'john', age: 23 });

// const person = object();
// console.log(person);

//Arrow functions as callback functions

// const numbers = [1, 2, 3, 4, 5, 6];
// const big = numbers.filter((numbers) => numbers > 2);
// console.log(big);

// // with 2 or more parameters - set up paranthesis

// const bigger = numbers.filter((number, index) => {
//   console.log(index);
//   return number > 2;
// });

// console.log(bigger);

// Arrow function as add event listener callback functions

// const btn = document.querySelector('.btn');

// const quote = document.getElementById('head');

// btn.addEventListener('click', () => {
//   console.log('You clicked me');
//   btn.innerHTML = quote.innerHTML;
// });

/*
=================================================
Arrow Functions - Object and 'this'
=================================================
-Arrow Functions or Fat Arrow Functions
-reg function: 'This' refers parent, left of the dot
-arrow function: refers to it's current surrounding scope
*/
// const bob = {
//   firstName: 'bob',
//   lastName: 'smith',
//   sayName: function () {
//     console.log(this);
//     // const self = this;
//     setTimeout(() => {
//       console.log(this);
//       // console.log(self);

//       console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
//     }, 2000);
//   },
// };

// const anna = {
//   firstName: 'anna',
//   lastName: 'jackson',
//   sayName: () => {
//     console.log(this);
//     console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
//   },
// };

// bob.sayName();
// anna.sayName();

/*
=================================================
Arrow Functions - Select Elements and  'this'
=================================================
*/

// const btn = document.querySelector('.btn');
// btn.addEventListener('click', function () {
//   console.log(this);
//   setTimeout(() => {
//     console.log(this);

//     this.style.color = 'black';
//     this.style.background = 'yellow';
//   }, 2000);
// });

/*
=============================================================
Arrow Functions - default parameters, arrow function gotchas
=============================================================
Arrow function has defult parameters as a fallback
Arrow function does not support hoisting like the regular functions
*/

// const john = 'John';
// const peter = 'Peter';

// function sayHi(person = 'Susan') {
//   console.log(`Hi ${person}`);
// }

// sayHi();

// const sayHello = (person = 'Sussy') => console.log(`Hi ${person} `);
// sayHello();

/*
=============================================================
Array Destructuring
=============================================================
-This is a faster way to access/unpack values from arrays or objects or when passing in as parameters in functions. 

-arrays
*/

// how to unpack values
const fruit = ['orange', 'banana', 'lemon'];
const friends = ['john', 'peter', 'bob', 'anna', 'kelly'];

// const orange = fruit[0];
// const banana = fruit[1];
// const lemon = fruit[2];

// console.log(orange, banana, lemon);

// destructuring using ES6
const [john, peter, bob] = friends;
console.log(john, peter, bob);
const [orange, banana, lemon] = fruit;
console.log(orange, banana, lemon);
