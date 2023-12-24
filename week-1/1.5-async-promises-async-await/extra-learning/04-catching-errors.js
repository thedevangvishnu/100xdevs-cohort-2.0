// Use the catch() method to handle error

const fetchPromise = fetch(
  "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    return response.json();
  })
  .then((data) =>
    console.log(`${data[0].name} are priced at $${data[0].price}.`)
  )
  .catch((error) => {
    console.error(`Could not get products: ${error}`); // logs error to the console.
  });
