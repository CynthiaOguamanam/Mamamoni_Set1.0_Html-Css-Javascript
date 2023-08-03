/* Array*/
//1. toString(): Returns a string representation of an array.
const arrayfruit1 = ["banana",2, 65, true, "orange", "apple", "kiwi", "pear"];
console.log( arrayfruit1.toString());
// console.log("to string: ", typeof arrayfruits.toString());

//2. join(): Adds all the elements of an array into a string, separated by the specified separator string.
const arrayfruits = ["banana","orange", "apple", "kiwi", "pear"];
console.log(arrayfruits.join(" * "));
console.log(arrayfruits.join(" - "));

//3.pop()
// Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(arrayfruits.pop());

//4.push()
// Adds new elements to the end of an array, and returns the new length of the array.
console.log(arrayfruits.push(6, "hello", false, "yes"));
console.log(arrayfruits);

//5.concat
// Combines two or more arrays. This method returns a new array without modifying any existing arrays.
let food = ["rice", "beans"];
let newarray = arrayfruits.concat(food)
console.log(newarray);
console.log(arrayfruits.concat(food));

//6. shift()
// Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(arrayfruits.shift());
console.log(arrayfruits);
console.log(arrayfruits.shift());
console.log(arrayfruits);

//7.unshift()
// Inserts new elements at the start of an array, and returns the new length of the array.
console.log(arrayfruits.unshift("pineapple"));
console.log(arrayfruits);

//8. slice
// Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
let array = ["rice", "beans", "moimoi", "pap", "fish"]
console.log(array.slice(2, 5));

//9. Splice()
// The splice method changes the contents of an array by removing or replacing existing elements and adding new elements in place without modifying it
//Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

const month = ["january", "february", "march", "april", "may"];
console.log(month.splice(1, 2, "december"));

//10. sort

let sumNumbers = [5,10,2, 25, 3, 255, 1,2,5, 334, 321, 2];
console.log(sumNumbers.sort(function(a, b) {return a + b})); //sort
console.log(sumNumbers.sort(function(a, b) {return b-a})); //sort
// let test = [10,2,20,1].sort((a, b) => a - b);
let test = [11,2,22,1].sort((a, b) => a - b);
console.log(test);

let empty = new Array();
console.log(empty);

//11. map()