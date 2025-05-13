"use strict"

let sentinel = -1
let average

let counter = 0 // initialize by 0, for controling limit
let sum = 0 // Also initialize by 0, in every iteration the entered integer will be sum up here

let integers = Number(prompt("Enter the integer, -1 to finish: "))

while (integers != sentinel) {
    
    sum += integers
    counter++

    integers = Number(prompt("Enter the integer, -1 to finish: "))
}

console.log("Sum of all your entered integers is: " + sum);

average = sum / counter
console.log("Average of the integers is: " + average);


// QUIZ: Solve this problem using for loop...