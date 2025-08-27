//for loop: fixed repitons, loop through
//Sytax
// for (initialization; condition; increment/decrement) {
//   // code to run in each loop iteration
// } 

 let text = " "
for (let i = 0; i < 5; i++) {
  text += "Number" + i + "\n"; //"\n" means a new line
}
console.log(text);

for (let i = 0; i < 5; i++) {
    console.log(i)
};

//for, for---of, for---in, forEach(), while, do while

// products = ["chair", "table", "cupboard", "sofa"]
// for(i = 0; i < products.length; i++) {
//     console.log(` ${i + 1} : ${products[i]}`)
// }

//while loop
/*
syntax
while (condition) {
code to run as conditon is true
}
*/

let stock = 70;
while (stock>0) {
    console.log(`Selling item -- Stock left ${stock}`);
    stock--;
}

//do while
// syntax
// do {
//   // code to run at least once
// } while (condition);

// let order
// let totalStock = 1000;
// do {
// order = prompt(Enter order (Availabe stock) is ${totalStock})
// } while (order > totalStock);

//     window.alert("Your order has been recieved");

// let payment;
// let totalDue = 150000;
// do {
// payment = Number(prompt(Enter payment (Total UGX) is : ${totalStock}));
// } while (payment > totalDue);

//     window.alert('Your payment has been recieved');

let x = 0;
do {
    console.log(x);
    x++;
}
while (x <= 5);

//we r goin' 2 create buttons that can run for loop, while loop when clicked

//when looping through an array, use for--of loop
const itemSold = ["chair", "closet", "sofa"];
for(const item of itemSold) {
    console.log(`Sold : ${item}`)
};

//in Objects use for--in loop
const sale = {
    customer: "Lincy",
    product: "Closet",
    quantity: 2,
    price: 30000,
}
for(const key in sale) {
    console.log(`${key} : ${sale[key]}`)
};