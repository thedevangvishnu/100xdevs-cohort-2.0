interface User {
  name: string;
  age: number;
}

function sumOfAges(user1: User, user2: User) {
  return user1.age + user2.age;
}

const mohit: User = { name: "Mohit", age: 24 };
const rahul: User = { name: "Rahul", age: 26 };

const result = sumOfAges(mohit, rahul);

console.log("Sum of their ages is:", result);
