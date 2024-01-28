"use strict";
function sum(a, b) {
    return a + b;
}
// type inference: Typescript being able to figure out type of something based on the types of its dependents
const value = sum(3, 2);
console.log("sum:", value);
