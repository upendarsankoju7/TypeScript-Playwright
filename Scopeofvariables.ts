// Function declaration
function myFunction()
{
    // if block starts
    if (true)
    {
        // 'var' is function-scoped
        // This x exists only inside myFunction()
        var x = 10;

        // 'let' is block-scoped
        // This y can be accessed only within this if block
        let y = 15;

        // Prints value of y
        console.log(y); // Output: 15

        // Prints local x value
        console.log(x); // Output: 10
    }
}

// Global variable x
// This is different from the x declared inside myFunction()
var x = 20;

// Calling the function
myFunction();