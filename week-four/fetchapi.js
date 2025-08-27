//  1. Fetch API (GET & POST Requests)
// GET Request

// Fetch is a modern replacement for XMLHttpRequest (XHR).

// Simple GET
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json()) // parse JSON
  .then(data => {
    console.log("Fetched data:", data);
  })
  .catch(error => console.error("Error:", error));


// Returns a Promise.
// response.json() parses the response body into a JavaScript object.

// POST Request

//Sending data to the server.

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'Hello World',
    body: 'This is my first post',
    userId: 1
  })
})
.then(response => response.json())
.then(data => {
  console.log("New post created:", data);
})
.catch(error => console.error("Error:", error));


//  headers ensure the server knows we’re sending JSON.
//  body must be a stringified JSON object.

//  2. Working with JSON Data

// JSON = JavaScript Object Notation → lightweight data format used in APIs.

// Convert JS Object → JSON
const user = { name: "Joan", age: 25 };
const jsonStr = JSON.stringify(user);
console.log(jsonStr); // {"name":"Joan","age":25}

// Convert JSON → JS Object
const jsonString = '{"name":"Joan","age":25}';
const obj = JSON.parse(jsonString);
console.log(obj.name); // Joan


// Always JSON.parse() response bodies when working with APIs.

//  3. Web Storage (localStorage & sessionStorage)

// Both store key-value pairs as strings in the browser.

// localStorage

// Persists even after closing the browser.

// Save
localStorage.setItem("username", "Joan");

// Get
console.log(localStorage.getItem("username")); // Joan

// Remove
localStorage.removeItem("username");

// Clear all
localStorage.clear();

sessionStorage

// Cleared when the tab/browser is closed.

sessionStorage.setItem("theme", "dark");
console.log(sessionStorage.getItem("theme")); // dark


//  Great for saving user preferences, temporary data, or caching.

//  4. Combining Async Code with DOM Updates

// Let’s say we fetch data from an API and display it inside the page dynamically.

<div id="posts"></div>


async function loadPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
    const posts = await response.json();

    const container = document.getElementById('posts');
    container.innerHTML = ""; // Clear old content

    posts.forEach(post => {
      const div = document.createElement("div");
      div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
      `;
      container.appendChild(div);
    });
  } catch (error) {
    console.error("Error loading posts:", error);
  }
}

loadPosts();



// async/await makes async code look synchronous.
//  Data fetched from API updates the DOM in real time.

//  Quick Recap

// Fetch API → modern way to do GET/POST requests.

// JSON → use JSON.stringify() (object → string) and JSON.parse() (string → object).

// Web Storage → localStorage (permanent) vs sessionStorage (temporary).

// Async + DOM → fetch data, parse JSON, dynamically update webpage.

// Would you like me to combine all of these into one mini project (e.g., a "Notes App" that fetches sample notes, lets you add new ones via POST, and stores them in localStorage)?

// ChatGPT can make mistakes. Check important inf