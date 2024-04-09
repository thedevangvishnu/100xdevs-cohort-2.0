interface User {
  id: string;
  name: string;
  age: number;
  email: string;
  password: string;
  address: string;
  createdAt: Date;
}

type UserProfile = Pick<User, "name" | "age" | "address">;
type UserProfileOptional = Partial<UserProfile>;

// user is only allowed to update their name, age and address
function updateUserDetails(user: UserProfileOptional) {
  console.log(`Name: ${user.name}, Address: ${user.address}`);
}

updateUserDetails({ name: "Sachin" });
