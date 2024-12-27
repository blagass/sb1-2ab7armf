"use client";

import * as React from "react";
import type { CategoryItemProps } from "./types";

export const CategoryItem = ({ icon, name, description }: CategoryItemProps) => {
  return (
    <a
      href={`/category/${name.toLowerCase()}`}
      className="group flex items-center gap-4 p-3 rounded-lg hover:bg-sky-50/50 
        transition-all duration-200 ease-out"
    >
      <div className="w-10 h-10 rounded-full bg-sky-100/50 p-2.5 
        transition-colors group-hover:bg-sky-100">
        <div className="w-full h-full text-sky-600 group-hover:text-sky-700 
          transition-colors" dangerouslySetInnerHTML={{ __html: icon }} />
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-900 group-hover:text-sky-700 
          transition-colors">
          {name}
        </h3>
        <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">
          {description}
        </p>
      </div>
    </a>
  );
}