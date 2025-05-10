"use strict"
let marks = Number(prompt("Enter your marks: "))

if (marks >= 90) {
    console.log("Grade for " + marks + " marks is A");
} else if (marks >= 80) {
    console.log("Grade for " + marks + " marks is B");
} else if (marks >= 70) {
    console.log("Grade for " + marks + " marks is C");
} else if (marks >= 50) {
    console.log("Grade for " + marks + " marks is D");
} else if (marks < 50 && marks >= 0) {
    console.log("Grade for " + marks + " marks is E");
} else {
    console.log("Invalid Entry!");
}

