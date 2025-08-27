// Skip to content
// Chat history

// You said:
//  Functional programming principles- Higher-order functions- Closures and scope- Constructor functions vs factory functions
// lastly
// ChatGPT said:
// Perfect  Let’s wrap this up nicely with the last part of your JavaScript concepts series.

//  Functional Programming Principles in JavaScript
// Functional programming (FP) is a programming paradigm where functions are treated as first-class citizens. Instead of focusing on how to perform tasks (step-by-step), FP focuses on what should be done using pure functions, immutability, and composition.

// Key Principles:
// Pure Functions

// A pure function always returns the same output for the same input and has no side effects.

function add(a, b) {
  return a + b;  // pure, no outside changes
}
//Non-pure example:

let count = 0;
function increase() {
  count++; // modifies external state → side effect
}
Immutability

//Data should not be changed directly; instead, create new copies.

const arr = [1, 2, 3];
const newArr = [...arr, 4]; // does not mutate arr
//Function Composition

//Build complex functionality by combining smaller functions.

const double = x => x * 2;
const square = x => x * x;

const doubleAndSquare = x => square(double(x));
console.log(doubleAndSquare(3)); // 36
// Higher-Order Functions (HOFs)
//A higher-order function is a function that either:

//Takes another function as an argument, OR

//Returns another function.

// They’re the backbone of functional programming.

Examples:

//Array methods (map, filter, reduce) are HOFs:

const nums = [1, 2, 3, 4];
const doubled = nums.map(n => n * 2); // map takes a function
console.log(doubled); // [2, 4, 6, 8]
//Returning functions:

function multiplier(factor) {
  return function(num) {
    return num * factor;
  };
}
const duble = multiplier(2);
console.log(double(5)); // 10
//  Closures and Scope
// Scope
// Scope defines where variables are accessible.

// Global Scope: variables available everywhere.

// Function Scope: variables inside a function are not accessible outside.

// Block Scope (let, const): variables only exist inside {}.

// Closures
// A closure is created when a function “remembers” its surrounding variables, even after the outer function has finished running.

Example:

function outer() {
  let counter = 0;
  return function inner() {
    counter++;
    return counter;
  };
}

const increment = outer(); 
console.log(increment()); // 1
console.log(increment()); // 2
// Here, inner() keeps access to counter even though outer() has already executed.

// Closures are useful for:

// Data privacy

// Maintaining state without global variables

//  Constructor Functions vs Factory Functions
// Both are patterns for creating objects in JavaScript.

//1. Constructor Functions
//Use function keyword + new operator.

//By convention, constructors start with a capital letter.

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const john = new Person("John", 25);
console.log(john.name); // John
//2. Factory Functions
//A function that returns a new object (no new keyword needed).

function createPerson(name, age) {
  return {
    name,
    age,
    greet() {
      console.log`(Hi, I'm ${name})`;
    }
  };
}

const mary = createPerson("Mary", 30);
mary.greet(); // Hi, I'm Mary
Differences
// Feature	Constructor	Factory
// Keyword	Uses new	Just a function call
// this	Relies on this binding	No this, just return object
// Inheritance	Prototype-based	Manual (object composition)
// Flexibility	Less flexible	More customizable
//  So in summary:

// Functional programming makes code clean, predictable, and testable.

// Higher-order functions allow reusability and abstraction.

// Closures give private variables and maintain state.

// Constructor vs Factory → two different patterns for object creation.

// Would you like me to prepare a mini project example that combines all four concepts (FP principles, HOFs, closures, and factory/constructor functions) in one?



// No file chosenNo file chosen
// ChatGPT can make mistakes. Check important info.





// hig order functio