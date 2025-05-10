"use strict"

let totalMinutes = prompt("Enter total minutes since midnight")

let hours = Math.floor(totalMinutes / 60)
let minutes = totalMinutes % 60

console.log(hours + ":" + minutes);

