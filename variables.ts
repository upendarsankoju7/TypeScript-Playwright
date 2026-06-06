// both type and initial value
var employeeName: string = "Upendar Sankoju";
console.log(employeeName); // Prints employee name

// both type and initial value
var employeeAge: number = 30;
console.log(employeeAge); // Prints employee age

// both type and initial value
var upendar: string = "Welcome to TypeScript programming";
console.log(upendar); // Prints welcome message

// only the type declaration
var rajuName: string; // Variable type is string

// initialize the value later
rajuName = "Hello Good Morning"; // Assign value
console.log(rajuName); // Prints greeting message

// only the type declaration
var employee: string; // Variable type is string

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

