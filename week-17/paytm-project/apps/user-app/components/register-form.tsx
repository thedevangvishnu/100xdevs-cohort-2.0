"use client";

import { FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";

import { AuthButton } from "./auth-button";
import { AuthCard } from "./auth-card";

export const RegisterForm = () => {
  return (
    <AuthCard
      title="Register"
      description="Welcome! Create a new account."
      secondaryActionLabel="Already have an account? Sign in"
      secondaryActionLink="/auth/login"
    >
      <div className="w-[300px]">
        <form action="" className="w-full flex flex-col px-3 md:px-0">
          <div className="flex flex-col gap-2">
            <div className="w-full flex items-center gap-2 border-b-2 border-slate-400 pb-2">
              <FaUser className="text-slate-500" />
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-transparent border-none outline-none text-white"
              />
            </div>
            {/* error */}
            <div className="h-12 self-end">
              <p className="text-rose-500 text-xs italic text-right">
                This field is required
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="w-full flex items-center gap-2 border-b-2 border-slate-400 pb-2">
              <MdEmail className="text-slate-500 text-xl" />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border-none outline-none text-white"
              />
            </div>
            {/* error */}
            <div className="h-12 self-end">
              <p className="text-rose-500 text-xs italic text-right">
                This field is required
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="w-full flex items-center gap-2 border-b-2 border-slate-400 pb-2">
              <FaLock className="text-slate-500" />
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-transparent border-none outline-none text-white"
              />
            </div>
            {/* error */}
            <div className="h-12 self-end">
              <p className="text-rose-500 text-xs italic text-right">
                This field is required
              </p>
            </div>
          </div>

          <AuthButton label="Sign up" onClick={() => {}} />
        </form>
      </div>
    </AuthCard>
  );
};
