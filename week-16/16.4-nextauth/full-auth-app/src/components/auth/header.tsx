export const Header = ({ label }: { label: string }) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className="text-3xl md:text-4xl font-bold text-neutral-900">
        Auth App
      </h1>
      <p>{label}</p>
    </div>
  );
};
