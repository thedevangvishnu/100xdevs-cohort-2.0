import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="w-full p-2 text-center bg-slate-200">
        20% discount on signing up
      </div>
      {children}
    </div>
  );
};

export default Layout;
