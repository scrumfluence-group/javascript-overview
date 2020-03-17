/* **************************************************
    From: Scrumfluence
    Description: This module covers creating and
    using JSON objects.
************************************************** */

/* --------------------------------------------------
    JSON objects are a collection of keys and values.
    The value of a key can be anything from a string,
    integer, boolean, array or another JSON object.

    JSON objects are created with curly brackets: {}

    Below is a JSON object with a key called
    "company" with the value "Scrumfluence".
-------------------------------------------------- */

let data = {
    company: "Scrumfluence"
};



/* --------------------------------------------------
    JSON object keys can be accessed using the
    key name.
-------------------------------------------------- */

console.log("Company: " + data.company);



/* --------------------------------------------------
    JSON objects cannot have duplicate keys. Below
    is an example of adding additional keys of
    various data types.
-------------------------------------------------- */

data.type = "Business"; // <--- Adding a string.

data.employees = ['Yoshi', 'Mario', 'Luigi']; // <--- Adding an array.

data.address = { // <--- Adding another JSON object.
    street: "123 Penn Drive",
    city: "Detroit",
    state: "Michigan"
};



/* --------------------------------------------------
    Now our JSON object looks like this:

    data = {
        company: "Scrumfluence",
        type: "Business",
        employees: [ 'Yoshi', 'Mario', 'Luigi' ],
        address: {
            street: "123 Penn Drive",
            city: "Detroit",
            state: "Michigan"
        }
    }

    So to access the "Mario" value from the array we
    would have to do the following.
-------------------------------------------------- */

console.log( data.employees[1] );



/* --------------------------------------------------
    To access the "city" key which is nested in the
    "address" key we would have to do the following.
-------------------------------------------------- */

console.log( data.address.city );