"use strict";
function sumOfAges(user1, user2) {
    return user1.age + user2.age;
}
const mohit = { name: "Mohit", age: 24 };
const rahul = { name: "Rahul", age: 26 };
const result = sumOfAges(mohit, rahul);
console.log("Sum of their ages is:", result);
