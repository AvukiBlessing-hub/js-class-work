//extra large numbers are written in scientific notation
let x = 123e5;
console.log(x);

//numeric strings
//division
let a = "100";
let b = "10"
let c = a/b;
console.log(c);

let k = "100";
let l = "10"
let m = k+l;
console.log(m);

//NaN (Not A Number)
let q = 100 / "apple";
 console.log(q);

 //math objects
//  Math.E
//  Math.PI
//  Math.SQRT2
//  Math.SQRT1_2
//  Math.LN2

//Math methods
// Math round
Math.round(4.6);
console.log(Math.round(4.6));

//Math.ceil
Math.ceil(5.6);
console.log(Math.ceil(5.6));

//Math.floor
Math.floor(4.3);
console.log(Math.floor(4.3));


//Date and Time
let myBirthday = new Date("2005-06-11");
console.log(`My Birthday is ${myBirthday}`);

let Birthday = new Date(2005, 6, 11);
console.log(`My Birthday is ${Birthday} + 1`);

// let sale = {
//     customer: Becky,
//     quantity: 2,
//     product: sofa,
//     amount: 500,
//     dateOfSale: newDate(),
// }
// console.log(sale);

//Arithmetic Operators
//Increament operators and decreasement operators
let j = 5;
j++;

let r = 6;
r--;

console.log(j);
console.log(r);

let stalkQuantity = 20;
stalkQuantity--;
console.log(`Stalk left is ${stalkQuantity}`);

let productSold = 0;
productSold++;
console.log(`Total product sold today ${productSold}`);

//or message method
// let message = Total product sold today ${productSold};
//console.log(message)

function recordProducts(){
    productSold++;
console.log(`Total product sold today ${productSold}`);
}

//how to convert increament to assignments 
let stalkQuantityTwo = 30;
// stalkQuantityTwo--; (this is for only one)
//how to write assignments 
stalkQuantityTwo -= 2;
console.log(`Stock sold ${stalkQuantityTwo}`);


let payment = 500;
let price = 500;
let quantity = 20;
if (payment>=price && quantity>=20) {
    console.log("Sale approved")
    console.log("Discount applied")
}
else {
    console.log("Cannot  process sale")
    console.log("No discount is applied")
}