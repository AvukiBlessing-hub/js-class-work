// Create a Date object (current date and time)
const date = new Date();

// Extract parts from the Date object
const year = date.getFullYear();      // Year (e.g., 2025)
const month = date.getMonth() + 1;    // Month (0-11) so add 1 (e.g., 8 for August)
const day = date.getDate();           // Day of the month (1-31)

const hours = date.getHours();        // Hours (0-23)
const minutes = date.getMinutes();    // Minutes (0-59)
const seconds = date.getSeconds();    // Seconds (0-59)

// Format time as HH:MM:SS (pad with zeros if needed)
const time = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

// Output all values
console.log("Date object:", date);
console.log("Year:", year);
console.log("Month:", month);
console.log("Day:", day);
console.log("Hours:", hours);
console.log("Minutes:", minutes);
console.log("Seconds:", seconds);
console.log("Time string:", time);

