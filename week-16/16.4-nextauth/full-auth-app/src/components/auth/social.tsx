"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const Social = () => {
  const onBtnClick = async (provider: string) => {
    await signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className="w-full flex items-center gap-2">
      <Button
        variant="outline"
        size="lg"
        className="w-full bg-neutral-200 hover:bg-neutral-100"
        onClick={() => onBtnClick("google")}
      >
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button
        variant="outline"
        size="lg"
        className="w-full bg-neutral-200 hover:bg-neutral-100"
        onClick={() => onBtnClick("github")}
      >
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  );
};
