import React, { useState, useMemo } from "react";
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

export const Assignment3 = () => {
  const [items, setItems] = useState([
    { name: "Chocolates", value: 10 },
    { name: "Chips", value: 20 },
    { name: "Onion", value: 30 },
    { name: "Tomato", value: 30 },
    // Add more items as needed
  ]);

  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");
  const [value, setValue] = useState(0);

  // Your code starts here
  const totalValue = useMemo(() => {
    console.log("claculating value");
    let totalValue = 0;
    items.forEach((item) => {
      totalValue += item.value;
    });
    return totalValue;
  }, [items]);
  // Your code ends here

  const addItemToList = () => {
    setItems([...items, { name, value }]);
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - Price: ${item.value}
          </li>
        ))}
      </ul>
      <p>Total Value: {totalValue}</p>
      <button onClick={() => setCounter(counter + 1)}>
        Count: {counter}
      </button>{" "}
      <br />
      <input
        type="text"
        placeholder="Enter item"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter price"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={addItemToList}>Add item to the list</button>
    </div>
  );
};
