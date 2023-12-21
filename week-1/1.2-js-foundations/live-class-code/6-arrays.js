// Write a program that prints all the even numbers in an array
// Write a program to print the biggest number in an array

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    console.log(i);
  }
}
// Output: 0, 2, 4, 6, 8

let biggestNumber = array[0];
for (let i = 0; i < array.length; i++) {
  if (array[i] > biggestNumber) {
    biggestNumber = array[i];
  }
}
console.log("The biggest number of this array is " + biggestNumber); // 9
