import React from "react";
import Logo from "@/assets/coffee-cup.png";
import ToggleTheme from "./ToggleTheme";

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutPage: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="pb-10">
      <header>
        <nav className="relative flex md:justify-between mx-auto pt-6 px-3 md:px-20 items-center">
          <div className="flex items-center space-x-3">
            <div>
              <img src={Logo} className="h-14 w-14" />
            </div>
            <div>
              <h3
                className="font-bold mt-4 text-2xl text-[#393646] dark:text-[#F4EEE0]"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                News Coffee
              </h3>
            </div>
          </div>
          <div className="absolute right-4 bottom-2 block md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-8 h-8 dark:text-[#F4EEE0] text-[#4F4557]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          <div className="items-center space-x-14 pt-5 hidden md:flex">
            <ToggleTheme />
            <div>
              <button className="bg-[#4F4557] dark:bg-[#F4EEE0] text-[#F4EEE0] dark:text-[#4F4557] py-2 px-4 text-sm rounded-md font-semibold">
                Sign in
              </button>
            </div>
          </div>
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
