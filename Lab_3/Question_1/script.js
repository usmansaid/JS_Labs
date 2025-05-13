"use strict"

let num1 = Math.floor(Math.random() * 10) + 1;   // from 1 to 10
let num2 = Math.floor(Math.random() * 10) + 11;  // from 11 to 20

let actual = num1 + num2;
console.log(actual)
let guess = Number(prompt("Guess the sum of two random numbers: "));

// Here, console.log() may not work properly, therefore alert is a best choice
while (guess !== actual) {
    if (guess > actual) {
        alert("Your guessed sum is higher. Try Again!");
    } else {
        alert("Your guessed sum is smaller. Try Again!");
    }

    guess = Number(prompt("Guess the sum of two random numbers: "));
}

alert("Congratulations! You guessed correctly.");