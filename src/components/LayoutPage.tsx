import React from "react";
import AppLogo from "./AppLogo";
import MobileMenu from "./MobileMenu";

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutPage: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="pb-10">
      <header>
        <nav className="relative flex md:justify-between mx-auto pt-6 px-3 md:px-20 items-center">
          <AppLogo />
          <MobileMenu />
        </nav>
      </header>
      <main className="flex justify-center mt-10">
        <div className="w-full md:w-1/2 p-4 transition-all bg-[#F4EEE0] border border-[#4F4557] dark:bg-[#4F4557] rounded-none md:rounded-xl text-[#4F4557] dark:text-[#F4EEE0]">
          {children}
        </div>
      </main>
    </div>
  );
};

export default LayoutPage;
