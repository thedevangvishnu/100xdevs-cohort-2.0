import client from "./service/pg";
import { createTable } from "./queries/createTable";
import { insertUser } from "./queries/insert";
import { getUser } from "./queries/getUser";
import {
  createAddressesTable,
  insertAddress,
} from "./queries/addresses/addresses";

async function connectToPg() {
  await client.connect();
  console.log("Connected to postgresql...");
}

connectToPg();

// users db operation

// createTable();
// insertUser("aman", "aman@example.com", "password@aman");
// getUser("aman@example.com");

// addresses db operation

// createAddressesTable();
insertAddress({
  user_id: 2,
  street: "Kali Asthan",
  city: "Patna",
  country: "India",
  pincode: "800007",
});
