"use strict"
let integer = Number(prompt("Enter integers between 1 and 10: "))
let roman
switch(integer){
    case 1:
        roman = "I"
        break
        
    case 2:
        roman = "II"
        break
    case 3:
        roman = "III"
        break
    case 4:
        roman = "IV"
        break
    case 5:
        roman = "V"
        break
    case 6:
        roman = "VI"
        break
    case 7:
        roman = "VII"
        break
    case 8:
        roman = "VIII"
        break
    case 9:
        roman = "IX"
        break
    case 10:
        roman = "X"
        break

    default:
        roman = "Enter between 1 and 10 only!"
        break

}

console.log("Roman equivalent of " + integer + " is " + roman);
