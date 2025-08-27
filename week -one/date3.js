// 1. Create a Date object for the current date and time
const now = new Date();

// 2. Get full year
const year = now.getFullYear(); // e.g. 2025

// 3. Get month (0 = January, 11 = December)
const month = now.getMonth(); // Add +1 if you want 1–12 format

// 4. Get day of the month
const date = now.getDate(); // e.g. 1 to 31

// 5. Get day of the week (0 = Sunday, 6 = Saturday)
const day = now.getDay(); // e.g. 0 to 6

// 6. Get hours (0 to 23)
const hours = now.getHours();

// 7. Get minutes (0 to 59)
const minutes = now.getMinutes();

// 8. Get seconds (0 to 59)
const seconds = now.getSeconds();

// 9. Print everything
console.log("Current Date and Time Details:");
console.log("Year:", year);
console.log("Month:", month + 1); // +1 to show January as 1
console.log("Date:", date);
console.log("Day of Week:", day);
console.log("Hours:", hours);
console.log("Minutes:", minutes);
console.log("Seconds:", seconds);