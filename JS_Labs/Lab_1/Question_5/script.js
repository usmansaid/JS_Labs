"use strict"

const oneCartonHold = 3.78
const oneLitreCost = 0.38
const oneCartonProfit = 0.27 
const totalMilk = prompt("Enter the total amount of milk produced today in litres: ")

const cartonsNeeded = Math.ceil((totalMilk / oneCartonHold))
let cost = totalMilk * oneLitreCost
let totalCost = cost.toFixed(2)

const eachLitreProfit = oneCartonProfit / oneCartonHold
let profit = eachLitreProfit * totalMilk
let totalProfit = profit.toFixed(2)


console.log("Total cartons needed are: " + cartonsNeeded);
console.log("Total cost of producing total milk is : $" + totalCost);
console.log("Total profit for total milk: $" + totalProfit);