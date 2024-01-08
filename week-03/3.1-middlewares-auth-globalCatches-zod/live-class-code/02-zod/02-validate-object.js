// // Write the zod schema for a function that should validate user input based on whether the input is an object of username and password which also have their own respective validation
// username must be an email
// password must be 8 characters
const zod = require("zod");
const validateInput = (object) => {
  const schema = zod.object({
    username: zod.string().email({ message: "Invalid email address" }),
    password: zod
      .string()
      .min(8, { message: "Password must contain minimum 8 characters" }),
  });

  const result = schema.safeParse(object);

  if (result.success) {
    console.log("Success: ", result.data);
  } else {
    result.error.errors.forEach((error) =>
      console.error(`Error: ${error.message}`)
    );
  }
};

validateInput({ username: "abc@gamil.com", password: "asfdasdfh2134123@vc" }); // success: true
validateInput({ username: "abcgamil.com", password: "asfsafsdfdsfdsfdsf" }); // success: false
validateInput({ username: "abc@gamil.com", password: "asfd" }); // success: false
