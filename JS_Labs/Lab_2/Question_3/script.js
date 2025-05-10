"use strict"

let hours = Number(prompt("Upto 30 hours will be normal pay, above which will be overtime. \nEnter your weekly work hours: "))
let payRate = Number(prompt("Enter the rate per hour: "))

let salary
if(hours > 30){
    salary = (hours * payRate) + ((hours - 30) * payRate) * 1.5
}else{
    salary = hours * payRate
}

console.log("Your weekly salary is : $" + salary);
