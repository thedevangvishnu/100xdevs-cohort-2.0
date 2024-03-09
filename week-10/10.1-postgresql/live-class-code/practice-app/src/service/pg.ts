import { Client } from "pg";

const client = new Client({
  host: "localhost",
  port: 5432,
  database: "100xdevs-practice",
  user: "devang",
  password: "Musicmylove@1234",
});

export default client;
