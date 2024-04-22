import { SecondaryAction } from "./secondary-action";

interface AuthCardProps {
  title: string;
  description?: string;
  secondaryActionLabel?: string;
  secondaryActionLink?: string;
  children: React.ReactNode;
  hasBorder?: boolean;
  hasBg?: boolean;
}

export const AuthCard = ({
  title,
  description,
  children,
  secondaryActionLabel,
  secondaryActionLink,
  hasBg,
  hasBorder,
}: AuthCardProps) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="flex flex-col items-center gap-2 mb-8">
        <h1 className="text-4xl md:text-5xl text-cyan-500 font-semibold">
          {title}
        </h1>
        <p className="text-slate-300 font-medium">{description}</p>
      </div>

      <div>{children}</div>

      {secondaryActionLabel && secondaryActionLink && (
        <SecondaryAction
          label={secondaryActionLabel}
          link={secondaryActionLink}
        />
      )}
    </div>
  );
};
