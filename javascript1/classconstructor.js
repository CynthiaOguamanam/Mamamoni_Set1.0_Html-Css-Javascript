/*
JavaScript Classes
A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword class, and the properties are assigned inside a constructor() method:

//constructor: A special method for creating and initializing objects created within a class



Note: From the example above; The super() method refers to the parent class. By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.

*/

// Example
// Create a Car class, and then create an object called "mycar" based on the Car class:

// class Car {  // Create a class
//   constructor(brand) {  // Class constructor
//     this.carName = brand;  // Class body/properties
//   }
// }
// myCar = new Car("Ford");  // Create an object of Car class
// document.getElementById("demo").innerHTML = "My car is a " + myCar.carName;

//keywords., extends, super etc::

// class Car {
//   constructor(brand) {
//     this.carname = brand;
//   }
//   present() {
//     return 'I have a ' + this.carname;
//   }
// }

// class Model extends Car {
//   constructor(brand, mod) {
//     super(brand);
//     this.model = mod;
//   }
//   show() {
//     return this.present() + ', it is a ' + this.model;
//   }
// }

// mycar = new Model("Ford", "Mustang");
// document.getElementById("demo").innerHTML = mycar.show();






/*
RegExp Object
A regular expression is a pattern of characters.

The pattern is used to do pattern-matching "search-and-replace" functions on text.

In JavaScript, a RegExp Object is a pattern with Properties and Methods.
Syntax
/pattern/modifier(s);

*/
let text = prompt("search for anything in relation to the set search pattern");
let pattern = /w3schools/i;
let result = text.match(pattern);
//match(): Matches a string or an object that supports being matched against, and returns an array containing the results of that search, or null if no matches are found.

document.getElementById("demo").innerHTML = result;

