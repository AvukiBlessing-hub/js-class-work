// //write a fuction
// function functionName() {
//     //write any code here
//     //return
//     //console.log
// }

// //call the function to do its work
// functionName()

// function functionName(parameter) {
//     //write any code here
//     //return
//     //console.log
// }
// functionName(arguments)

// function addTwoNumbers() {
// let x = 1;
// let y = 3;
// let sum = x+y;
// console.log(sum);
// return sum
// }

// console.log(addTwoNumbers())
// function addTwoNumbers(x,y) {
//     let sum = x+y;
//     return sum;
// }
// console.log(addTwoNumbers(7,7))
// console.log(addTwoNumbers(7,9))
// console.log(addTwoNumbers(7,5))

// //write a function to square any number
// function squareAnyNumber(x) {
//     return x*x;
// }
// console.log(squareAnyNumber(2));
// console.log(squareAnyNumber(3));
// console.log(squareAnyNumber(4));
// console.log(squareAnyNumber(5));

//calculating total cost
// function calculateTotalCost(quantity,unitPrice) {
//  const transportFee = 5000
// let subTotalCost = quantity * unitPrice 
// let total = subTotalCost + transportFee
// return total
// }
// console.log(calculateTotalCost(2,350000));



// let totalBeforeVat = calculateTotalCost(2,350000);
// function calculatePriceAfterTax(total){
//     const vat = 0.18
//     let vatFee = total * vat
//     let priceAfterTax = total - vatFee
//     return {priceAfterTax, vatFee};
// }
// console.log(calculatePriceAfterTax(totalBeforeVat))

//Functions with strings

// function printFullName(){
//  let firstName = "Rebecca";
// let lastName = "Kirabo";
// let space = " "
// let fullName = firstName + space +  lastName
// return fullName
// }
// console.log(printFullName())

// //fuctions with arrays
// let actions = [function greet(){
//     console.log('hello')
// },
// function calculate(){
//     console.log(1 + 1)
// },
// function thankYou(){
//     console.log('thank you for using our system')
// }]

// actions[0]();
// actions[1]();
// actions[2]();
// console.log(actions)

// let unitPrice
// let quantity
// let address
// let productName
// let transportFee
// let vatFee
// let paymentMethod
// let calculateSubTotal
// let calculateUnitPrice


// let order = {
//     unitPrice: 500000,
//     quantity: 3,
//     calculateSubTotal: function(){
//         return this.unitPrice * this.quantity
//     }
// }
// order.unitPrice
// order.quantity
// order.calculateSubTotal()

// let car = {
//     name: "rangerover",
//     weight: 1000,
//     start: function(){
//         return 'vroom'
//     }
// }

// car.name
// car.weight
// car.start()

// console.log(car.name + car.weight)

// let firstName = "Maranatha"

// let ben ={
//     weight: 49,
//     age: 20,
//     firstName: "Benjamin",
//     walk: function(){
//         return this.firstName + ' is walking'
//     }
// }
// console.log(ben.walk())
// console.log(this)

//why is it not good to use arrow functions in object method definations?
const userthree = {
    name: "Becky",
    greet: ()=>{
        console.log(`Hello, my name is ${this.name}`)
    }
};

// let martin ={
//     weight: 49,
//     age: 20,
//     firstName: "Martin",
//     walk: function(){
//         return this.firstName + ' is walking'
//     }
// }
// console.log(martin.walk())

//no.1 model a phone object 
//with properties;color,size,type
//with methods;take picture, play music, ring
//create 2 phone objects sumsang and iphone
//display the properties of the phone objects
//call the different methods of the phone objects


//no.2 model a user object 
//with properties;email, username, gender
//with methods;login, logout
//create 2 user objects Bob, Alice
//display the properties of the user objects
//call the different methods of the user objects

//answers
//no.2
// let Bob = {
//     email: "bob@gmail.com",
//     username: "bob1",
//     gender: "male",
//     login: function(){
//         return this.username + " Has logged in!";
//     },
//     logout: function(){
//         return this.username + " Has logged out!";
//     }
// }
// console.log(Bob.login());
// console.log(Bob.logout());

