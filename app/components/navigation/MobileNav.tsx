"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";
import { menuSections } from "./menu/menuData";
import { NavigationItem } from "./NavigationData";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  navigationItems: NavigationItem[];
}

export function MobileNav({ navigationItems }: MobileNavProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-4"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 w-80 bg-white shadow-lg z-50 rounded-b-lg">
          <div className="p-6">
            {/* Top Navigation Items */}
            <div className="mb-8">
              <h2 className="text-sm font-bold mb-3 text-sky-600">CATEGORIES</h2>
              <ul className="space-y-3">
                {navigationItems.map((item) => (
                  <li key={item.id}>
                    <button className="text-sm text-gray-700 hover:text-sky-600 transition-colors">
                      {item.label}
                    </button>
                    <ul className="ml-4 mt-2 space-y-2">
                      {item.items.map((subItem) => (
                        <li key={subItem}>
                          <a
                            href={`/category/${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-sm text-gray-600 hover:text-sky-600 transition-colors"
                          >
                            {subItem}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}