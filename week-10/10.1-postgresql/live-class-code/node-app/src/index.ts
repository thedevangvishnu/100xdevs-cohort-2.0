// Write a function that creates a table users

import { Client } from "pg";

const client = new Client({
  host: "localhost",
  port: 5432,
  database: "test",
  user: "devang",
  password: "Musicmylove@1234",
});

async function doPostgresOperations() {
  try {
    await client.connect();

    const getQuery = `
        SELECT * FROM users
        WHERE email = $1
    `;
    const values = ["example2@gmail.com"];

    const result = await client.query(getQuery, values);

    if (result.rows.length > 0) {
      console.log("User found:", result.rows[0]);
      return result.rows[0];
    } else {
      console.log("No user found");
      return null;
    }
  } catch (error) {
    console.log("Something went wrong", error);
  }
}

doPostgresOperations();
