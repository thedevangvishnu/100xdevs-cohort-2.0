// Create all functions that will perform specific operations related to addresses table
import client from "../../service/pg";

export async function createAddressesTable() {
  try {
    const query = `
    CREATE TABLE addresses (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        street VARCHAR(50) NOT NULL,
        city VARCHAR(50) NOT NULL,
        country VARCHAR(50) NOT NULL,
        pincode VARCHAR(50) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );
`;

    const result = await client.query(query);
    console.log("Created addresses table", result);
  } catch (error) {
    console.log("Something went wrong", error);
  }
}

type AddressType = {
  user_id: number;
  street: string;
  city: string;
  country: string;
  pincode: string;
};

export async function insertAddress(address: AddressType) {
  try {
    const { user_id, street, city, country, pincode } = address;

    const query = `
    INSERT INTO addresses (user_id, street, city, country, pincode) 
    VALUES ($1, $2, $3, $4, $5);
  `;

    const values = [user_id, street, city, country, pincode];
    const result = await client.query(query, values);
    console.log(result);
  } catch (error) {
    console.log("Something went wrong", error);
  }
}
