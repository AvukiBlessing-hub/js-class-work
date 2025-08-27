//without asychoronous
function getData() {
    // Simulate a slow task (like downloading data)
    let start = Date.now();
    while (Date.now() - start < 3000) {
        // Wait for 3 seconds (blocking)
    }
    return "Data received!";
}

console.log("1. Start");
console.log(getData());   // This blocks everything for 3 seconds
console.log("3. End");

//with asynchoronous

// Simulating a slow task using async
function getDataAsync() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Data received!");
        }, 3000); // wait 3 seconds, but non-blocking
    });
}

async function run() {
    console.log("1. Start");

    let data = await getDataAsync();  // waits for data, but doesn't freeze program
    console.log(data);

    console.log("3. End");
}

run();

