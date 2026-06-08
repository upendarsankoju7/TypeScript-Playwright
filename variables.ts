// =====================================
// VARIABLE DECLARATION IN TYPESCRIPT
// =====================================


// Both type annotation and initial value are provided
var employeeName: string = "Upendar Sankoju";

// Prints employee name
console.log(employeeName); // Output: Upendar Sankoju


// Both type annotation and initial value are provided
var employeeAge: number = 30;

// Prints employee age
console.log(employeeAge); // Output: 30


// String variable with an initial value
var upendar: string = "Welcome to TypeScript programming";

// Prints welcome message
console.log(upendar);
// Output: Welcome to TypeScript programming


// =====================================
// DECLARE FIRST, ASSIGN LATER
// =====================================


// Variable declared with type string
var rajuName: string;

// Value assigned later
rajuName = "Hello Good Morning";

// Prints assigned value
console.log(rajuName);
// Output: Hello Good Morning


// Variable declared with type string
var employee: string;

// Value assigned later
employee = "Welcome Raju";

// Prints assigned value
console.log(employee);
// Output: Welcome Raju


// =====================================
// TYPE INFERENCE
// =====================================


// TypeScript automatically infers the type as string
// because the assigned value is a string
var hp = "Welcome for TypeScript programming";

// Prints the message
console.log(hp);
// Output: Welcome for TypeScript programming


// =====================================
// ANY TYPE (NO TYPE ANNOTATION)
// =====================================


// No type and no initial value
// TypeScript treats it as 'any'
var DogName;

// Value assigned later
DogName = "Tommy";

// Prints dog name
console.log(DogName);
// Output: Tommy


// =====================================
// SUMMARY
// =====================================
//
// 1. Explicit Type + Value
//    var employeeName: string = "Upendar";
//
// 2. Type Only
//    var name: string;
//    name = "Raju";
//
// 3. Value Only (Type Inference)
//    var hp = "Welcome";
//
// 4. No Type and No Value
//    var DogName;  // any type
//
// TypeScript automatically determines the type
// when a value is assigned during declaration.
// This feature is called Type Inference.
//