"use client";

import * as React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white 
        font-semibold rounded-full transition-all duration-200 
        transform hover:scale-[1.02]"
    >
      {children}
    </button>
  );
};