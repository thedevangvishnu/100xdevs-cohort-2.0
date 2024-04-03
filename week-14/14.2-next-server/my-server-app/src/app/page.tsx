import axios from "axios";
import client from "./libs/prismadb";

async function getUserDetails() {
  try {
    const user = await client.user.findFirst({});
    return { email: user?.email, name: user?.name };
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
}

export default async function Home() {
  const userData = await getUserDetails();

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>Name: {userData?.name}</div>
          <div>Email: {userData?.email}</div>
        </div>
      </div>
    </div>
  );
}
