function currentDateTime() {
  const now = new Date();                // new Date() creates a new Date object with the current date and time.  "const now" assigns that Date object to a variable called "now".

  const year = now.getFullYear();        // now.getFullYear() gets the four-digit year from the now Date object (e.g., 2025). "const year" stores that year in a variable called year.
  const month = now.getMonth() + 1;      // Get month,  In JavaScript, months are 0–11 (January = 0, December = 11), so we add 1 to make it 1–12 like a normal calendar.
  const date = now.getDate();            // Gets day of the month according to the month you are in
  const day = now.getDay() ;            
  const hours = now.getHours();          // Get hours (0–23)
  const minutes = now.getMinutes();      // Get minutes (0–59)
  const seconds = now.getSeconds();      // Get seconds (0–59)

  console.log("Current Date and Time Details:");
  console.log("Year:", year);
  console.log("Month:", month);
  console.log("Date:", date);
  console.log("Day of Week:", day);
  console.log("Hours:", hours);
  console.log("Minutes:", minutes);
  console.log("Seconds:", seconds);

  
}


currentDateTime();