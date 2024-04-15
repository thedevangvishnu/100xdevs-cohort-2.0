"use client";

import { Card, CardHeader, CardContent, CardFooter } from "../ui/card";
import { Header } from "./header";
import { Social } from "./social";
import { BackButton } from "./back-button";

interface CardWrapperProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export const CardWrapper = ({
  children,
  title,
  description,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className="min-w-[300px] md:w-[500px] shadow-md">
      <CardHeader>
        <Header title={title} description={description as string} />
      </CardHeader>
      <CardContent>{children}</CardContent>

      <CardFooter className="flex flex-col gap-2 ">
        {showSocial && <Social />}
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
};
