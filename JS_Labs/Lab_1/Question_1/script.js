"use strict"

let decimalAmount = prompt("Enter a decimal number(These are the dollars and cents combination): ")

decimalAmount = Number(decimalAmount)

let totalCents = decimalAmount * 100
console.log("total cents are: " + totalCents)

// Obtaining dollars
let dollars = Math.floor(totalCents / 100)
let remainingCents = totalCents % 100

console.log("Dollars are: " + dollars)


// Quarters
let quarters = Math.floor(remainingCents / 25)
console.log("Quarters are: " + quarters)

remainingCents %= 25

//Dimes
let dimes = Math.floor(remainingCents / 10)
console.log("Dimes are: " + dimes)

remainingCents %= 10

// Nickles
let nickles = Math.floor(remainingCents / 5)
console.log("Nickles are: " + nickles)

//Pennies
remainingCents %= 5
console.log("Pennies are: " + remainingCents)



