import client from "../service/pg";

export async function getUser(email: string) {
  try {
    const query = `
        SELECT * FROM users WHERE email = $1;
    `;
    const result = await client.query(query, [email]);

    if (result.rows.length > 0) {
      console.log("User found: ", result.rows[0]);
      return result.rows[0];
    } else {
      console.log("User not found");
      return null;
    }
  } catch (error) {
    console.log("Something went wrong", error);
  }
}
