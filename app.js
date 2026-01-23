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
// const fruit = ['orange', 'banana', 'lemon'];
// const friends = ['john', 'peter', 'bob', 'anna', 'kelly'];

// const orange = fruit[0];
// const banana = fruit[1];
// const lemon = fruit[2];

// console.log(orange, banana, lemon);

// destructuring using ES6
// const [john, peter, bob] = friends;
// console.log(john, peter, bob);
// const [orange, banana, lemon] = fruit;
// console.log(orange, banana, lemon);

// skipping some array elements in the index

// const [enemy, , bob, , kelly] = friends; //skip using double commas, NB name does not matter since index is what we are looking at.
// console.log(enemy, bob, kelly);

/*
=============================================================
SWAP Variables
=============================================================
 - Destructuring swap variables
 -fatser/easier way ti access/unpack values from arrays
 -Objet into variables
 -arrays. 
*/
// let first = 'bob';
// let second = 'john';

// let temp = second;
// second = first;
// first = temp;

// array destructuring

// [second, first] = [first, second]; //destructuring the array,(first part), and second part, first, holds value of the first index, and  second, holds value of the second index
//after destructuring, you assign the value of second to the first index, and value of first to the seond index.

// console.log(first, second);

/*
=============================================================
Objects Destructuring
=============================================================
-This is a faster way to access/unpack values from arrays or objects or when passing in as parameters in functions. 

-arrays
*/

// const bob = {
//   first: 'bob',
//   last: 'sanders',
//   city: 'chicago',
//   sibling: {
//     sister: 'Jane',
//   },
// };

// console.log(bob);

// const firstName = bob.first;
// const lastName = bob.last;
// const sister = bob.sibling.sister;

// console.log(firstName, lastName, sister);

// destructuring
// const {
//   first: firstName,
//   last,
//   city,
//   sibling: { sister: favSister },
// } = bob; //unlike array, properties name needs to match!!!!
//we can also add alias name if we wan to change the name e.g adding alias firstNAme to firts, by using : (colon) especially if the name is already taken somewhere in the large project variable names.
// console.log(firstName, last, city, favSister);

/*
=============================================================
functions Destructuring!
=============================================================
-This is a faster way to access/unpack values from arrays or objects or when passing in as parameters in functions. 
-arrays
*/

// const bob = {
//   first: 'bob',
//   last: 'sanders',
//   city: 'chicago',
//   sibling: {
//     sister: { twin: 'jane' },
//   },
// };

// function printPerson({
//   first,
//   last,
//   city,
//   sibling: {
//     sister: { twin },
//   },
// }) {
//   //instead of passing the parameter as a whole object, we destructure first.
//   //very useful in react, we have components i.e params and pass in props like arguments
//   // const { first, last, city, sibling,{sister:sissy}} = person;
//   console.log(first, last, city, twin);
// }
// printPerson(bob);

/*
============================================================
New String Methods
============================================================
- startsWith(), endsWith(), includes(), repeat()
*/

// const person = 'Peter Smith,';
// const employee = '23456-EMP-PETER-SMITH';
// const manager = '23456-MAN-JOHN-DOE';

//StartsWith
// console.log(person);
// console.log(person.startsWith('Pe')); //Case sensitive- trie
// console.log(person.startsWith('pe')); //Case sensitive-false
// console.log(employee.startsWith('EMP', 6));

// ends with
// console.log(manager.endsWith('DOE'));
// console.log(manager.endsWith('MAN', 9));

// includes
// console.log(employee.includes('SMITH'));
// console.log(employee.includes('sMITH')); //case sensitive

// repeat
// const multiplyPeople = (person, amount = 5) => person.repeat(amount);
// const people = multiplyPeople(person);
// console.log(people);

/*
============================================================
"for of" - Loop
============================================================
for of - Loops through the values of an iterable object
String, Array, Map, Set e.t.c - NOT OBJECT
unlike forEach, - We can use break, continue
*/

// const fruits = ['apple', 'orange', 'banana', 'peach'];
// const longName = 'John Smith Pepper III';
// let shortName = '';

// for (const letters of longName) {
//   // console.log(letters);
//   if (letters == ' ') {
//     continue;
//   } else {
//     shortName += letters;
//   }
// }
// // console.log(shortName);

// for (const fruit of fruits) {
//   if (fruit === 'banana') {
//     // break;
//     continue; //dont fall off the if statement(jump to the next)
//   }
//   console.log(fruit);
// }

/*
============================================================
Spread Operator - Basics 
============================================================
This allows an iterable to spread/expand individually inside receiver
Splits into single items and copy them
*/
// const udemy = 'udemy';
// const letters = [...udemy];
// console.log(letters);

// const boys = ['john', 'peter', 'bob'];
// const girls = ['susan', 'anna'];
// const bestFriend = 'anorld';

// const friends = [...boys, bestFriend, ...girls];
// console.log(friends);
// // reference
// // const newFriends = friends;

// // copying without referencing
// const newFriends = [...friends];
// newFriends[0] = 'Karina';
// console.log(newFriends);
// console.log(friends);

