"use client";

import * as React from "react";
import { MenuItemProps } from "./types";

export const MenuItem: React.FC<MenuItemProps> = ({ icon, text }) => {
  return (
    <button 
      className="flex items-center gap-3 w-full p-2 hover:bg-gray-50 rounded-lg transition-colors duration-200 group"
      role="menuitem"
    >
      <div className="w-6 h-6 flex-shrink-0">
        <img
          loading="lazy"
          src={icon}
          alt=""
          className="w-full h-full object-contain"
          width={24}
          height={24}
        />
      </div>
      <span className="text-base md:text-lg font-medium text-cyan-500 group-hover:text-cyan-600 truncate">
        {text}
      </span>
    </button>
  );
}