import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { CardWrapper } from "./card-wrapper";

export const ErrorCard = () => {
  return (
    <CardWrapper
      title="Error"
      description="Something went wrong!"
      backButtonLabel="Back to Login page"
      backButtonHref="/auth/login"
    >
      <div className="w-full flex justify-center">
        <ExclamationTriangleIcon className="text-destructive h-6 w-6" />
      </div>
    </CardWrapper>
  );
};
