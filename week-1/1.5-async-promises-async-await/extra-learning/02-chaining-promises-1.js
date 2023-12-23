// Build upon the last file and understand "promise chaining"
// Convert the response into json object and log some result (name and the price of the first item) to the console.

const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

fetchPromise.then((response) => {
  const jsonData = response.json();
  jsonData.then((data) => {
    console.log(`${data[0].name} are priced at $${data[0].price}.`);
  });
});

// here we have chained promises, but it's sort of a callback hell using then() calls.
