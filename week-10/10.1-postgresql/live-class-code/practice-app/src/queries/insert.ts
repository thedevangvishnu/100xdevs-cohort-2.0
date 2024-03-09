import client from "../service/pg";

export async function insertUser(
  username: string,
  email: string,
  password: string
) {
  try {
    const query = `
        INSERT INTO users (username, email, password)
        VALUES ($1, $2, $3);
    `;

    const values = [username, email, password];
    const result = await client.query(query, values);
    console.log(result);
  } catch (error) {
    console.log("Something went wrong", error);
  }
}
