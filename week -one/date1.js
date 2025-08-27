//date object
function dateObject() {
  const now = new Date(); 
  return now;
}


// Time object
function timeObject() {
  const now = new Date();
  return {
    hours: now.getHours(),
    minutes: now.getMinutes(),
    seconds: now.getSeconds(),
  };
}

// full year and time
function fullYear() {
  const now = new Date();

  const year = now.getFullYear(); 
  const month = now.getMonth() + 1; 
  const date = now.getDate(); 
  const day = now.getDay(); 
  const hours = now.getHours(); 
  const minutes = now.getMinutes();
  const seconds = now.getSeconds(); 

  return {
    year,
    month,
    date,
    day,
    hours,
    minutes,
    seconds,
  };
}



console.log(dateObject());
console.log(timeObject());
console.log(fullYear());