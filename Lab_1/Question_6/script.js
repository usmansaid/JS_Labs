"use strict"

const perHourPay = 15.50
const totalTax = 0.14 // 14% tax of total
const clothes = 0.1 // 10% on clothes
const school = 0.01 // 1% on school supplies
const bondSpendings = 0.25 // 25%
const parentSpendings = 0.50 // dollars for each dollar you spend

let hoursWorked = prompt("Enter the number of hours you worked each week: ")
let totalHours = Number(hoursWorked) * 5 // job is for 5 weeks

let incomeBeforeTax = totalHours * perHourPay
console.log("Your income before taxes is: $" + incomeBeforeTax)

let taxWithhold = incomeBeforeTax * totalTax
let incomeAfterTax = incomeBeforeTax - taxWithhold
console.log("Yoiur income after paying taxes is: $" + incomeAfterTax)

let clothesSpendings = incomeAfterTax * clothes
console.log("Your spendings on clothes is: $" + clothesSpendings)

let schoolSpendings = incomeAfterTax * school
console.log("Your spendings on school accessories is: $" + schoolSpendings)

let remainingMoney = incomeAfterTax - (incomeAfterTax * 0.11) // 11% of the income is spent in school and clothes accessories

let totalBondsSpendings = remainingMoney * bondSpendings
console.log("Spendings on your bonds is: $" + totalBondsSpendings)

let totalParentsSpendings = totalBondsSpendings * parentSpendings
console.log("Your parents spent a total of: $" + totalParentsSpendings);

 