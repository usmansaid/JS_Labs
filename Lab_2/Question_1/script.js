"use strict"

let year = Number(prompt("Enter the Year: "))

//Here no order is necessary
// if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
//     console.log(year + " is a Leap year");
    
// }else{
//     console.log(year + " is not a Leap Year");
    
// }


// But here the order is necessary
if(year % 400 === 0){
    console.log(year + " is a leap year");
    
}else if(year % 100 === 0){
    console.log(year + " is not a leap year");
    
}else if(year % 4 === 0){
    console.log(year + " is a leap year");
    
}else{
    console.log(year + " is not a leap year");
    
}