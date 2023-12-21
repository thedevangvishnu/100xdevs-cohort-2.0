// Write a program that prints the name of male users in a complex object

const users = [
  {
    firstName: "Devang",
    gender: "male",
  },
  {
    firstName: "Ankit",
    gender: "male",
  },
  {
    firstName: "Alice",
    gender: "female",
  },
  {
    firstName: "Soni",
    gender: "female",
  },
];

for (let i = 0; i < users.length; i++) {
  if (users[i]["gender"] === "male") {
    console.log(users[i]["firstName"]);
  }
}

// output: Devang, Ankit
