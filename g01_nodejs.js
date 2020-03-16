/* **************************************************
    From: Scrumfluence
    Description: This module covers the basics needed
    to start a NodeJs project from scatch.
************************************************** */

/* --------------------------------------------------
    NodeJs projects require a package.json file in
    the project root directory. This package.json
    file can be generate by running the following
    command "npm init --yes" (without quotes).

    Below is an example of a package.json file:

    {
        "name": "javascript-overview",
        "version": "1.0.0",
        "description": "",
        "main": "index.js",
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"
        },
        "repository": {
            "type": "git",
            "url": "git+https://github.com/scrumfluence-group/javascript-overview.git"
        },
        "keywords": [],
        "author": "",
        "license": "ISC",
        "bugs": {
            "url": "https://github.com/scrumfluence-group/javascript-overview/issues"
        },
        "homepage": "https://github.com/scrumfluence-group/javascript-overview#readme"
    }
-------------------------------------------------- */

/* --------------------------------------------------
    Any JavaScript file can be ran using the
    following command: node {RELATIVE-PATH-TO-FILE}

    Here the {RELATIVE-PATH-TO-FILE} must be replaced
    by the path to the JavaScript file.

    For example lets say there is a "index.js" file 
    at the root of our project. The command to run
    that file would be "node index.js".

    For example lets say there is another file called
    "debug.js" inside a folder called "scripts". Then
    to run that file we would use the command
    "node scripts/debug.js".
-------------------------------------------------- */

/* --------------------------------------------------
    To print out anything into the console
    (or terminal) we can use the following JavaScript
    statement: console.log("Hello World!");

    Run this file using the command
    "node g01_nodejs.js" to see "Hello World!" printed
    out into the console (or terminal).
-------------------------------------------------- */

console.log("Hello World!");
