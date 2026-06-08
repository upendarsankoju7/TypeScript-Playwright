// =====================================
// TYPESCRIPT DATA TYPES EXAMPLE
// =====================================


// ==============================
// NUMBER DATA TYPE
// ==============================

// Number variable with value 10
var first: number = 10;
console.log(first); // Output: 10

// Number variable with value 40
var second: number = 40;
console.log(second); // Output: 40



// ==============================
// STRING DATA TYPE
// ==============================

// String variable to store employee name
var firstName: string = "Johnny ";

// String variable to store department name
var department: string = "IT";

// Combining strings using concatenation
var fullMessage: string = firstName + "Working here in " + department;

// Displaying the combined message
console.log(fullMessage);
// Output: Johnny Working here in IT



// ==============================
// BOOLEAN DATA TYPE
// ==============================

// Boolean variable can store only true or false
var isActive: boolean = true;

// Displaying boolean value
console.log(isActive);
// Output: true

// Boolean value inside a string
console.log("This is boolean value: " + isActive);
// Output: This is boolean value: true



// ==============================
// VOID DATA TYPE
// ==============================

// A void function does not return any value

function displayMessage(): void {
    console.log("This is a void function");
}

displayMessage();



// ==============================
// NULL DATA TYPE
// ==============================

// null represents an intentionally empty value

var myNumber: number | null = null;

myNumber = 123;

console.log(myNumber);
// Output: 123



// ==============================
// UNDEFINED DATA TYPE
// ==============================

// Variable declared but value assigned later

var myName: string | undefined = undefined;

myName = "Upendar Sankoju";

console.log(myName);
// Output: Upendar Sankoju



// ==============================
// ANY DATA TYPE
// ==============================

// 'any' can store values of different data types

var mySecondName: any = "Sankoju";
console.log(mySecondName); // Output: Sankoju

mySecondName = 123;
console.log(mySecondName); // Output: 123

mySecondName = "Ravi Kumar";
console.log(mySecondName); // Output: Ravi Kumar

mySecondName = true;
console.log(mySecondName); // Output: true





// ==============================
// SUMMARY OF TYPESCRIPT DATA TYPES
// ==============================

// number    -> Stores numeric values
// string    -> Stores text values
// boolean   -> Stores true or false values
// void      -> Function does not return a value
// null      -> Represents an empty value
// undefined -> Variable declared but not assigned
// any       -> Can store any type of value