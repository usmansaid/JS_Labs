"use strict"

let cents = Number(prompt("Enter cents: "))
let nickles = Number(prompt("Enter nickles: "))
let dimes = Number(prompt("Enter dimes: "))
let quarters = Number(prompt("Enter quarters: "))

let totalCents = cents + (nickles * 5) + (dimes * 10) + (quarters * 25)

// cent is dollar / 100
// nickle is dollar / 5
// dime is dollar / 10
// quarter is dollar / 25

if(totalCents === 100){
    console.log("Congratulations! your change is equal to one Dollar");
    
}else if(totalCents > 100){
    console.log("Oops! Your change is greater than one Dollar");
    
}else{
    console.log("Oops! Your change is less than one Dollar");
    
}