export const InputBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <label>{children}</label>
      <input type="text" />
    </div>
  );
};
