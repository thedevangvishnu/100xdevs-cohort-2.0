function sum(num1, num2) {
  let result = num1 + num2;
  return result;
}

function displayResult(data) {
  console.log("Result of the sum is : " + data);
}

function displayResultPassively(data) {
  console.log("Sum's result is : " + data);
}

// Solution 1: Tweak the sum function to accept another function as an input
function newSum(num1, num2, functionToCall) {
  let result = num1 + num2;
  functionToCall(result);
}
newSum(4, 6, displayResultPassively); // Sum's result is : 10

// Solution 2
displayResult(sum(2, 3)); // Result of the sum is : 5

// You are only allowed to call one function after this
// How will you displayResult of a sum
