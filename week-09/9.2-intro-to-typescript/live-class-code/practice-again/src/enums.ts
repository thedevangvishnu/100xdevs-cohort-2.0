// Use enums and write a program that does something based on the constant values in the enums

enum Direction {
  Up,
  Down,
  Right,
  Left,
}

const doSomething = (input: Direction): void => {
  if (input === Direction.Down) {
    // do something
  }
};

doSomething(Direction.Down);
