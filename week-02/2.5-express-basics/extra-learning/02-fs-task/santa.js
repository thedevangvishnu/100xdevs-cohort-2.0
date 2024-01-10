// Solve this problem: https://adventofcode.com/2015/day/1

// Problem 1 - to find the floor number Santa is at after following the directional inptus
// Problem 2 - to find the character position of the input at which Santa first reached to basement 1
// ( - up 1 floor and ) - down 1 floor

const fs = require("fs");

// Problem 1
const findAnswerOfProblemOne = () => {
  fs.readFile("inputs.txt", "utf-8", (err, data) => {
    const inputs = data.split(""); // converting string from inputs.txt to an array.
    const floorNumber = inputs.reduce((acc, currentInput) => {
      currentInput === "(" ? acc++ : acc--;
      return acc;
    }, 0);
    console.log(`Santa is at ${floorNumber} floor number`);
  });
};

// Problem 2
const findAnswerOfProblemTwo = () => {
  fs.readFile("./inputs.txt", "utf-8", (err, data) => {
    const inputs = data.split("");
    let floorNumber = 0;
    let characterPosition = 0;
    inputs.some((currentInput, index) => {
      currentInput === "(" ? floorNumber++ : floorNumber--;
      characterPosition = index + 1; // Position is not 0th indexed. 1st position is array[0]
      return floorNumber < 0;
    });

    console.log(`Santa entered first basement at ${characterPosition}`);
  });
};

findAnswerOfProblemOne();
findAnswerOfProblemTwo();
