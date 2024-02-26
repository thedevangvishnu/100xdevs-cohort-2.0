// Given an array of users, filter out the user that are legal and log to console

interface User2 {
  name: string;
  age: number;
}

const filterUser = (users: User2[]): void => {
  const legalUsers = users.filter((user) => user.age >= 18);
  console.log(legalUsers);
};

const users: User2[] = [
  {
    name: "Devang",
    age: 24,
  },
  {
    name: "Abheest",
    age: 17,
  },
  {
    name: "Naman",
    age: 23,
  },
];

filterUser(users);
