import NavBar from "@/components/layout/NavBar";
import React from "react";

interface IProps {
  children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <div className="flex w-full h-full gap-8">
      <NavBar />
      <div className="flex-grow p-8">{children}</div>
    </div>
  );
};

export default Layout;
