import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutPage: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex justify-center">
      <div className="w-1/2 mt-10 p-3">
        <div className="flex justify-center pb-2">
          <h3 className="font-bold text-xl text-gray-700">My News Coffee</h3>
        </div>
        {children}
      </div>
    </div>
  );
};

export default LayoutPage;
