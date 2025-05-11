"use strict"

let date = Number(prompt("Enter the date: "))
let month = Number(prompt("Enter the month: "))
let year = Number(prompt("Enter the year, only two digits like for 1960, enter only 60: "))

if(date * month === year){
    console.log("Magical Year!");
    
}else{
    console.log("Not a magical year");
    
}