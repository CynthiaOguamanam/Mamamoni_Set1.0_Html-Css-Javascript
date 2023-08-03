// Arithmetic operators
//+ addition
let a = 32;
let b = a + 20;
console.log(b);

//- substration
let c = 20;
let d = 20 - 10;
console.log(d);

//++ increment 
let ef = 10;
a++;

let f1 = 20;
let f2 = f1 + 30;
f2++;
console.log(f2);

//-- decrement
let a1 = 20;
a1--;
console.log(a1);
let b1 = 20;
let c1 = a1-b1;
c1--;
console.log(c1);

//+= plus equalto
let a2 = 20;
let b2 = a2 + 20;
let c2 = b2 += 22;
console.log(c2);

let j = 10;
j+= 2;
console.log(j);


let text = "Mavis";
text += " " + "Beacon";
console.log(text);

let text1 = "Mavis";
text1 -= "Beacon";
console.log(text1);
NaN

// -= minus equalto
let a3 = 22;
a3 -= 20;
console.log(a3);

// % modulo arithmetic operator
let aa = 20;
let bb = 40;
let cc = bb % aa;
console.log(cc);

// (/): division 
let numb = 40/22;
console.log(numb);
let ab1 = 52;
let ab2 = 2;
// let xyz = ab/xy;
console.log(ab1 / ab2);

// *= multiplication equalto
let abb = 20;
abb*= 2;
let yy = abb*2 
console.log(yy);
console.log(abb);

let xyz = 20;
let yyy = xyz * 2
xyz*2;
console.log(xyz);
console.log(yyy);



//Ternary operator: 
// a simplified conditional operator that takes three operands; 
//1. condition 2. Expression to execute if true 3.  expression to execute if false;

//syntax
// condition ? expiftrue : expiffalse
// expiffalse: false, null, expression, number 
let age  = 18;
let beverage = age >= 18 ? "beer" : "juice";
console.log(beverage);

//conditional chain for ternary operation
let beverage2 = age >= 18 ? "beer" : "juice" 
? "Amala and efo riro with big fish" : "Amala and egusi with one small meat"
? "white pack" : "blue pack"
? 2 : 1;


let club = age >= 18 ? "enter" : "please go home";



// //conditional chain for conditional operator: if....elseif....else
// let ax = 2+2;
// if(ax === 5){
//     console.log(true);
//     let val = 2+3
//     if(val === 5){
//         console.log("weldone");
//     }else{
//         console.log("nawa ooooo!");
//     }
//     // console.log(val);
// } else if (ax === 4){
//     console.log("new true");
// } else{
//     console.log("nawa");
// }

// console.log(ax);


//Logical Operators: logical operators are used to determine the logic between variables and values;

// logical AND ( && );  logical OR ( || ); logical NOT ( ! )
// &&
let number = 3;
let num = 5;
let check = 3 > 5 && 10 < 3;
console.log(check);
// or ||
let check2 = number == 5 || num == 5; 
// false || true = true
// let check2 = number == 3 || num == 5;
//true || true = true
// let check2 = number == 3 || num == 2;
//true || false = true
// let check2 = number == 2 || num == 2;
//false || false = false;
console.log(check2);

// ! NOT
let ress = 3 + 3;
console.log(!(ress == 6));

let value2 = prompt("what is 2 + 2")
if(value2 != 4){
    alert("No, 2 + 2 should be 4")
    console.log("value is not equal to 4");
}else{
    alert("Yes, 2 + 2 is 4")
    console.log(true, "value is equal to 4");
}

//Assignment: (1.) list and explain 10 string methods with one code example each..,
//(2.) list and explain 10 array methods with oen code example each.
//usecases... 




