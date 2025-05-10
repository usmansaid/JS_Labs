"use strict";

let students_A = prompt("Enter the number of students in class A")
let students_B = prompt("Enter the number of students in class B")
let students_C = prompt("Enter the number of students in class C")

let class_A_Students = Number(students_A)
let class_B_Students = Number(students_B)
let class_C_Students = Number(students_C)

let totalStudents = class_A_Students + class_B_Students + class_C_Students

let desks
if(totalStudents % 2 != 0){
    desks = (totalStudents + 1) / 2
}else{
    desks = totalStudents / 2
}

console.log(desks + " desks are required for " + totalStudents + " students");
