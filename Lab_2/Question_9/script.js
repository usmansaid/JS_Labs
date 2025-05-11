"use strict"

let length1 = Number(prompt("Enter the length of 1st rectangle: "))
let width1 = Number(prompt("Enter the width of 1st rectangle: "))
let length2 = Number(prompt("Enter the length of 2nd rectangle: "))
let width2 = Number(prompt("Enter the width of 2nd rectangle: "))

let area1 = length1 * width1
let area2 = length2 * width2

if(area1 > area2){
    console.log("Rectangle 1 is greater than Rectangle 2");
    
}else if(area1 < area2){
    console.log("Rectangle 2 is greater than Rectangle 1")
}else{
    console.log("Both are Equal")
}