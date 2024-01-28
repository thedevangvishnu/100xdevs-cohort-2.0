interface User {
  firstName: string;
  lastName: string;
  age: number;
}

function isLegal(user: User) {
  if (user.age > 18) {
    return true;
  } else {
    return false;
  }
}

isLegal({
  firstName: "Devang",
  lastName: "Vishnu",
  age: 25,
});
