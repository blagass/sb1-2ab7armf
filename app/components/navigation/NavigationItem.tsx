"use client";

import * as React from "react";
import { DropdownMenu } from "./dropdown/DropdownMenu";
import { ChevronDown } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface NavigationItemProps {
  id: string;
  label: string;
  width?: string;
  items: string[];
  isActive: boolean;
  onMenuOpen: (id: string | null) => void;
  className?: string;
  icon?: LucideIcon;
  fontWeight?: string;
}

export function NavigationItem({ 
  id,
  label, 
  width = "w-auto", 
  items,
  isActive,
  onMenuOpen,
  className = "",
  icon: Icon,
  fontWeight = "font-normal"
}: NavigationItemProps) {
  const timeoutRef = React.useRef<NodeJS.Timeout>();

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    onMenuOpen(id);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      onMenuOpen(null);
    }, 150);
  };

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div 
      className={`relative flex items-center ${width} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`flex items-center gap-1.5 py-2 whitespace-nowrap hover:bg-sky-700/50 rounded-sm transition-colors
          ${id === 'equipment' ? 'pl-[30px] pr-2' : id === 'more' ? 'pl-2 pr-[30px]' : 'px-2'}`}
        aria-expanded={isActive}
        aria-haspopup="true"
      >
        {Icon && <Icon className="w-3.5 h-3.5 text-white" />}
        <span className={`text-xs font-fjalla text-white ${fontWeight}`}>
          {label}
        </span>
        <ChevronDown 
          className={`w-3 h-3 text-white transition-transform duration-200
            ${isActive ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>
      <DropdownMenu isOpen={isActive} items={items} />
    </div>
  );
}