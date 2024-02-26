const identify = <T>(input: T): T => {
  return input;
};

const answer = identify<string>("mystring");
const answer2 = identify<number>(124);
const answer3 = identify<boolean>(true);