/*
============================================================
Spread Operator - Objects 
============================================================
-Allows an iterables to spread/expand individually inside the receiver 
-Split into single item and copy them. 
-ES2018 -ES8
// */
// const person = {
//   name: 'john',
//   job: 'developer',
// };

// // const newPerson = { ...person, city: 'chicago' };
// //overwrighting
// const newPerson = { ...person, city: 'chicago', name: 'peter' }; //overridding the name variable with peter

// console.log(newPerson);
// console.log(person);

/*
============================================================
Spread Operator - DOM ELEMENTS 
============================================================
-Allows an iterables to spread/expand individually inside the receiver 
-Split into single item and copy them. 
-ES2018 -ES8
*/

// const headings = document.querySelectorAll('h1');
// const result = document.getElementById('result');

// // console.log(headings);
// // console.log(result);

// const text = [...headings]
//   .map((item) => `<span>${item.textContent}</span>`)
//   .join('');
// result.innerHTML = text;

/*
============================================================
Spread Operator - FUNCTIONS ARGUMENTS 
============================================================
-Allows an iterables to spread/expand individually inside the receiver 
-Split into single item and copy them. 
-ES2018 -ES8
*/
// const numbers = [23, 45, 66, 88, 2345];

// // console.log(Math.max(4, 5, 6, 7, 88, 99));
// console.log(Math.max(...numbers));

// const john = ['John', 'sanders'];

// const sayHello = (name, lastName) => {
//   console.log(`Hello ${name} ${lastName}`);
// };

// sayHello(john[0], john[1]);
// sayHello(...john);

/*
============================================================
REST Operator
// Rest operator use case number 1 - Destructuring arrays and objects, we employ REST operator 
============================================================
-Rest Operator ...
-Gathers/Collects the items
NB: the three dots behaves differently when using spread and Rest. 

Rest Operators are used in two different ways: Destructuring arrays/objects and when gathering parameters in a function 
*/

//arrays
// const fruit = ['apple', 'orange', 'lemon', 'Pie'];
// const [first, second, ...fruits] = fruit;
// console.log(first, fruits);

// // objects- when destructuring objects, unlike array, we need to look for proper property name, matching in order to access the property.
// const person = { name: 'john', lastName: 'smith', job: 'developer' };
// const { job, ...rest } = person;
// console.log(job, rest);

/*
============================================================
REST Operator
- Rest operator use case number 2
- collecting/gathering parameters when passing in the functions. 
============================================================
*/

// arrays
// const fruit = ['apple', 'orange', 'lemon', 'Pie'];
// const [first, second, ...fruits] = fruit;
// console.log(first, fruits);

// objects- when destructuring objects, unlike array, we need to look for proper property name, matching in order to access the property.

// objects
// const person = { name: 'john', lastName: 'smith', job: 'developer' };
// const { job, ...rest } = person;
// // console.log(job, rest);

// const testScores = [78, 84, 948, 9494, 94, 48, 48, 48];

// const getAverage = (name, ...scores) => {
//   console.log(name);
//   console.log(scores);
//   let total = 0;
//   for (const score of scores) {
//     total += score;
//   }
//   console.log(`${name}'s average score is ${total / scores.length}`);
// };
// getAverage(person.name, 78, 87, 98, 998, 9098);
// getAverage(person.name, ...testScores); //deep!

/*
============================================================
Array.of
============================================================
-Array.from and Array.of - NOT ON THE PROTOTYPE
-Array.from
-Array.of
-of creates a new Array instance from variable number of arguments.
*/

// const example = ['one', 'two', 'three'];
// // console.log(example);
// // console.log(example.map);
// // console.log(example.from);
// // console.log(example.of);
// const friends = Array.of('John', 2, true);
// console.log(friends);

/*
============================================================
Array.from - strings and arguments object
============================================================
-returns Array Object from any object with a lenght property or an iterable object.
-from turns array-like/ish[has a lenght, but not real array] into array ->(think of) string, nodeList, set. 
*/

// const udemy = 'udemy';
// console.log(Array.from(udemy));

// //mind grenade
// function countTotal() {
//   // console.log(arguments);
//   let total = Array.from(arguments).reduce(
//     (total, currNum) => (total += currNum),
//     0
//   );
//   console.log(total);
// }
// countTotal(67, 78, 88, 99, 107, 1110);

/*
============================================================
nodeList
============================================================
*/

// const p = document.querySelectorAll('p');
// const result = document.getElementById('result');
// const second = document.getElementById('second');

// // console.log(p);
// let newText = Array.from(p);
// // console.log(newText);
// newText = newText.map((item) => `<span>${item.textContent}</span>`).join(' ');

// result.innerHTML = newText;

// const text = Array.from(document.querySelectorAll('p'), (item) => {
//   return `<span>${item.textContent}</span>`;
// }).join(' ');

// second.innerHTML = text;

