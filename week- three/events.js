// what are events is a triggered action by a user or browser which can result into signals, notifications e.t.c

//keywords used in events
//1.event listening :click = (buttons are always watching/ listening to an event )
//2.event handling : is that  function that happens after listening

// let button = document.getElementById("click");// is for selecting a button

// button. addEventListener("click", function(){  //this line is for adding a function to the button
//     window.alert("you have clicked a button")
// })

// button. addEventListener("click",()=>
//     window.alert("you have clicked a button"))


const form = document.getElementById("orderform");
const furniture = document.getElementById("furniture");
const customer = document.getElementById("customer");

const total = document.getElementById("total");
const calcBtn = document.getElementById("calcBtn");

function updateTotal(){
    const price = Number(document.getElementById("price").value);
    const quantity = Number (document.getElementById("quantity").value);
    let cost =price * quantity;
    // cost.toLocaleString();
    total. textContent = `Total: UGX"  ${cost.toLocaleString()}`;
    
}


 quantity.addEventListener("input", updateTotal)
  price.addEventListener("input", updateTotal)



  

