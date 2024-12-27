"use client";

import * as React from "react";
import { MenuItem } from "./MenuItem";
import { Promotion } from "./Promotion";
import { MegaMenuSectionProps } from "./types";

export const MegaMenuSection: React.FC<MegaMenuSectionProps> = ({ 
  title,
  items,
  promotion
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-8 p-4 md:p-8">
      <div className="w-full md:w-[300px]">
        <h2 className="text-lg font-bold text-gray-900 mb-4">{title}</h2>
        <nav className="grid grid-cols-2 md:grid-cols-1 gap-2">
          {items.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </nav>
      </div>
      <div className="flex-1 max-w-[400px] hidden md:block">
        <Promotion {...promotion} />
      </div>
    </div>
  );
}