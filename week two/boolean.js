//Comparisons Operators
let x = 5;
(x == 8);
(x != 8);
console.log(x == 8);
console.log(x != 8);


let numOne = 10;
let numTwo =5;
let isGreaterThan = numOne > numTwo;
console.log(isGreaterThan);

// let condition = true;
// if (condition){
//   console.log('This condition is True')
// }

 // Logic Operator
let age = 20;
let hasID = true;

// Check if the person can buy alcohol
let canBuyAlcohol = (age >= 18) && hasID;

// Output the result
if (canBuyAlcohol) {
  console.log("You are allowed to buy alcohol.");
} else {
  console.log("Sorry, you are NOT allowed to buy alcohol.");
}
  

// Ternary Operators

// let age = 20;
// let hasID = true;

// // Use ternary operator to decide the message
// let message = (age >= 18 && hasID)
//   ? "You are allowed to buy alcohol."
//   : "Sorry, you are NOT allowed to buy alcohol.";

// console.log(message);

// //conditions
// //if
// const isLoggedIn = true;

// if (isLoggedIn) {
//   console.log("Welcome back!");
// }

// //if else
//     const isHungry = false;

// if (isHungry) {
//   console.log("Let's eat!");
// } else {
//   console.log("Not hungry right now.");
// }


// let totalPrice = 100000; // example price
// let transportProvided = true; // set to true if company provides transport

// // Check if transport is provided
// if (transportProvided) {
//    totalPrice = totalPrice + totalPrice * 0.05;  // add 5%  
// }

// console.log("Final Price: " + totalPrice);



//loops
//for loop
let text = " "
for (let i = 0; i < 5; i++) {
  text += "Number" + i + "\n"; //"\n" means a new line
}
console.log(text);

//for in loop
//for in over Arrays (for in is meant for objects not arrays)
const fruits = ["apple", "banana", "mango"];
//index will be 0, 1, 2- the index keys of an array
for (let index in fruits) {
  console.log(index, fruits[index]);
}

let products


// //while loop
// //0 is less than 7 and it is true therefore the loop will continue , however if it is false, the loop will be cut 
// // let k= 0;
// // while(i<7) {
// //      console.log(k);
// //      k++;
// // }
  
// //do while loop
// let i = 1;
// do {
// console.log(i);
// i++;
// }while(i<=5);