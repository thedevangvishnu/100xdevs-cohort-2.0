// Use fetch() to get data and understand then() method in context of promises

const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

console.log(fetchPromise); // 1st

fetchPromise.then((response) => {
  console.log(`Received response: ${response.status}`); // 3rd
});

console.log("Stared request..."); // 2nd
