/* **************************************************
    From: Scrumfluence
    Description: This module covers arrays, a form of
    data structure or list.
************************************************** */

/* --------------------------------------------------
    Arrays are one of many data structures. Arrays
    can be a list of any primitive data type.
    However the most common data types for arrays are
    strings and integers.

    Arrays are created with square brackets: []

    Below is an example of an array of strings.
-------------------------------------------------- */

let fruits = [ 'apple', 'banana', 'pear' ];



/* --------------------------------------------------
    Items within arrays can be accessed using square
    brackets and the index of the item. The index of
    the items in the array are zero based. Meaning
    the first item in the array has an index of 0.
    The second item has an index of 1 and so on.
-------------------------------------------------- */

console.log( fruits[0] );
console.log( fruits[1] );
console.log( fruits[2] );



/* --------------------------------------------------
    The length (size) of the array can be accessed
    using the length property. This is specially
    useful for creating "for" loops to iterate each
    item in the array.
-------------------------------------------------- */

console.log( "Number of Fruits = " + fruits.length );
