// Create simple types and also use types to create unions and intersections

// 1 - create a function that takes a number or a string as an input and logs it to the console. Use unions

type InputForLogFn = number | string;

function logInput(input: InputForLogFn): void {
  console.log(input);
}

// 2 - create a type techLead that is an intersection of manager and employee types

type Employee2 = {
  name: string;
  startDate: string;
};

type Manager = {
  name: string;
  department: string;
  greet(): void;
};

type TechLead = Employee2 & Manager;

const andy: TechLead = {
  name: "Andy",
  startDate: "3rd Dec, 23",
  department: "Design",
  greet() {
    console.log("hello");
  },
};
