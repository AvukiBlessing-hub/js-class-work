//Objects
let person = {
  name: "Joan",
  age: 40,

  getDetails: function() {
    return `${this.name} is ${this.age} years old.`;
  }
};

console.log(person.getDetails()); 


// USIND CLOSURES
function createBankAccount(initialBalance) {
  let balance = initialBalance;  // private variable

  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      if (amount <= balance) {
        balance -= amount;
        return balance;
      } else {
        return "Insufficient funds!";
      }
    },
    getBalance() {
      return balance;  // controlled access
    }
  };
}

const account = createBankAccount(100);
console.log(account.getBalance());  // 100
console.log(account.deposit(50));   // 150
console.log(account.withdraw(200)); // "Insufficient funds!"


// USING CLASSES
class Car {
  // private field (starts with #)
  #engineStatus = false;

  constructor(brand) {
    this.brand = brand;
  }

  startEngine() {
    this.#engineStatus = true;
    console.log(`${this.brand} engine started`);
  }

  stopEngine() {
    this.#engineStatus = false;
    console.log(`${this.brand} engine stopped`);
  }

  isEngineRunning() {
    return this.#engineStatus;
  }
}

let car = new Car("Toyota");
car.startEngine();               // Toyota engine started
console.log(car.isEngineRunning()); // true

//  Direct access not allowed
// console.log(car.#engineStatus); // Error



//Syntactic sugar( classes in js)


let userNames = {
     firstName:"Joan",
     secondName:  "Adoc"

}
class Person{
// code goes here
}
const person1 = new Person()
console.log(person1)