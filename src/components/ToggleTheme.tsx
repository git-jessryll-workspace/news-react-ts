import { AppContextType } from "@/@types/news";
import { AppContext } from "@/context/AppProvider";
import React from "react";

const ToggleTheme = () => {
  const { theme, toggleDarkMode } = React.useContext(
    AppContext
  ) as AppContextType;
  return (
    <div className="bg-[#F4EEE0] w-[80px] flex justify-between items-center space-x-2 font-semibold antialiased border border-[#4F4557] rounded-full p-1">
      <div
        className={`h-full rounded-full w-[25px] text-center cursor-pointer transition-all ${
          theme === "dark" && "bg-blue-500"
        }`}
        onClick={toggleDarkMode}
      >
        🌙
      </div>
      <div
        className={`h-full rounded-full w-[25px] text-center cursor-pointer transition-all ${
          theme === "light" && "bg-blue-500"
        }`}
        onClick={toggleDarkMode}
      >
        🔆
      </div>
    </div>
  );
};

export default ToggleTheme;
