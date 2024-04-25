"use client";

interface AuthButtonProps {
  label: string;
  type?: string;
  onClick?: any;
}

export const AuthButton = ({ label, type, onClick }: AuthButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full h-11 uppercase bg-cyan-500 rounded-3xl text-black font-semibold hover:bg-cyan-400 duration-200 mb-4"
    >
      {label}
    </button>
  );
};
