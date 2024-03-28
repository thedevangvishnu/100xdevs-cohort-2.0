import { ReactNode } from "react";
import Header from "../components/Header";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full h-screen">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
