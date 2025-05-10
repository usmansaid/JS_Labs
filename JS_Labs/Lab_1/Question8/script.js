"use strict"

let integer = Number(prompt("Enter an integer between 0 and 999: "))

let digit1 = Math.floor(integer / 100) // will give directly the first digit
let digit2 = Math.floor(integer / 10) % 10 // will give the second digit
let digit3 = Math.floor(integer % 10) // By 10 will give the last digit

let sum = digit1 + digit2 + digit3

console.log("Sum of all the digits in your integer is: " + sum)
