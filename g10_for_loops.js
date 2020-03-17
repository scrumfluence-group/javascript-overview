/* **************************************************
    From: Scrumfluence
    Description: This module covers for loops.
************************************************** */

/* --------------------------------------------------
    For loops are broken up into 3 parts:
    - Start
    - End Condition
    - Increment

    Most of the time the "start" and "increment"
    will be as follows:
    - Start: let i = 0;
    - Increment: i++

    The end condition simply tells the program when
    to exit the loop. It just be a condition that
    results in a true or false value. The example
    below shows a simple for loop that will loop
    10 times.
-------------------------------------------------- */

console.log( '\n' + "Loop 1 --------------------" + '\n' );

for (let i = 1; i < 11; i++) {

    console.log( i );
}



/* --------------------------------------------------
    Below is an example of looping through the list
    of items in an array. Notice how the "start" and
    "end condition" are set.
    
    Since item indexes for arrays start at 0, we set
    our loop "start" as follows:
    - Start: let i = 0;

    Since we can get the length (size) of the array
    (which is 1 based) we can set our "end condition"
    as follows:
    - End Condition: i < array.length;
-------------------------------------------------- */

let fruits = [ 'apple', 'banana', 'cherry', 'pear', 'watermelon' ];

console.log( '\n' + "Loop 2 --------------------" + '\n' );

for (let i = 0; i < fruits.length; i++) {

    console.log( fruits[i] );
}