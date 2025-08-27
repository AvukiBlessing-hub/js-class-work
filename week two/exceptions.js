// Exception handling
/**
 * debuhhing
 * try-catch
 * 
 */
//  1. What is an Exception?
// An exception is an error or unexpected situation that occurs while a program is running, which disrupts the normal flow of execution.



let num = 10;
console.log(num.toUpperCase()); //  Error: num.toUpperCase is not a function
//Here, JavaScript throws an exception because you tried to call a string method on a number.

// 2. Types of Errors (Exceptions) in JS
// JavaScript has built-in error objects that represent different exceptions:

SyntaxError
//Happens when code has invalid syntax.

eval("let = = 5"); //  SyntaxError
ReferenceError
//Happens when a variable that doesn’t exist is accessed.

console.log(x); //  ReferenceError: x is not defined
TypeError
//Happens when a value is not of the expected type.

let n = 5;
n.toUpperCase(); //  TypeError
RangeError
//Happens when a number is outside the allowed range.

let arr = new Array(-5); //  RangeError
URIError
//Happens when encodeURI() or decodeURI() are used incorrectly.

decodeURI("%"); //  URIError
//EvalError (rarely used)
//Related to the eval() function.

// 3. Handling Exceptions
//JavaScript uses try...catch...finally to handle exceptions.


try {
  let result = 10 / 0;
  console.log(result); // Infinity, not an error

  let x = y + 5; //  ReferenceError
} catch (error) {
  console.log("An error occurred:", error.message);
}
Output:

// An error occurred: y is not defined
//  Using finally
// finally always runs, whether there is an error or not.

try {
  let num = 5;
  console.log(num.toUpperCase()); //  Error
} catch (error) {
  console.log("Caught an error:", error.message);
} finally {
  console.log("This will always run.");
}
Output:

// Caught an error: num.toUpperCase is not a function
// This will always run.
// 🔹 4. Throwing Custom Exceptions
// You can create your own exceptions using the throw keyword.

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.log("Custom Error:", error.message);
}
//  5. Best Practices
// Always catch specific errors when possible.

// Don’t use exceptions for normal logic flow.

// Provide clear error messages for debugging.

// Create custom error classes if needed.

Example:

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function registerUser(username) {
  if (!username) throw new ValidationError("Username is required");
}

try {
  registerUser("");
} catch (error) {
  console.log(error.name + ": " + error.message);
}
 Summary

// Exception = error at runtime.

// Use try...catch...finally to handle them.

// Use throw to create your own errors.

// Built-in error types: ReferenceError, TypeError, RangeError, etc.

// You can even make custom error classes for better handling.

// Would you like me to also make you a real-world project example (like a login form with exception handling) so you see how exceptions are used in practice?