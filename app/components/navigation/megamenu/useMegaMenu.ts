"use client";

import * as React from "react";
import { menuCategories } from "./menuData";
import type { MegaMenuData } from "./types";

export const useMegaMenu = (category: string) => {
  const menuData = React.useMemo<MegaMenuData>(() => {
    return menuCategories[category] || menuCategories.default;
  }, [category]);

  const handleMouseEnter = (e: React.MouseEvent) => {
    const parentItem = document.querySelector('[aria-expanded="true"]');
    if (parentItem) {
      parentItem.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
    }
  };

  return { menuData, handleMouseEnter };
}