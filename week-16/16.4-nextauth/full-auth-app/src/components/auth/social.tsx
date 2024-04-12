"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";

export const Social = () => {
  return (
    <div className="w-full flex items-center gap-2">
      <Button
        variant="outline"
        size="lg"
        className="w-full bg-neutral-200 hover:bg-neutral-100"
        onClick={() => {}}
      >
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button
        variant="outline"
        size="lg"
        className="w-full bg-neutral-200 hover:bg-neutral-100"
        onClick={() => {}}
      >
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  );
};
