// =====================================
// STRING METHODS IN TYPESCRIPT
// =====================================


// String Variables

var my1: string = "Hello World";
let my2: string = "Hello TypeScript";


// =====================================
// charAt()
// =====================================
// Returns the character at the specified index.

console.log(my1.charAt(0));
// Output: H



// =====================================
// concat()
// =====================================
// Combines two or more strings.

let my3 = "Welcome to ";
let my4 = "TypeScript";
let my5 = " & JavaScript";

// Concatenate two strings
console.log(my3.concat(my4));
// Output: Welcome to TypeScript

// Concatenate three strings
console.log(my3.concat(my4).concat(my5));
// Output: Welcome to TypeScript & JavaScript



// =====================================
// replace()
// =====================================
// Replaces a specified string with another string.

let my6 = "welcome to typescript";

console.log(my6.replace("typescript", "JavaScript"));
// Output: welcome to JavaScript



// =====================================
// split()
// =====================================
// Splits a string into an array.

let fruits = "Apple Banana Mango Orange";

// Split all words
console.log(fruits.split(" "));
// Output: [ 'Apple', 'Banana', 'Mango', 'Orange' ]

// Split first 2 words
console.log(fruits.split(" ", 2));
// Output: [ 'Apple', 'Banana' ]

// Split first word only
console.log(fruits.split(" ", 1));
// Output: [ 'Apple' ]



// =====================================
// substring()
// =====================================
// Extracts characters between two indexes.

let ft = "Hello Ravi";

console.log(ft.substring(0, 3));
// Output: Hel

console.log(ft.substring(4, 7));
// Output: o R



// =====================================
// toLowerCase()
// =====================================
// Converts all characters to lowercase.

let name1 = "RAVI";

console.log(name1.toLowerCase());
// Output: ravi



// =====================================
// toUpperCase()
// =====================================
// Converts all characters to uppercase.

let name2 = "ravi";

console.log(name2.toUpperCase());
// Output: RAVI



// =====================================
// trim()
// =====================================
// Removes spaces from the beginning and end
// of a string.

let name3 = "   Ravi Kumar   ";

console.log(name3.trim());
// Output: Ravi Kumar



// =====================================
// SUMMARY OF STRING METHODS
// =====================================

// charAt(index)
// Returns character at a specific position.

// concat()
// Combines multiple strings.

// replace(oldValue, newValue)
// Replaces a string value.

// split(separator)
// Converts string into an array.

// substring(start, end)
// Extracts part of a string.

// toLowerCase()
// Converts text to lowercase.

// toUpperCase()
// Converts text to uppercase.

// trim()
// Removes leading and trailing spaces.