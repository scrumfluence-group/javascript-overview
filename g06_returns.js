/* **************************************************
    From: Scrumfluence
    Description: This module covers return values
    from functions and how to assign them to external
    variables.
************************************************** */

/* --------------------------------------------------
    Returns are used to retrieve a value from inside
    a function. Below is an example of retrieving the
    total value calculated from the math function.

    There are 2 rules to returns:
    - Return must be the last statement.
    - Return value does not have to be used.
-------------------------------------------------- */

function math( preTaxTotal, taxPercentage ) {

    let total = preTaxTotal * taxPercentage;
    return total; // <--- Returns the value stored inside the "total" variable.
}



/* --------------------------------------------------
    Below is an example of calling the math function
    but not using the return value.
-------------------------------------------------- */

math( 55 , 10 ); // <--- Math function is called but return value is not used.



/* --------------------------------------------------
    Below is an example of calling the math function
    and assigning the return value into another
    variable.
-------------------------------------------------- */

let total = math( 7 , 21 ); // <--- Store returned value in another variable called "total".
console.log( total );
