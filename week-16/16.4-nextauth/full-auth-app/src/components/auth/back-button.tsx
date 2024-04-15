"use client";

import { Button } from "../ui/button";
import Link from "next/link";

interface BackButtonProps {
  label: string;
  href: string;
}

export const BackButton = ({ label, href }: BackButtonProps) => {
  return (
    <div>
      <Button variant="link">
        <Link href={href} prefetch={false}>
          {label}
        </Link>
      </Button>
    </div>
  );
};
