//function:  a block of useable code written to perform  a specific task.
//function is a key word 
//1. create a function
//2. call the function

// function fruits(){
//     let frut = ["Aplle", "mango", "orange", "kiwi"];
//     console.log(frut);
// };
// fruits();
// function students(){
//     let student = {name: ["Amina", "Sandra", "Hope"], age: [14, 56, 27]};
//     console.log(student);
// };
// students();
// // //creating a child and calling the child else it won't listen 
// // fruits();

// function greeting(){
//     let name = prompt("What is your name");
//     let age = prompt(`dear ${name}, how old are you`);
//     console.log(name + age);
// };
// greeting();
// document.getElementById("plaintext").innerHTML = "This is a text from my javascript"

let fruit = ["mango", "kiwi", "orange"]
document.getElementById("plaintext").innerHTML = fruit;

function sumNumber(num1, num2){
    let result = num1 + num2;
    console.log(result);
};
sumNumber(2, "hi");

// sumNumber(2, 3);


//Loop: use to perform repeated task following a set condition.., repeats a function until a condition is met;
//for: initializer, condition, iterator;

// entry: for,
// whileexit loop: do while

//while loop: 

// let num = 1;
// while (num < 10){
//     num+= 1;
//     console.log(num);
// }

//for loop
// for(let i = 1; i < 10; i++){
//     console.log(i);
// }

// for(let a = 1; a >= 100; a++){
//  console.log(a);
// }