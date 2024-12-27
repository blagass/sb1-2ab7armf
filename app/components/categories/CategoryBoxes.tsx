"use client";

import * as React from "react";
import { CategoryBox } from "./CategoryBox";
import { 
  ChefHat, 
  UtensilsCrossed, 
  Package, 
  Wine, 
  Sparkles,
  Sofa
} from "lucide-react";

const categories = [
  {
    Icon: ChefHat,
    label: "Cooking Equipment"
  },
  {
    Icon: UtensilsCrossed,
    label: "Food Prep"
  },
  {
    Icon: Package,
    label: "Storage"
  },
  {
    Icon: Wine,
    label: "Tableware"
  },
  {
    Icon: Sparkles,
    label: "Cleaning"
  },
  {
    Icon: Sofa,
    label: "Furniture"
  }
];

export const CategoryBoxes: React.FC = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-20 mb-5 relative z-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
        {categories.map((category, index) => (
          <CategoryBox
            key={index}
            Icon={category.Icon}
            label={category.label}
          />
        ))}
      </div>
    </div>
  );
}