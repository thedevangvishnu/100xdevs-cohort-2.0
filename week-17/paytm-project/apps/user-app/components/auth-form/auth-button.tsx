"use client";

import { BeatLoader } from "react-spinners";

interface AuthButtonProps {
  label: string;
  type?: "button" | "submit" | "reset";
  onClick?: any;
  isLoading: boolean;
}

export const AuthButton = ({
  label,
  type,
  onClick,
  isLoading,
}: AuthButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isLoading}
      className="w-full h-11 uppercase bg-cyan-500 rounded-3xl text-black font-semibold hover:bg-cyan-400 duration-200 mb-4 flex items-center justify-center"
    >
      {isLoading ? <BeatLoader size={10} /> : label}
    </button>
  );
};
