interface User {
  firstName: string;
  lastName: string;
  age: number;
  email?: string;
}

function isLegal(user: User): boolean {
  if (user.age >= 18) {
    return true;
  } else {
    return false;
  }
}

const devang: User = {
  firstName: "Devang",
  lastName: "Vishnu",
  age: 24,
};

console.log("Can vote:", isLegal(devang));
