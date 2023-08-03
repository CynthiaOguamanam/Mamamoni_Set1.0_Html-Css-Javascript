// let name = "Eze"
// let age = 12
// // console.log(name);

// name = "Grace"
// console.log(name);


// let num1 = 4
// let num2 = 5
// console.log(num1 + num2);
// num1++

let name = prompt("What is your name")
let age = prompt(`Hi! ${name} how old are you`)
if(age < 18) {
    alert("This Quiz is not for you!")
}else {
    let qu1 = prompt("What is Javascript?\n A. Javascript is a programming language \n B. Javascript is an object oriented programming language\n C. Javascript is a markup language\n D. Javascript is a superset of Typescript");

    // console.log(qu2)
//i am expecting qu2 to be an not defined because variable declaration does not accept hoisting... 
//
    if(qu1 === ("a" ||  "A") ){
        alert("Good")
        let qu2 = prompt("Which of these is a primitive datatype?\n A. Data\n B.Boolean\n C. Curly Braises\n D.Name");

        if(qu2 === ("b" || "B")){
            alert("Good");

            let qu3 = prompt("What pre the three ways of declaring variables in javascript?\n A. Let, Have, Const\n B.Const, Be, Let\n C. Var, Const, Let\n D. Var, Let, Have");
        if(qu3 === ("c" || "C")){
            alert("Good");

            let qu4 = prompt("What is DSA?\n A. Doing Structural Array\n B. Data Structure and Algorithm\n C. Data Structure and Array\n D. Data Singular Algorithm ");

            if(qu4 === ("b" || "B")){
                alert("Good");

                let qu5 = prompt("Javascript is a superset of Typescript\n True or False");

                if(qu5 === ("false" || "False")){
                    alert("Good")
                }else{
                    alert("Wrong Answers\n the answer is False")
                }
            }else{
                alert("Wrong Answers")
            }
        }else{
            alert("Wrong Answer\n The answer is C");
        }
             
        }else{
            alert("Wrong answer")
        }
    
    }else{
        alert("Wrong Ans \n the Ans is A")
    }
    
}


// if(1>2){
//     console.log("Good")
// }else{
//     console.log("Bad")
// }

// let hi = "movie"
// let age2 = hi.toUpperCase()
// console.log(age2)










// let name = "adad"
// let name1 = "musa"
// let name2 = "bolu"

// let allnames = name.concat(",", name1, ",  ", name2)
// console.log(allnames);
// console.log(qu1, qu2, qu3, qu4, qu5);
// let vegetables = ["carrot", "onion", "lettuce", "broccoli"]
// let fruits = ["Apple",  "Watermelon", "Orange", "Kiwi"];

// let allfruits = fruits.concat(vegetables);

// console.log(allfruits);
// console.log(allfruits.slice(1, 6));
// console.log(allfruits.reverse());
// console.log(allfruits.sort());



// let age = prompt("what is your age?")
// document.getElementById("SomeText").innerHTML = age;


