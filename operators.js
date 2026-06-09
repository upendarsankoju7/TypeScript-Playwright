"use strict";
// =====================================
// ARITHMETIC OPERATORS IN TYPESCRIPT
// =====================================
var x = 5;
var y = 10;
// Multiplication
console.log(x * y); // 50
// Division
console.log(x / y); // 0.5
// Modulus (Remainder)
console.log(x % y); // 5
// Subtraction
console.log(x - y); // -5
// Post Increment
// Prints current value, then increments
console.log(x++); // 5
// x becomes 6
// Pre Decrement
// Decrements first, then prints
console.log(--y); // 9
// y becomes 9
// Increment x again
x++;
console.log(x); // 7
// Decrement y again
y--;
console.log(y); // 8
// =====================================
// ASSIGNMENT OPERATORS
// =====================================
var a = 75;
var b = 80;
// Traditional assignment
a = a + b;
console.log(a); // 155
// Add and Assign
a += b;
console.log(a); // 235
// Subtract and Assign
a -= b;
console.log(a); // 155
// Multiply and Assign
a *= b;
console.log(a); // 12400
// Divide and Assign
a /= b;
console.log(a); // 155
// Modulus and Assign
a %= b;
console.log(a); // 75
// =====================================
// COMPARISON (RELATIONAL) OPERATORS
// =====================================
var num1 = 10;
var num2 = 20;
// Equal To
console.log(num1 == num2); // false
// Not Equal To
console.log(num1 != num2); // true
// Strict Equal To (Value + Type)
console.log(num1 === num2); // false
// Strict Not Equal To
console.log(num1 !== num2); // true
// Greater Than
console.log(num1 > num2); // false
// Less Than
console.log(num1 < num2); // true
// Greater Than or Equal To
console.log(num1 >= num2); // false
// Less Than or Equal To
console.log(num1 <= num2); // true
// =====================================
// LOGICAL OPERATORS
// =====================================
// AND (&&)
// Returns true if both conditions are true
console.log(num1 > 5 && num2 > 15); // true
// OR (||)
// Returns true if at least one condition is true
console.log(num1 < 5 || num2 > 15); // true
// =====================================
// TERNARY OPERATOR
// =====================================
// Syntax:
// condition ? value_if_true : value_if_false
console.log(num1 < num2 ? num1 : num2);
// Output: 10
// =====================================
// BOOLEAN LOGICAL OPERATORS
// =====================================
var k = true;
var l = false;
// AND
console.log(k && l); // false
// OR
console.log(k || l); // true
// NOT
console.log(!k); // false
console.log(!l); // true
// =====================================
// SUMMARY
// =====================================
// Arithmetic Operators
// +   Addition
// -   Subtraction
// *   Multiplication
// /   Division
// %   Modulus
// ++  Increment
// --  Decrement
// Assignment Operators
// =   Assign
// +=  Add and Assign
// -=  Subtract and Assign
// *=  Multiply and Assign
// /=  Divide and Assign
// %=  Modulus and Assign
// Comparison Operators
// ==   Equal To
// !=   Not Equal To
// ===  Strict Equal To
// !==  Strict Not Equal To
// >    Greater Than
// <    Less Than
// >=   Greater Than or Equal To
// <=   Less Than or Equal To
// Logical Operators
// &&   AND
// ||   OR
// !    NOT
// Ternary Operator
// condition ? trueValue : falseValue
