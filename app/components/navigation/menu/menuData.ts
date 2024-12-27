import { ChefHat } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface MenuSectionData {
  title: string;
  items: string[];
  textColor: string;
  icon?: LucideIcon;
}

export const menuSections: MenuSectionData[] = [
  {
    title: "POPULAR PRODUCTS",
    items: ["SMALLWARES", "OVENS", "TABLES", "KITCHEN TOOLS", "REFRIGERATORS"],
    textColor: "text-[#00b0be]"
  },
  {
    title: "NEW ARRIVALS",
    items: ["SMALLWARES", "OVENS", "TABLES", "KITCHEN TOOLS", "REFRIGERATORS"],
    textColor: "text-[#00b0be]"
  },
  {
    title: "MY KITCHEN",
    items: ["DESIGN + BUILD", "FINANCING", "INSTALLATION", "MAINTAINANCE", "UPGRADE"],
    textColor: "text-amber-500",
    icon: ChefHat
  }
];