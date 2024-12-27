"use client";

import * as React from "react";
import { LucideIcon } from "lucide-react";

interface CategoryBoxProps {
  Icon: LucideIcon;
  label: string;
}

export const CategoryBox: React.FC<CategoryBoxProps> = ({ Icon, label }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg 
      border border-gray-200 hover:border-sky-200 hover:shadow-md transition-all 
      duration-200 cursor-pointer min-h-[100px] group">
      <Icon className="w-8 h-8 mb-2 text-sky-600 group-hover:text-sky-700 
        transition-colors" />
      <span className="text-sm font-medium text-gray-700 text-center">
        {label}
      </span>
    </div>
  );
};