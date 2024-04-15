"use client";

import React, { useCallback, useEffect, useState, useTransition } from "react";
import { CardWrapper } from "./card-wrapper";
import { BeatLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";
import { newVerification } from "@/app/actions/new-verification";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";

const NewVerificationForm = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  console.log({ token });

  const onSubmit = useCallback(() => {
    if (token) {
      newVerification(token)
        .then((data) => {
          setError(data.error);
          setSuccess(data.success);
        })
        .catch(() => {});
    } else {
      setError("Missing token!");
      return;
    }
  }, [token]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      title="Verification"
      description="Confirming your email"
      backButtonLabel="Back to Login Page"
      backButtonHref="/auth/login"
    >
      <div className="w-full flex items-center justify-center">
        {!success && !error && <BeatLoader />}
        <FormError message={error} />
        <FormSuccess message={success} />
      </div>
    </CardWrapper>
  );
};

export default NewVerificationForm;
