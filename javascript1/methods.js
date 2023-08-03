// string methods in javascript
// let fruit = "orange";
// let morefruits = "banana\n apple";

//1. length: Returns the length of a String object.
// console.log(fruit.length);
// 2. indexof()
//indexof returns the position of the first occurence of a substring
// console.log(fruit.indexOf("g"));

// 3. slice()
// return a section of the string., two parameters: the index of the begining and where the length its stopping ;
// let fruit = "orange";
// console.log(fruit.slice(1, 6));

//4. replace()
//replaces texts in a string using  a regular expression or search string
// let fruit = "apple";
// console.log(fruit.replace("a", "i"));

//5.toUpperCase()
// let fruit = "guaVA"
// converts all the alphabetic characters in a string to uppercase 
// console.log(fruit.toUpperCase());

//6. toLowerCase()
//converts all the alphabetic characters in a string to lower case
// console.log(fruit.toLowerCase());

//7. charAt()
// let fruit = "mango  "
//it return the character of a specified index
// console.log(fruit.charAt(2));
// console.log(fruit[2]);

//8.split()
//splits a string into substrings using a specified operator and returns them as an array.
// let fruit = "mango  12ihysenejenj jk   sjsnsj"
// console.log(fruit.split(""));
// console.log(fruit.indexOf("e"));

//9. repeat()
//Returns a String value that is made from count copies appended together. If count is 0, the empty string is returned.
// let sent = "This is a boy"
// console.log(sent.repeat(5));

/* Array*/
//1. toString(): Returns a string representation of an array.
// const arrayfruits = ["banana",2, 65, true, "orange", "apple", "kiwi", "pear"];
// console.log( arrayfruits.toString());
// console.log("to string: ", typeof arrayfruits.toString());

//2. join(): Adds all the elements of an array into a string, separated by the specified separator string.
const arrayfruits = ["banana","orange", "apple", "kiwi", "pear"];
// console.log(arrayfruits.join(" * "));
// console.log(arrayfruits.join(" - "));

//3.pop()
// Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// console.log(arrayfruits.pop());

//4.push()
// Adds new elements to the end of an array, and returns the new length of the array.
// console.log(arrayfruits.push(6));
// console.log(arrayfruits);

//5.concat
// Combines two or more arrays. This method returns a new array without modifying any existing arrays.
let food = ["rice", "beans"];
// let newarray = arrayfruits.concat(food)
// console.log(newarray);

// console.log(arrayfruits.concat(food));

//6. shift()
// Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(arrayfruits.shift());
console.log(arrayfruits);
console.log(arrayfruits.shift());
console.log(arrayfruits);

//7.unshift()
// Inserts new elements at the start of an array, and returns the new length of the array.
console.log(arrayfruits.unshift("pineapple", "guava", "tangerine"));
console.log(arrayfruits);

//slice
// Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
let array = ["rice", "beans", "moimoi", "pap", "fish"]
console.log(array.slice(1, 5));

//9. Splice()
// The splice method changes the contents of an array by removing or replacing existing elements and adding new elements in place without modifying it
//Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

const month = ["january", "february", "march", "april", "may"];
console.log(month.splice(0, 3, "ggggg"));
console.log(month);

