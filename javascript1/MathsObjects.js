/*JAVASCRIPT MATHS OBJECT: 
Math Object
The Math object allows you to perform mathematical tasks.
Math is not a constructor. All properties/methods of Math can be called by using Math as an object, without creating it:

*/
//1.Pi: Math.PI()
document.getElementById("piDemo").innerHTML = Math.PI;
clg
//2.Suare root: Math.sqrt() returns the square root of a given number
document.getElementById("sqrtDemo").innerHTML = Math.sqrt(16);
//3. Math.cbrt(x)	Returns the cubic root of x
console.log(Math.cbrt(27), "Maths.cbrt");
//4.Math.ceil(x)	Returns x, rounded upwards to the nearest integer
console.log(Math.ceil(27.563), "Maths.ceil");
console.log(Math.ceil(27.03), "Maths.ceil");
//5.Math.floor(x)	Returns x, rounded downwards to the nearest integer
console.log(Math.floor(27.563), "Maths.floor");
console.log(Math.floor(27.01), "Maths.floor");
//6.Math.log(x)	Returns the natural logarithmof x
console.log(Math.log(4), "Maths.log");
//7.Math.max(x1,x2,..)	Returns the number with the highest value;
console.log(Math.max(2, 5, 17, 33, 28), "Maths.max");
//8.Math.min(x1,x2,..)	Returns the number with the lowest value
console.log(Math.min(1, -4, 29, 0.5), "maths.min");
//9.Math.random()	Returns a random number between 0 and 1
console.log(Math.random(2), "Maths.random");
//10.Math.round(x)	Rounds x to the nearest integer
console.log(Math.round(27.563), "Maths.round");
console.log(Math.round(27.03), "Maths.round");
//11.Math.trunc(x)	Returns the integer part of a number (x); Returns the integral part of the a numeric expression, x, removing any fractional digits. If x is already an integer, the result is x.;The Math.trunc() method removes the decimals (does NOT round the number).
console.log(Math.trunc(5), "Maths.trunc");
console.log(Math.trunc(5.63), "Maths.trunc");
console.log(Math.trunc(-3), "Maths.trunc"); 
console.log(Math.trunc(-3.302), "Maths.trunc"); 
console.log(Math.trunc(0.25), "Maths.trunc");

