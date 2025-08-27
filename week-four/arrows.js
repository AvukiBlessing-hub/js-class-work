//  1. Arrow Functions and this Binding
// ES5 (Normal Functions)
function sayHello(name) {
  console.log("Hello " + name);
}
sayHello("Joan"); // Hello Joan


// Regular functions have their own this context depending on how they are called.

// Common issue: losing the correct this inside callbacks.

function Person(name) {
  this.name = name;
  setTimeout(function() {
    console.log("Hi, I am " + this.name);
  }, 1000);
}

new Person("Alice"); 
// Output: Hi, I am undefined  
// Because this inside setTimeout refers to global (or undefined in strict mode).

// ES6 (Arrow Functions)
const sayHello = (name) => {
  console.log`(Hello ${name})`;
};
sayHello("Joan"); // Hello Joan


// Arrow functions don’t create their own this.

// They inherit this from the enclosing scope (lexical scoping).

function Person(name) {
  this.name = name;
  setTimeout(() => {
    console.log("Hi, I am " + this.name);
  }, 1000);
}

new Person("Alice");
// Output: Hi, I am Alice 


//  Use arrow functions for callbacks when you want to preserve this.

//  2. Template Literals

// ES5 way (string concatenation):

var name = "Joan";
var age = 25;
console.log("My name is " + name + " and I am " + age + " years old.");


//ES6 way (template literals with backticks ``):

let name = "Joan";
let age = 25;
console.log`(My name is ${name} and I am ${age} years old.)`;


// Benefits:

// Cleaner string building.

// Supports multiline strings:

console.log(`This is
a multiline
string.`);

//  3. Default Parameters

// ES5 way (manual check):

function greet(name) {
  name = name || "Guest"; // if no argument, use "Guest"
  console.log("Hello " + name);
}
greet(); // Hello Guest


//ES6 way (built-in default):

function greet(name = "Guest") {
  console.log`(Hello ${name})`;
}
greet();      // Hello Guest
greet("Joan"); // Hello Joan


//  Cleaner and avoids bugs when passing falsy values like 0 or "".

//  4. ES6 Classes vs ES5 Constructor Functions
// ES5 Constructor Functions
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function() {
  console.log(this.name + " makes a sound.");
};

var dog = new Animal("Dog");
dog.speak(); // Dog makes a sound.


// Uses constructor functions.

// Methods are defined on prototype.

// Inheritance done via Object.create or prototype chaining.

// ES6 Classes
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log`(${this.name} makes a sound.)`;
  }
}

const dog = new Animal("Dog");
dog.speak(); // Dog makes a sound.


// Uses class keyword (syntactic sugar over prototypes).

// Looks like traditional OOP (Java, C#, etc).

// Supports extends for inheritance and super for parent calls.

class Dog extends Animal {
  speak() {
    console.log`(${this.name} barks.)`;
  }
}

const d = new Dog("Rex");
d.speak(); // Rex barks.


//summery

// ES5: Constructor + prototype methods (harder to read).

// ES6: class, constructor, extends, super (cleaner, modern OOP style).

//  Quick Recap

// Arrow functions → shorter syntax, fix this binding issues.

// Template literals → cleaner strings, multiline, embedded expressions.

// Default parameters → easier handling of optional arguments.

// ES6 classes → modern OOP style, cleaner than ES5 constructors.

// Would you like me to combine all these features into one mini class example (e.g., a User or Employee class that uses arrow functions, template literals, and default parameters) so you see them working together in a real-world style?

// ChatGPT can make mistakes. Check importan