/*
============================================================
find, findIndex, every, some
============================================================
-find - gets specific item;
-findIndex - get's index of the item;
-every- every item in the array
-some - at least one item
*/

// const people = [
//   { id: 1, name: 'john' },
//   { id: 2, name: 'peter' },
//   { id: 3, name: 'anna' },
// ];

// // const anna = people.filter((person) => person.name == 'anna');

// // console.log(anna);
// // console.log(anna[0].name);
// // console.log(anna[0].id);

// // find
// // const anna = people.find((person) => person.name === 'anna');
// // console.log(anna);

// const person = people.findIndex((item) => item.id === 3);
// console.log(person);
// const newPeople = people.slice(0, person);
// console.log(newPeople);

// const grades = ['A', 'B', 'A', 'B', 'C'];
// const goodGrades = ['A', 'B', 'A', 'B'];
// const allGoodGrades = goodGrades.every((grade) => grade !== 'C');
// console.log(allGoodGrades);
// const oneBadGrade = grades.some((grades) => grades === 'C');
// console.log(oneBadGrade);

/*
============================================================
"for in" loop ============================================================
-This iterates over object properties
-Not advised to use it on arrays, especially if the order is important.
-on arrays, use 'for of' loop instead
*/
// const person = {
//   name: 'john',
//   age: 25,
//   status: 'student',
// };

// // console.log(person);
// for (const propertyName in person) {
//   console.log(`${propertyName}:${person[propertyName]}`);
// }

/*
============================================================
Object.keys()
============================================================
-three methods to convert objects into arrays
-Object.keys() - Converts property names into array
-Object.values() - converts property values into array
-Object.entries() converts both
*/

// const person = {
//   name: 'john',
//   age: 25,
//   status: 'student',
// };

// // keys
// const keys = Object.keys(person);
// console.log(keys);

// // values
// const keysValue = Object.values(person);
// console.log(keysValue);

// entries
// const keysValueBoth = Object.entries(person);
// // console.log(keysValueBoth);

// // map method
// const newResult = keysValueBoth.map((item) => {
//   // console.log(item);
//   const [first, second] = item;
//   // console.log(first, second);
//   return second;
// });

// // console.log(newResult);

// // for of

// for (const [first, second] of keysValueBoth) {
//   // const [first, second] = item;
//   console.log(first, second);
// }

/*
============================================================
new Set()
============================================================
stores a collection of unique values of any type
-new Set()
-add(value)
-has() - returns either true or false
-delete(value)
clear() - remove all the values
has(value)

iterators
entries(), keys(), value(), forEach()
*/

// const unique = new Set();
// const random = 'third';
// unique.add('first');
// unique.add('second');
// unique.add(random);
// unique.add('fourth');
// unique.add(4);

// // delete - returs either true or false afterwards
// const result = unique.delete('fifth');
// console.log(result);
// // clear
// // const clearAll = unique.clear();

// console.log(unique);
// // has
// const itsValue = unique.has(4);
// console.log(itsValue);

// // iterators

/*
============================================================
new Set() - accept iterable objects
============================================================
*/

// const products = [
//   {
//     title: 'high-back bench',
//     company: 'ikea',
//   },
//   {
//     title: 'albany table',
//     company: 'marcos',
//   },
//   {
//     title: 'accent chair',
//     company: 'ceressa',
//   },
//   {
//     title: 'wooden table',
//     company: 'ikea',
//   },
// ];
// console.log(products);

// // map method
// const companies = products.map((item) => item.company);
// console.log(companies);

// // set - unique companies
// const uniqueCompanies = new Set(companies);
// console.log(uniqueCompanies);
// // turn to array

// const finalCompanies = ['first', ...uniqueCompanies];
// console.log(finalCompanies);

/*
============================================================
Simplifying to one code 
============================================================
*/
// const result = ['all', ...new Set(products.map((items) => items.company))];
// console.log(result);

/*
============================================================
String includes()
- checks if string contains another string
-Applied when implementing search in web pages
============================================================
*/

// const products = [
//   { title: 'Modern Poster' },
//   { title: 'Bar Stool' },
//   { title: 'Armchair' },
//   { title: 'Leather Chair' },
// ];
// // const firstNAme = 'john';
// // const result = firstNAme.includes('j', 1);

// // const product = {
// //   title: 'Leather Chair',
// // };

// // const resalt = product.title.includes('Le');
// // console.log(resalt);

// const text = 'a';
// const filteredProducts = products.filter((product) =>
//   product.title.toLowerCase().includes(text),
// );
// console.log(filteredProducts);

/*
============================================================
Array includes()
- checks if the item is an array
-Useful ub the conditional statements
============================================================
*/

// const groceries = ['milk', 'bread', 'meat'];

// // const item = groceries.includes('milk', 1);
// // console.log(item);
// let randomItem = 'lemon';
// randomItem = 'bread';

// if (groceries.includes(randomItem)) {
//   console.log(`Yeah! it is on the list`);
// }

/*
=================================================
IMPORTANT INFORMATION
=================================================
1) Only General Overview
2) More Features Coming Up
*/
