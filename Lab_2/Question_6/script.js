"use strict"

let num1 = Number(prompt("Enter num1: "))
let num2 = Number(prompt("Enter num2: "))
let num3 = Number(prompt("Enter num3: "))

let largest

if(num1 >= num2 && num1 >= num3){
    largest = num1
}else if(num2 >= num1 && num2 >= num3){
    largest = num2
}else{
    largest = num3
}

console.log("Largest number in your entered digits is: " + largest);
