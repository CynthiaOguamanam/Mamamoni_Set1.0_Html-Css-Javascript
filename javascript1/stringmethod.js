// string method
//1. length: Returns the length of a String object.
let fruit = "orange";
console.log(fruit.length);
// 2. indexof()
//indexof returns the position of the first occurence of a substring
console.log(fruit.indexOf("g"));
// 3. slice()
// return a section of the string., two parameters: the index of the begining and where the length its stopping ;
console.log(fruit.slice(1, 6));
//4. replace()
//replaces texts in a string using  a regular expression or search string
console.log(fruit.replace("a", "i"));

//5.toUpperCase()
let fruit2 = "guaVA"
// converts all the alphabetic characters in a string to uppercase 
console.log(fruit2.toUpperCase());

//6. toLowerCase()
//converts all the alphabetic characters in a string to lower case
console.log(fruit2.toLowerCase());

//7. charAt()
//it return the character of a specified index
console.log(fruit.charAt(2));
console.log(fruit[2]);

//8.split()
//splits a string into substrings using a specified operator and returns them as an array.
let fruit3 = "mango   "
console.log(fruit3.split(""));
console.log(fruit3.indexOf("e"));

//9. repeat()
//Returns a String value that is made from count copies appended together. If count is 0, the empty string is returned.
let sent = "This is a boy"
console.log(sent.repeat(5));