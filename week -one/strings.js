//strings are 4 storing text
//N.B: Strings are written in quotation marks
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"'; 
console.log(answer1);
console.log(answer2);
console.log(answer3);

//length of a string
// let sentence = "My name is Kirabo Rebecca";
// console.log(sentence);
// let length = text.length;
// console.log(length);

//escape characters 
let text = "We are the so-called \"Vikings\" from the north.";
let intro = "I\'m Kirabo Rebecca \"Becky\" from Uganda.";
console.log(text);
console.log(intro);

/*
Code	     Result
\b	         Backspace
\f	         Form Feed
\n	         New Line
\r	         Carriage Return
\t	         Horizontal Tabulator
\v	         Vertical Tabulator

*/


//Breaking long lines: Is dona after an operator.

// strings
let firstName ="Rebecca";
let lastName ="Kirabo";
let fullName ="firstName + lastName";
console.log(firstName,lastName,fullName);

// long literal strings
//multiLine/long literal string 
let longtext ="this is a long string that can span multiple lines"
console.log(longtext);

let multiLine = `This is a long string
that spans multiple lines
without needing concatenation.`;
console.log(multiLine);

//escape squares in strings
let Text ="firstLine\nsecondLine";
let quote ="he said \"hello\"";
let path ="a\\ users\\Becky";
console.log(text);
console.log(quote);
console.log(path);

//template strings (literials)
//string interpolation
// let fname = "Rebecca";
// let herAge = 20;
// let greeting = Hello, her name is ${fname} and she is ${herAge} years old.;
// console.log(greeting)

let poem = `Roses are red,
            Violets are blue,
            JavaScript is fun,
            And so are you!`;
console.log(poem);


// Common string methods
let textTwo = "Hello, JavaScript!";
console.log(text.toUpperCase());      
console.log(text.toLowerCase());      
console.log(text.slice(0, 5));        
console.log(text.replace("JavaScript", "World")); 
console.log(text.includes("Java"));   
console.log(text.length);            

//string datatype (casting)
let number = 42;
let boolean = true;

// Casting to string
let str1 = String(number);       
let str2 = number.toString();    
let str3 = boolean + "";         
console.log(str1);               
console.log(str2);               
console.log(str3);               
console.log(typeof str1);        

//embeded expressions
// let price = 2000;
// let quatity =3000;
// let total = the total cost is ${price*quatity};
// console.log(total);

//let userName = "Becky 321"
// let userlink =
//     "https://i.pinimg.com/736x/73/9f/57/739f57a2ffd586a314d468dfe04850be.jpg"
// let numberoflikes = 50;
// let date = 12 / 7 / 2025;

// let post = `<div class ="card">
// <h1> ${name}</h1>
// <img src ="${userlink}"alt ="image"
// <button> ${numberoflikes}like</button>
// </div>`

// document.body.innerHTML = post;