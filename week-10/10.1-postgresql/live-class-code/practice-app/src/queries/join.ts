// Create a function that returns the user with all their addreses

import client from "../service/pg";

export async function getUserWithAddress(userId: number) {
  try {
    const query = `
        SELECT u.id, u.username, a.street, a.city, a.country, a.pincode
        FROM users u
        JOIN addresses a
        ON u.id = a.user_id
        WHERE u.id = $1
    `;
    const result = await client.query(query, [userId]);

    if (result.rows.length > 0) {
      console.log("Found user with addresses", result.rows);
      return result.rows;
    } else {
      console.log("User not found");
      return null;
    }
  } catch (error) {
    console.log("Something went wrong", error);
  }
}
