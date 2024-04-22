"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const imageBg = pathname === "/auth/register" ? "bg-1" : "bg-2";

  return (
    <div className="w-full h-screen flex bg-slate-950">
      <div className="relative hidden invisible md:block md:visible md:w-1/2">
        <Image
          src={`/images/${imageBg}.jpg`}
          alt="Register poster"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="w-full md:w-1/2 h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
