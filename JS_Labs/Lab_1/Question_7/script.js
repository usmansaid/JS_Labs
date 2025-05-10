"use strict"

const seatsA_cost = 20
const seatsB_cost = 15
const seatsC_cost = 10
const seatsD_cost = 5

let ticketsA = Number(prompt("Enter total tickets sold of class A: "))
let ticketsB = Number(prompt("Enter total tickets sold of class B: "))
let ticketsC = Number(prompt("Enter total tickets sold of class C: "))
let ticketsD = Number(prompt("Enter total tickets sold of class D: "))

let ticketsA_Profit = ticketsA * seatsA_cost
let ticketsB_Profit = ticketsB * seatsB_cost
let ticketsC_Profit = ticketsC * seatsC_cost
let ticketsD_Profit = ticketsD * seatsD_cost

let totalProfit = ticketsA_Profit + ticketsB_Profit + ticketsC_Profit + ticketsD_Profit

console.log("Total Profit is: $" + totalProfit);
