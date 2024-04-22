import Link from "next/link";

export const SecondaryAction = ({
  label,
  link,
}: {
  label: string;
  link: string;
}) => {
  return (
    <Link
      href={link}
      prefetch={false}
      className="text-slate-300 hover:text-slate-100 duration-150 font-medium"
    >
      {label}
    </Link>
  );
};
