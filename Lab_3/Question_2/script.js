"use strict"

let limit = Number(prompt("Enter how many integers you want to give for addition: "))
let average

let counter = 0 // initialize by 0, for controling limit
let sum = 0 // Also initialize by 0, in every iteration the entered integer will be sum up here

while(counter != limit){
    let integers = Number(prompt("Enter the integer: "))

    sum += integers
    counter++
}
console.log("Sum of all your entered integers is: " + sum);

average = sum / limit
console.log("Average of the integers is: " + average);


// QUIZ: Solve this problem using for loop...