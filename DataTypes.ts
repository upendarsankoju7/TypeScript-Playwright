// ==============================
// NUMBER DATA TYPE
// ==============================

// Declaring a number variable and assigning value 10
var first: number = 10;
console.log(first); // Output: 10

// Another number variable with value 40
var second: number = 40;
console.log(second); // Output: 40


// ==============================
// STRING DATA TYPE
// ==============================

// String variable to store first name
var frisName: string = "johnny ";

// String variable to store department name
var Department: string = "IT";

// Concatenating multiple strings into a single string
var full: string = frisName + "Working here in " + Department;

// Displaying the combined string
console.log(full); // Output: johnny Working here in IT


// ==============================
// BOOLEAN DATA TYPE
// ==============================

// Boolean variable can hold only true or false
var SecondName: boolean = true;

// Displaying boolean value
console.log(SecondName); // Output: true

// Boolean value converted to string and concatenated
console.log("This is boolean value: " + SecondName);
// Output: This is boolean value: true


// ==============================
// VOID DATA TYPE
// ==============================

// A void function does not return any value

/*
function myFunction(): void {
    console.log("This is void function");
}
*/


// ==============================
// NULL AND UNDEFINED
// ==============================

// null represents an intentional empty value
// undefined means a variable has not been assigned a value

/*
var MyNumber: number = null;
MyNumber = 123;
console.log(MyNumber); // Output: 123

// Variable initially assigned undefined
var MyName: string = undefined;
MyName = "Upendar Sankoju";
console.log(MyName); // Output: Upendar Sankoju
*/


// ==============================
// ANY DATA TYPE
// ==============================

// 'any' allows a variable to store values of any type
var MysecondName: any = "Sankoju"; // string

MysecondName = 123;          // number
MysecondName = "Ravi Kumar"; // string
MysecondName = true;         // boolean

// Final value stored is true
console.log(MysecondName); // Output: true


// ==============================
// FUNCTION USING ANY TYPE
// ==============================

// Function accepts parameters of any type
function myFun(j: any, K: any) {
    console.log(j + K);
}

// Number addition
myFun(10, 20); // Output: 30

// String concatenation
myFun("Hello ", "World"); // Output: Hello World


// ==============================
// SUMMARY OF TYPES USED
// ==============================
//
// number    -> Stores numeric values (10, 20, 30)
// string    -> Stores text values ("Hello")
// boolean   -> Stores true or false
// void      -> Function returns no value
// null      -> Empty value assigned intentionally
// undefined -> Variable has no value assigned
// any       -> Can store any type of value
//