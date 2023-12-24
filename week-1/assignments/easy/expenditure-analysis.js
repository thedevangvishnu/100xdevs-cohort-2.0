/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let output = [];

  // list of all the categories
  let allCategories = [];
  for (const transaction of transactions) {
    allCategories.push(transaction.category);
  }

  // remove the repeated category items
  const categories = allCategories.filter(
    (item, index) => allCategories.indexOf(item) === index
  );

  // add the price of those items that are listed in transactions list and whose category matches the category-item in categories list.
  for (let i = 0; i < categories.length; i++) {
    let outputItem = {}; // each outputItem has two properties: category and totalSpent
    outputItem.category = `${categories[i]}`;

    let priceOfAllItemsInCategory = 0;

    for (let j = 0; j < transactions.length; j++) {
      if (categories[i] === transactions[j].category) {
        priceOfAllItemsInCategory += transactions[j].price;
      }
    }

    outputItem.totalSpent = priceOfAllItemsInCategory;

    output.push(outputItem);
  }
  return output;
}

module.exports = calculateTotalSpentByCategory;
