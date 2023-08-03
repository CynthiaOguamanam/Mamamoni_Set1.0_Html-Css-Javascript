/*1.LOCAL STORAGE
The localStorage object allows you to save key/value pairs in the browser.
Local storage is a form of web storage that stores data for a long time. This could be a day, a week, or even a year. This depends upon the developer’s preference. It is important to note that local storage only stores strings so, if you wish to store objects, lists, or arrays, you must convert them into a string using JSON.stringify().
Local storage can help in storing temporary data before it is pushed to the server. It is important to clear the local storage once this operation is completed.

Local storage can help in storing temporary data before it is pushed to the server. It is important to clear the local storage once this operation is completed.

Syntax
window.localStorage()
or :
localStorage()

I.To Save Data to Local Storage
localStorage.setItem(key, value);

II.To Read Data from Local Storage
let lastname = localStorage.getItem(key);
 
III.To Remove Data from Local Storage
localStorage.removeItem(key);

IV.To Remove All (Clear Local Storage)
localStorage.clear();

Parameters:
key & value

Return Value is: an object; a local storage object..

Examples: 
Count the number of times a user has clicked a button:

if (localStorage.clickcount) {
  localStorage.clickcount = Number(localStorage.clickcount) + 1;
} else {
  localStorage.clickcount = 1;
}
*/

// Examples: 
// Count the number of times a user has clicked a button:



//Counter
// function clickCounter() {
//   if (localStorage.clickcount) {
//     localStorage.clickcount = Number(localStorage.clickcount)+1;
//   } else {
//     localStorage.clickcount = 1;
//   }
//   document.getElementById("demo").innerHTML = localStorage.clickcount;
// };

// // clickCounter();

// // function createItem() {
// //   localStorage.user = [{
// //     username: "Femi",
// //     age: 34
// //   }];
// // }
// function createItem() {
//   localStorage.fruits = "Banana, Orange, Kiwi";
//   // let see = localStorage.getItem("fruits")
//   document.getElementById("demo").innerHTML = see;
// }
// createItem();

// // window.localStorage.clear();
// //clear()
//  function createItem() {
//     localStorage.clear()
//     document.getElementById("demo").innerHTML = see;
//   }
// //removeItem()
// function myFunction() {

//   // get name of item from local storage.
//   // var x = localStorage.removeItem("clickcount");
//   document.getElementById("demo").innerHTML =
//       x;
// }

// //getItem()
// function myFunction() {

//   // get name of item from local storage.
//   var x = localStorage.getItem("fruits");
//   document.getElementById("demo").innerHTML =
//       x;
// }
// myFunction()

//2.The setInterval() method calls a function at specified intervals (in milliseconds).
// The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.
// 1 second = 1000 milliseconds.
//syntax: 
// myInterval = setInterval(function, milliseconds);


//Timer from current time
// const myInterval = setInterval(myTimer, 1000);

// function myTimer() {
//   const date = new Date();
//   document.getElementById("demo").innerHTML = date.toLocaleTimeString();
// }

//3.The clearInterval() method clears a timer set with the setInterval() method.
// function myStop() {
//   clearInterval(myInterval);
// }

//4. ClearTimeout(): The clearTimeout() method clears a timer set with the setTimeout() method.
// note: To clear a timeout, use the id returned from setTimeout():
//myTimeout = setTimeout(function, milliseconds); 
//Then you can to stop the execution by calling clearTimeout():
// clearTimeout(myTimeout);




// function myGreeting() {
//   document.getElementById("demo").innerHTML = "Happy Birthday to You !!"
// }

// // const myTimeout = setTimeout(myGreeting, 1000); //1sec to display the text
// // const myTimeout = setTimeout(myGreeting, 6000); //6 secs to display the text

// function myStopFunction() {
//   clearTimeout(myTimeout);
// }


//5. addEventListener(): 
// The addEventListener() method attaches an event handler to a window.
// Syntax
// window.addEventListener(event, function, Capture);

// function myFunction() {
//   document.getElementById("demo").innerHTML = "Hello World";
// };

// window.addEventListener("click", myFunction);

// Change the background color of a document:
// window.addEventListener("click", function(){
//   document.body.style.backgroundColor = "red";
// });

// You can add different types of events:

// window.addEventListener("mouseover", myFunction);
// document.addEventListener("click", someOtherFunction);
// window.addEventListener("mouseout", someOtherFunction);
//event: Required.// The event name. // Do not use the "on" prefix.
// --Use "click" instead of "onclick".
//--function: Required.
// The function to run when the event occurs.
// When the event occurs, an event object is passed to the function as the first parameter. The type of the event object depends on the specified event. For example, the "click" event belongs to the MouseEvent object.
//--Optional (default = false).
// true - The handler is executed in the capturing phase.
// false - The handler is executed in the bubbling phase.

//6. window.print()
// The print() method prints the contents of the current window.

// The print() method opens the Print Dialog Box, which lets the user to select preferred printing options.
//inyour html file: <button onclick="window.print()">Print this page</button>


//7.window.scrollTo
//window.scrollTo(200, 0); Scroll the document to the horizontal position 500:

// window.scrollTo(0, 500); Scroll the document to the vertical position 500:


/*SESSION STORAGE: sessionStorage() / window.sessionStorage(): 
which stores data for one session.
The data is deleted when the browser window is closed)
*/
// Example:
// A counter
// function clickCounter() {
//   if (sessionStorage.clickcount) {
//     sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
//   } else {
//     sessionStorage.clickcount = 1;
//     }
//   document.getElementById("demo").innerHTML = sessionStorage.clickcount;
// }



//2...Javascript Error: 
//The Error object provides error information when an error occurs.

// Error properties: 
//Name: sets or returns and error name
//message: sets or return and error message;
//Reference error, syntax error, range error, type error, URI error

//addalert instead of alert
// try {
//   adddlert("Welcome");
// }
// catch(err) {
//   document.getElementById("demo").innerHTML =
//   err.name + "<br>" + err.message;
// }


// try{
//   let prompt("please talk")
// }catch(error){
//   document.getElementById("demo").innerHTML = error.name + "<br/>" + error.message
// }

//shortcut for inspect: f12....