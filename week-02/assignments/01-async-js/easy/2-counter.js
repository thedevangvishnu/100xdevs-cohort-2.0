let counter = 0;

const incrementCounter = () => {
  counter++;
  console.log(counter);

  setTimeout(incrementCounter, 1000);
};

incrementCounter();
