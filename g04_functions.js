/* **************************************************
    From: Scrumfluence
    Description: This module covers the concept of
    creating and using functions.
************************************************** */

/* --------------------------------------------------
    Functions are used to modularize an applications
    or scripts code while also reducing code
    duplication. Functions are broken up into two
    parts:
        - Function signature.
        - Function body.

    Everything within the curly braces is considered
    the function body. Below is an example of a
    function called "math".
-------------------------------------------------- */

function math() { // <--- Function signature.

    // The two lines (statements) below make up the function body.

    let mathTotal = 5 + 5;
    console.log("Math Total = " + mathTotal);
}



/* --------------------------------------------------
    Functions are not active unless they are
    "called". Below is an example of the "math"
    function call.
-------------------------------------------------- */

math(); // <--- Calling "math" function.



/* --------------------------------------------------
    Function(s) can be called within another
    function's body. Below we have 2 functions. We
    will only call the function addition but the
    function subtraction will be called from within
    the function addition.
-------------------------------------------------- */

function addition() {

    let additionTotal = 6 + 6;
    console.log("Addition Total = " + additionTotal);

    subtraction(); // <--- Calling "subtraction" function.
}

function subtraction() {

    let subtractionTotal = 20 - 6;
    console.log("Subtraction Total = " + subtractionTotal);
}

addition(); // <--- Calling "addition" function.



/* --------------------------------------------------
    Variables declared within a function cannot be
    accessed from outside of the function's body.
    Also variables declared within a function are
    unquie to that function, so variables with the
    same name can still be declared outside the
    function or within another function.
-------------------------------------------------- */

let total = 16; // <--- 1st total variable.

function evaluateTotal() {

    let total = 18; // <--- 2nd total variable.
    console.log("2nd Total = " + total); // <--- References the 2nd total variable.
}

console.log("1st Total = " + total); // <--- References the 1st total variable.
evaluateTotal();
