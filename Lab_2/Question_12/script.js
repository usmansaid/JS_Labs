"use strict"

let booksCount = Number(prompt("Enter the number of books you bought this month: "))
let points

switch(booksCount){
    case 0: 
        points = 0
        break
        
    case 1: 
        points = 5
        break
        
    case 2: 
        points = 15
        break
        
    case 3: 
        points = 30
        break
        
    default: 
        points = 60
        break
}

console.log("You earned " + points + " points for " + booksCount + " books");
