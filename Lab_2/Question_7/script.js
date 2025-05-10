"use strict"

let num1 = Number(prompt("Enter num1: "))
let num2 = Number(prompt("Enter num2: "))
let num3 = Number(prompt("Enter num3: "))

let counter

if(num1 === num2 && num2 === num3){
    counter = 3
}else if(num1 === num2 || num1 === num3 || num2 === num3){
    counter = 2
}else{
    counter = 0
}

console.log("Number of same integers is: " + counter);
