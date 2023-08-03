/*switch satements: The switch statement is used to perform various actions based on set expression or condition.
differentiate between weedays and weekend

day 0 --> sunday weekend
day 1 --> monday weekday
day 2 --> tuesday weekday
day 3 --> wednesday weekday
day 4 --> thursday weekday
day 5 --> friday weekend
day 6 --> saturday weekend
switch says instead of writing a bunch of if/else code block, do these:......;*/

switch (5){
    case 0: 
        text = "weekend";
        break;
    case 5: 
        text = "weekend";
        break;
    case 6: 
        text = 'weekend';
        break;
    default: 
        text = "weekday"
}
console.log(text); 

switch(new Date().getDay()){
    case 0: 
        day = "Sunday";
        break;
    case 1: 
        day = "monday";
        break;
    case 2: 
        day = 'tuesday';
        break;
    case 3: 
        day = "wednesday" ;
        break;
    case 4: 
        day = "Thursday" ;
        break;
    case 5: 
        day = "Friday" ;
        break;
    case 6: 
        day = "Saturday" ;
        break;
    default: 
        day = "everydyay"
}

console.log(day);

//Racheal's Swap function...
// var swap = function(x){
//     return x
// }
// b = swap(a, a = b);
// c = swap(a, a = b, b = c);

// let name = prompt("What is your  name");
// let age = prompt(`Hello ${name}, `)