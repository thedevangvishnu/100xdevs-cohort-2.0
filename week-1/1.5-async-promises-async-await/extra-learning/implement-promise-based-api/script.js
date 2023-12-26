// select elements
const username = document.getElementById("name");
const delay = document.getElementById("delay");
const alarmBtn = document.getElementById("alarm-btn");
const output = document.getElementById("output");

//   implement alarm api using Promise constructor
const alarm = (name, delay) => {
  const promise = new Promise((resolve, reject) => {
    if (delay < 0) {
      throw new Error("Delay should not be a negative number!");
    }

    setTimeout(() => {
      resolve(`Wake up, ${name}!`);
    }, delay);
  });
  return promise;
};

// print the output message using chaining of then() and catch()
// alarmBtn.addEventListener("click", () => {
//   alarm(username.value, delay.value)
//     .then((message) => {
//       output.textContent = message;
//       username.value = "";
//       delay.value = "";

//       //   clear the output message after 5sec
//       setTimeout(() => {
//         output.textContent = "";
//       }, 5000);
//     })
//     .catch(
//       (error) =>
//         (output.textContent = `Couldn't set alarm due to some error: ${error}`)
//     );
// });

// print the output message using asyn-await
alarmBtn.addEventListener("click", async () => {
  try {
    const message = await alarm(username.value, delay.value);
    output.textContent = message;
    username.value = "";
    delay.value = "";

    setTimeout(() => {
      output.textContent = "";
    }, 5000);
  } catch (error) {
    output.textContent = `Couldn't set alarm due to some error: ${error}`;
  }
});
