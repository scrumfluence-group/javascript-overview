/* **************************************************
    From: Scrumfluence
    Description: This module covers using
    if-statments for logic selection.
************************************************** */

/* --------------------------------------------------
    If statements are used to introduce logic
    selection to your code.

    Below is an example of an "if-statement" that
    prints out "scary" into the console if the
    value in the "animal" variable matches "Tiger".
-------------------------------------------------- */

let animal = "tiger";
let type = "cub";

if ( animal == "tiger" ) {

    console.log( "scary" );
}



/* --------------------------------------------------
    Below is an "if-else-statement" where if the
    "animal" variable value matches "Tiger" 
    (uppercase) we print out "scary" into the console
    and if they do NOT match then we print out
    "try again" into the console.
-------------------------------------------------- */

if ( animal == "Tiger" ) {

    console.log( "scary" );

} else {

    console.log( "try again" );
}



/* --------------------------------------------------
    Below is an "if-else-if-else" statement 
    (i.e. logic) block. These blocks can be expanded
    with additional "else-if" statements at any time.

    Comparison operators include:
    - Two values match: ==
    - Two values do NOT match: !=
    - One value is greater than the other: >
    - One value is less than the other: <
    - One value is greater than or equals the other: >=
    - One value is less than or equals the other: <=
-------------------------------------------------- */

if ( animal == "tiger" ) {

    console.log( "intimidating" );

} else if ( animal == "panda" ) {

    console.log( "cute" );

} else if ( animal == "chimp" ) {

    console.log( "meh" );

} else {

    console.log( "try again" );
}



/* --------------------------------------------------
    Note 1: Once a condition is met and the logic
    inside the "if" or "else if" or "else" statement
    is executed, the code skips the rest of the
    statements in the entire block.

    Note 2: A new logic block can be started using
    "if" statement. The "else if" and "else" can only
    be attached to an existing logic block.

    Note 3: All conditions must result in either a
    true or false boolean value.

    Note 4: If statments can have multiple conditions
    as shown in the example below.

    Note 5: If statement conditions can be grouped
    using AND or separated using OR operators:
    - AND operator: &&
    - OR operator: ||
-------------------------------------------------- */

if ( animal == "panda" || animal == "koala" ) {

    console.log( "cute" );

} else if ( animal == "tiger" && type == "cub" ) {

    console.log( "cute" );

} else {

    console.log( "meh" );
}
