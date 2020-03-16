/* **************************************************
    From: Scrumfluence
    Description: This module covers the concept of
    declaring and using parameters within functions.
************************************************** */

/* --------------------------------------------------
    Parameters are another form of variable(s) that
    are unquie to the function they are assigned to.
    Parameters are declared within the parentheses of
    the function signature.
    
    There are 2 things to keep in mind:

        - Parameters do not require
        the word "let" in front of them as normal
        variables do.

        - Parameters are comma separated and can
        take in any data type or object.

    Below is an example of the math function that
    has 2 parameters called "value1" and "value2".
-------------------------------------------------- */

function math( value1, value2 ) { // <--- Function signature with parameters.

    // Below we use both parameters to calculate the total.

    let total = value1 + value2;
    console.log("Total = " + total);
}



/* --------------------------------------------------
    In the examples below we are calling the "math"
    function multiple times while passing in
    different parameter values.
-------------------------------------------------- */

math( 5 , 5 );
math( 71 , 22 );
math( -20 , 7 );
