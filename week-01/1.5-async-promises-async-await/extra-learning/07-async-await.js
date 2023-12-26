// Refactor the same fetch code in 03, using async-await and print the same result

async function fetchProducts() {
  try {
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(`Error fetching products: ${error}`);
  }
}

const promise = fetchProducts();
/*
promise is a Promise object and not an instance of Object 
hence, we cannot do this:
console.log(promise[0].name)
*/
promise.then((data) => {
  console.log(`${data[0].name} is priced at $${data[0].price}`);
});
