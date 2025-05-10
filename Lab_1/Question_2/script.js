"use strict";

let students = prompt("Enter the number of students: ")
let apples = prompt("Enter the number of Apples: ")

let eachStudentGetApples = Math.floor(apples / students)
console.log("Each student should get " + eachStudentGetApples + " apples")

let remainingApples = Math.floor(apples % students)

if(remainingApples == 1){
    console.log("1 Apple remained in the Basket")
    
}else{

    console.log(remainingApples + " Apples remained in basket")
}