// let Alice = {
//     email: "alice@gmail.com",
//     username: "alice1",
//     gender: "female",
//     login: function(){
//         return this.username + " Has logged in!";
//     },
//     logout: function(){
//         return this.username + " Has logged out"
//     }    
//     }
// console.log(Alice.login());
// console.log(Alice.logout());

// //no.1
// let phoneOne = {
//     color: "black",
//     size: "large",
//     type: "s24",
//     takePicture:()=>{
//         return this.type + "  1 + 2 + 3 + snap"
//     },
//     playMusic: function(){
//         return ` playing music`
//     },
//     ring: function(){
//         return ${this.type} ringing
//     }
// }
// console.log(phoneOne.playMusic());
// console.log(phoneOne.takePicture());
// console.log(phoneOne.ring());

// let phoneTwo = {
//      color: "white",
//     size: "large",
//     type: "16promax",
//     takePicture: function(){
//         return this.type + "  1 + 2 + snap"
//     },
//     playMusic: function(){
//         return this.type + " play + pause"
//     },
//     ring: function(){
//         return this.type + " sound"
//     }
// }
// console.log(iphone.takePicture());
// console.log(iphone.playMusic());
// console.log(iphone.ring());


// function createPhone(color, size, type){
//     return{
//         color: color,
//         size: size,
//         type: type,
    
//         takePicture: function(){
//             return this.type + "  1 + 2 + snap"
//         },
//         playMusic: function(){
//             return this.type + " play + pause"
//         },
//         ring: function(){
//             return this.type + " sound"
//         }
//     }
// }


// let phoneOne = createPhone("black", "large", "s24");
// let phoneTwo = createPhone("white", "large", "16promax");

// console.log("phoneOne:", phoneOne);
// console.log(phoneOne.takePicture());
// console.log(phoneOne.playMusic());
// console.log(phoneOne.ring());

// console.log("phoneTwo:", phoneTwo);
// console.log(phoneTwo.takePicture());
// console.log(phoneTwo.ring());
// console.log(phoneTwo.playMusic());



//no.1 Create a function to create a user object 
//no.2 Create three users using the function
//no.3 Logout the properties of each user object
//no.4 Call the methods of each user object


// function addUser(userName, email, gender){
//     return{
//         userName: userName,
//         email: email,
//          gender: gender,
    
//         login: function(){
//             return this.userName + "  is Loggedin!"
//         },
//         logout: function(){
//             return this.userName + " is Logged out!"   
//     }
// }
// }
// let userOne = addUser("Ben1", "ben@gmail.com", "male");
// let userTwo = addUser("Isaac1", "isaac@gmail.com", "male");
// let userThree = addUser("Joy1", "joy@gmail.com", "female");

// console.log("userOne:", userOne);
// console.log(userOne.login());
// console.log(userOne.logout());
// console.log(userOne.userName, email, gender);


// console.log("userTwo:", userTwo);
// console.log(userTwo.login());
// console.log(userTwo.logout());
//console.log(UserTwo.userName, email, gender);

// console.log("userThree:", userThree);
// console.log(userThree.login());
// console.log(userThree.logout());
//console.log(userThree.userName, email, gender);

//no.1 Findout the differences between function declarations and function expressions.
//no.2 What are the limmitations of using function expressions over function declarations.
//no.3 Advantage of using function expressions over function declarations.

//Answers
// Function Declaration: Is a method of defining a named function.
// Defined with the function keyword followed by a name. 
// They are hoisted, meaning the entire function is loaded into memory during the compilation phase, 
// so you can call the function before its definition in the code.

//Function declarations are better when you want always-available, reusable functions.

function calculatePriceAfterTax(price) {
  const taxRate = 0.18; // 18% tax
  return price + (price * taxRate);
}

let chairPrice = calculatePriceAfterTax(150000);
let tablePrice = calculatePriceAfterTax(300000);

console.log("Chair Price (with tax): " + chairPrice);
console.log("Table Price (with tax): " + tablePrice);


// Function Expression:
//  A function assigned to a variable, which can be anonymous (without a name). 
// These are not hoisted; (You must define them before calling, otherwise you get an error.)
//  the function is created only when the execution reaches that line, 
// so you cannot call it before the definition.

const giveDiscount = function(amount, discountRate) {
  return amount - (amount * discountRate);
};

//Function expressions are better when you want flexibility,
//  scope control, anonymity, and clear execution order.