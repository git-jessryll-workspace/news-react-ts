import React from "react";
import Logo from "@/assets/coffee-cup.png";
import ToggleTheme from "./ToggleTheme";

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutPage: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header className="bg-white">
        <nav className="flex justify-between mx-auto pt-6 px-20 items-center">
          <div>
            <img src={Logo} className="h-14 w-14" />
          </div>
          <div className="flex items-center space-x-14">
            <ToggleTheme/>
            <div>
              <button className="bg-blue-600 text-white py-2 px-4 text-sm rounded-md font-semibold">
                Sign in
              </button>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex justify-center mt-10">
        <div className="w-1/2 p-3">{children}</div>
      </main>
    </div>
  );
};

export default LayoutPage;
