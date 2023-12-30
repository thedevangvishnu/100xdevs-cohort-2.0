/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  const promise = new Promise((resolve, reject) => {
    if (n < 0) {
      throw new Error("Seconds must not be negative");
    }

    setTimeout(() => {
      resolve();
    }, n * 1000);
  });
  return promise;
}

module.exports = wait;
