//JAVSACRIPT OBJECT NOTATION JSON: It is used to represent a data., generally it used for Api's
// A array with objects inside
//JSON is a format for storing and transporting data.
//JSON is text, and text can be transported anywhere, and read by any programming language.
//JavaScript Objects can be converted into JSON, and JSON can be converted back into JavaScript Objects.
// This way we can work with the data as JavaScript objects, with no complicated parsing or translations.
// JSON:An intrinsic object that provides functions to convert JavaScript values to and from the JavaScript Object Notation (JSON) format.

// a JavaScript object...:
var myObj = { "name":"John", "age":31, "city":"New York" };

// ...converted into JSON:
var myJSON = JSON.stringify(myObj);

typeof myJSON;
console.log(myJSON);
// send JSON:
// window.location = "demo_json.php?x=" + myJSON;



// let students = 
// [
//     {
//     "name":"Amina",
//     "age": 23,
//     "course": "Javascript"
//     },
//     {
//     "name":"Amina",
//     "age": 23,
//     "course": "Javascript"
//     },
//     {
//     "name":"Amina",
//     "age": 23,
//     "course": "Javascript"
//     },
//     {
//     "name":"Amina",
//     "age": 23,
//     "course": "Javascript"
//     }
// ]

// console.log(students);

// {
//     name: "Amina"
//     age: 3
// }