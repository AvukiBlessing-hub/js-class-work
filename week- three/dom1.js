console.log(document.title)
console.log(document.body);
console.log(document.form);
console.log(document.links);


let heading = document.getElementById("heading")
heading.textContent = "WELCOME TO MAYONDO"
heading.style.color = "blue"
console.log(heading)


let first = document.getElementById("first")
first.innerHTML = "<h2>for quality furniture products</h2>"


//events
 let subHeadings = document.getElementsByTagName("h2")
 console.log(subHeadings)

 for ( let i=0; i<subHeadings.length; i++){
console.log(subHeadings[i])
 }


 let paragraph = document.getElementsByClassName("about")
console.log(paragraph.length)




 //this works exactly like css
// let thirdTitle = document.querySelector("h3") // it selects the first available element

// let thirdTitle =document.querySelector("#third_title")

// let thirdTitle =document.querySelector(".thirdTitle")// it selects the first available element with class name



let headingsArray = document.querySelectorAll("h2") //this captures everything
headingsArray[1] .className = "sub_Heading"
headingsArray[1] .id = "sub_heading";


headingsArray[1] .setAttribute("class", "container")
headingsArray[1] .setAttribute("id", "sub_heading") = "sub_heading";
headingsArray[1] .textContent = "login"
headingsArray[1] .style.background = "green" 
document.createElement()



