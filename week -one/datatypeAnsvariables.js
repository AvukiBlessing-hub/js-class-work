/*
Data types
Primitive data types-hold single values
1. numbers(integers,big integers)
2. strings/text
3. booleans(true/false)
4. undefined data types
5. null(let x=null)
6. symbol(for uniqueness)

Non-primitive data types
1. Array(is a list of items)
[numbers]
[words
["strings"]

2. Objects
productdescription{name:"sofa"
price:"1000"
color:"cream"
}
3. Date
4. Function

*/

let productlist = ["sofa","tables"]
console.log(productlist)

let productname = "timber"//we put strings in quotes
typeof(productname)
console.log(typeof(productname))
let productcost = 3500
 //we need to rewrite when changing the value e.g (let productcost = 4000) meaning it is immutable
let transportisneeded = true
let tablecolor = null
let discount = null
console.log(productcost * 2)

let diningtableobject = {
 productnametwo:"dining table",
 quantity:2,
 price:350000,
 totalcost:quantity* price,

}

console.log(totalcost)

let paymenttype = "cash"
const VAT = 0.05
const PIE = 3.14