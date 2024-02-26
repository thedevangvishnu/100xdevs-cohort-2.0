interface Person {
  firstName: string;
  lastName: string;
  age?: number;
  isAdmin?: boolean;
  greet(phrase: string): void;
}

class Employee implements Person {
  firstName: string;
  lastName: string;
  age?: number;

  constructor(firstName: string, lastName: string, age?: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  greet(): void {
    console.log(`Hello. My name is ${this.firstName} ${this.lastName}`);
  }
}

const e = new Employee("Devang", "Vishnu");
console.log(e.greet());
