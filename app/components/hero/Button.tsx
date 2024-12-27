"use client";

import * as React from "react";
import { ButtonProps } from "./types";

export const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`
        inline-flex items-center justify-center
        bg-amber-500 hover:bg-amber-600
        text-white font-bold
        rounded-full
        transform hover:scale-[1.02]
        transition-all duration-300
        ${className}
      `}
      tabIndex={0}
      role="button"
      aria-label={typeof children === 'string' ? children : 'Action button'}
    >
      {children}
    </button>
  );
};