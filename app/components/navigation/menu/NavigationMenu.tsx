"use client";

import * as React from "react";
import { MenuSection } from "./MenuSection";
import { menuSections } from "./menuData";

export function NavigationMenu() {
  return (
    <div
      className="flex flex-col max-w-[239px]"
      role="navigation"
      aria-label="Main navigation"
    >
      {menuSections.map((section, index) => (
        <div key={section.title} className={index > 0 ? "mt-9" : ""}>
          <MenuSection {...section} />
        </div>
      ))}
    </div>
  );
}