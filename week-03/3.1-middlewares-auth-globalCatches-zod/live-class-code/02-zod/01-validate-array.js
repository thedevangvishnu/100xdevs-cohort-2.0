// Write the schema for a function that should validate user input based on whether the input is an array of numbers or not

const zod = require("zod");

const validateInput = (array) => {
  const schema = zod.array(zod.number());
  const response = schema.safeParse(array);
  console.log(response);
};

validateInput([1, 2, 3]); // success: true
validateInput([1, 2, "3"]); // success: false
validateInput(["1", "2", "3"]); // success: false
