// Chain promises in more sequential and readable manner
// Also, add a check for whether or not the server accepted the request successfully.

const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
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
  );
