"use client";

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import LabelledInput from "./LabelledInput";

function SignupComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <a
          href="#"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 "
        >
          <div>
            <div className="px-10">
              <div className="text-3xl font-extrabold">Sign up</div>
            </div>
            <div className="pt-2">
              <LabelledInput
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
                label="Name"
                placeholder="harkirat@gmail.com"
              />
              <LabelledInput
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                label="Email"
                type="email"
                placeholder="harkirat@gmail.com"
              />
              <LabelledInput
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                label="Password"
                type="password"
                placeholder="123456"
              />
              <button
                onClick={async () => {
                  await axios.post("http://localhost:3000/api/user", {
                    name,
                    email,
                    password,
                  });
                  router.push("/");
                }}
                type="button"
                className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                Sign in
              </button>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default SignupComponent;
