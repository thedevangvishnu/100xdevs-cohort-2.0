import client from "./service/pg";
import { createTable } from "./queries/createTable";
import { insertUser } from "./queries/insert";
import { getUser } from "./queries/getUser";

async function connectToPg() {
  await client.connect();
  console.log("Connected to postgresql...");
}

connectToPg();
// createTable();
// insertUser("aman", "aman@example.com", "password@aman");
getUser("aman@example.com");
