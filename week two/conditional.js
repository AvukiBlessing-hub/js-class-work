//Types of control flow of statements
/*
1. Conditional statements - For decision making/If statement
  If else statement
  If else If else chain
  Nested if statement
  Switch statement
  Ternary operrator
 If statements with logical operators in conditions*?

/* 
2. Loops Iteration/repeating statements
for loop
while loop
do-while loop
 */

/* 
3. Exception handling 
Debbuging
try--catch
*/

/*
4. transfer control
return
break
continue

//EXAMPLES
*/
// let age = prompt("Please enter your age:");
//  age = Number(age);

// if (isNaN(age) ||age <0) {
//   window.alert("Enter Valid Age")
// }
// else {
//   if (age>=18){
//     ("Your an adult, you can vote")
//   }
//   else{
//  window.alert("Your underage, you cant vote")
//   }

// }

// switch(expression){
//   case value1:
//     //write code - when expression === value1
//     break;
//     case value2:
//       //write code - when expression === value2
//       break;
//       case value3:
//         //write code - when expression === value3
//         break;
//         default:
//           //write code - code of the matches
// }

// let paymentType = prompt("Enter Payment Method: (Cash, Mobile Money, Bank)")

// switch(paymentType){
//   case "Cash":
//     window.alert("Process cash payment at the counter")
//     //write code - when expression === value1
//     break;
//     case "Mobile Money":
//       window.alert("Verify your payment details ")
//       //write code - when expression === value2
//       break;
//       case "Bank":
//         window.alert("")
//         //write code - when expression === value3
//         break;
//         default:
//           window.alert("Unkown method please check again")
//           //write code - code of the matches
// }


// let product = prompt("Store in : (Wood, Furniture)")

// switch(product){
//   case "Wood":
//     window.alert("Please product type")
    
//     break;
//     case "Furniture":
//       window.alert("Please store in the Showroom ")

//       break;
//       case "Wood":
//         window.alert("Please store in the Warehouse")
  
//         break;
//         default:
//           window.alert("Unkown product please check again")        
// }


// let number = prompt("Enter number :")

// switch(true){
//   case number > 0:
//     window.alert("Number is positive")
    
//     break;
//     case number == 0:
//       window.alert("Number is zero")

//       break;
//       case number < 0:
//         window.alert("Number is negative")
  
//         break;
//         default:
//           window.alert("Please check again")
          
// }

// let stockCount = Number(prompt("Enter number of products(Wood, Furniture) that you want : "));
// console.log("typeOfStockCount: ", typeof stockCount);
// switch(true) {
//   case stockCount > 10:
//     window.alert("Product in plenty"); 
//     break;
//   case stockCount > 0 && stockCount <= 10:
//     window.alert("Low on stock");
//     break;
//   case stockCount === 0:
//     window.alert("Out of stock");
//     break;
//   default:
//     window.alert("Please check again");        
// }

 let salesStatus = prompt("Enter today's Sale comment Here"); // This could come from user input or calculations

switch (salesStatus) {
    case "excellent":
        window.alert("You exceeded your sales target!");
        break;
    case "good":
        window.alert("You met your sales target.");
        break;
    case "average":
        window.alert("You are close to the target. Keep pushing!");
        break;
    case "poor":
        window.alert("Sales are low. Consider promotions.");
        break;
    default:
        window.alert("Invalid sales status.");
};



//Assignment
//(Read about);
//DOM 


//Tenary Operator: Is 
// condition
// ? valueIfTrue
// : valueIfFlase;

// let stock = 5;
//  let message = stock>0 ? "In stock" : "Out of stock";
//  console.log(message);