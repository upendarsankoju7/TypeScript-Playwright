"use strict";
// Conditional Statements in TypeScript
// Types: if, if-else, else-if
var Person_Age = 15;
var num = 15;
var num1 = 60;
var num2 = 50;
// ====================================================
// Problem 1: Check whether a person is eligible to vote
// Condition: Age should be 18 or above
// ====================================================
if (Person_Age >= 18) {
    console.log("Eligible for Vote");
}
else {
    console.log("Not Eligible for Vote");
}
// ====================================================
// Problem 2: Check whether a number is Even or Odd
// Condition: If remainder is 0 when divided by 2,
// then it is an Even Number.
// ====================================================
if (num % 2 == 0) {
    console.log("It is an Even Number");
}
else {
    console.log("It is an Odd Number");
}
// ====================================================
// Problem 3: Check whether another number is Even or Odd
// Here num1 = 900
// Since 900 is divisible by 2, it is an Even Number.
// ====================================================
if (num1 % 2 == 0) {
    console.log("It is an Even Number");
}
else {
    console.log("It is an Odd Number");
}
if (num1 > num2) {
    console.log("High Number");
}
else {
    console.log("Less Number");
}
var a = 50;
var b = 20;
var c = 30;
if (a > b && a > c) {
    console.log("A Largest Number");
}
else if (b > c && b > a) {
    console.log("B Largest Number");
}
else {
    console.log("C Largest Number");
}
//trimaninator operator 
var x = 200;
var y = 300;
x > y ? console.log("X is The Larger Number") : console.log("Y is The Larger Number");
var weekNumber = 1;
if (weekNumber == 1) {
    console.log("Sunday");
}
else if (weekNumber == 2) {
    console.log("Monday");
}
else if (weekNumber == 3) {
    console.log("Tuesday");
}
else if (weekNumber == 4) {
    console.log("Wednesday");
}
else if (weekNumber == 5) {
    console.log("Thursday");
}
else if (weekNumber == 6) {
    console.log("Friday");
}
else if (weekNumber == 7) {
    console.log("Saturday");
}
else {
    console.log("Invaild day");
}
// Variable to store the week number
var weekNumber = 1;
// Switch statement to check the day
switch (weekNumber) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day");
        break;
}
