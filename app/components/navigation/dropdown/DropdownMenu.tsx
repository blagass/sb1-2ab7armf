"use client";

import * as React from "react";

interface DropdownMenuProps {
  isOpen: boolean;
  items: string[];
}

export const DropdownMenu = ({ isOpen, items = [] }: DropdownMenuProps) => {
  if (!isOpen) return null;

  // Create unique items array by adding index to duplicate items
  const uniqueItems = items.reduce((acc: string[], item, index) => {
    const existingCount = acc.filter(i => i.startsWith(item)).length;
    acc.push(existingCount > 0 ? `${item} ${existingCount + 1}` : item);
    return acc;
  }, []);

  return (
    <div 
      className="absolute top-full left-0 min-w-[200px] bg-white/95 backdrop-blur-sm 
        shadow-lg rounded-b-lg overflow-hidden z-50
        animate-in slide-in-from-top-2 duration-200"
    >
      <ul className="py-2">
        {uniqueItems.map((item) => {
          // Remove any numbering before creating the URL
          const baseItem = item.split(' ').slice(0, -1).join(' ') || item;
          return (
            <li key={item}>
              <a
                href={`/category/${baseItem.toLowerCase().replace(/\s+/g, '-')}`}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-50 
                  hover:text-sky-700 transition-colors"
              >
                {baseItem}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};