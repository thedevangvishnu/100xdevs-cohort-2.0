import { Client } from "pg";

export async function getClient() {
  const client = new Client(
    "postgres://girbgwxw:e-dkB6ZLnAINLiRlAPGGyhEZgh0z0UqP@rain.db.elephantsql.com/girbgwxw"
  );
  await client.connect();
  return client;
}
