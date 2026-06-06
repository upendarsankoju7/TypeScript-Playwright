"use strict";
// both type and initial value
var employeeName = "Upendar Sankoju";
console.log(employeeName); // Prints employee name
// both type and initial value
var employeeAge = 30;
console.log(employeeAge); // Prints employee age
// both type and initial value
var upendar = "Welcome to TypeScript programming";
console.log(upendar); // Prints welcome message
// only the type declaration
var rajuName; // Variable type is string
// initialize the value later
rajuName = "Hello Good Morning"; // Assign value
console.log(rajuName); // Prints greeting message
// only the type declaration
var employee; // Variable type is string
// initialize the value later
employee = "Welcomem Raju"; // Assign value
console.log(employee); // Prints assigned value
// only the initial value (TypeScript infers the type as string)
var hp = "Welcome for TypeScript programming";
console.log(hp); // Prints welcome message
// without type annotation and without initial value
var DogName; // Type is 'any'
// initialize the value later
DogName = "Tommy";
console.log(DogName); // Prints dog name
