interface Person {
  firstName: string;
  lastName: string;
  age?: number;
  isAdmin?: boolean;
  greet(phrase: string): void;
}
