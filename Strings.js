"use strict";
var my1 = "Hello World";
let my2 = "Hello Typescript";
console.log(my1.charAt(0));
//concatenate two strings
let my3 = "Welcome to ";
let my4 = "TypeScript";
let my5 = " & JavaScript";
console.log(my3.concat(my4));
console.log(my3.concat(my4).concat(my5));
let my6 = "welcome to typescript";
console.log(my6.replace("typescript", "JavaScript"));
//spit 
let fruits = "Apple Banana Mango Orange";
console.log(fruits.split(" "));
console.log(fruits.split(" ", 2));
console.log(fruits.split(" ", 1));
//substring
let Ft = "Hello ravi";
console.log(Ft.substring(0, 3));
console.log(Ft.substring(4, 7));
//toLowerCase and toUpperCase
let name1 = "RAVI";
let name2 = "ravi";
console.log(name1.toLowerCase());
console.log(name2.toUpperCase());
