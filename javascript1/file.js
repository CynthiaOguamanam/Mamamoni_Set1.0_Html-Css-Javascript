// LOCAL STORAGE
// The localStorage object allows you to save key/value pairs in the browser.
// Local storage is a form of web storage that stores data for a long time. This could be a day, a week, or even a year. This depends upon the developer’s preference. It is important to note that local storage only stores strings so, if you wish to store objects, lists, or arrays, you must convert them into a string using JSON.stringify().
// Local storage can help in storing temporary data before it is pushed to the server. It is important to clear the local storage once this operation is completed.

// Syntax
// window.localStorage()
// or :
// localStorage()

// I.To Save Data to Local Storage
// localStorage.setItem(key, value);

// II.To Read Data from Local Storage
// let lastname = localStorage.getItem(key);
 
// III.To Remove Data from Local Storage
// localStorage.removeItem(key);

// IV.To Remove All (Clear Local Storage)
// localStorage.clear();

// Parameters:
// key & value

// Return Value is: an object; a local storage object..

//counter: 
function clickCounter() {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("demo").innerHTML = localStorage.clickcount;
  };
  clickCounter();
//   function createItem() {
//     localStorage.fruits = "Banana, Orange, Kiwi";
//     let see = localStorage.getItem("fruits")
//     document.getElementById("demo").innerHTML = see;
//   }
  function createItem() {
    localStorage.fruits = "Banana, Orange, Kiwi";
    localStorage.fruits = "apple"
    localStorage.fruits = 20
    let see = localStorage.clear("fruits")
    document.getElementById("demo").innerHTML = see;
  }
  createItem();

  //clear()
// window.localStorage.clear();
//   localStorage.clear()
  function myFunction() {
    // get name of item from local storage.
    // var x = localStorage.removeItem("clickcount");
    document.getElementById("demo").innerHTML =
        x;
  }
  //getItem()
function myFunction() {
    // get name of item from local storage.
    var x = localStorage.getItem("fruits");
    document.getElementById("demo").innerHTML =
        x;
  }
