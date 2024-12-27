import { Utensils, ChefHat } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface NavigationItem {
  id: string;
  label: string;
  width?: string;
  items: string[];
  icon?: LucideIcon;
  fontWeight?: string;
}

export const navigationItems: NavigationItem[] = [
  { 
    id: 'equipment', 
    label: 'RESTAURANT EQUIPMENT',
    items: ['Cooking Equipment', 'Food Prep', 'Refrigeration', 'Beverage Equipment', 'Storage & Transport'],
    icon: Utensils,
    fontWeight: 'font-extrabold'
  },
  { 
    id: 'disposables', 
    label: 'DISPOSABLES',
    items: ['Containers', 'Utensils', 'Bags', 'Food Packaging', 'Cleaning Supplies']
  },
  { 
    id: 'furniture', 
    label: 'FURNITURE', 
    width: 'w-[99px]',
    items: ['Tables', 'Chairs', 'Booths', 'Outdoor', 'Storage']
  },
  { 
    id: 'storage', 
    label: 'STORAGE', 
    width: 'w-[74px]',
    items: ['Shelving', 'Containers', 'Racks', 'Carts', 'Bins']
  },
  { 
    id: 'tabletop', 
    label: 'TABLETOP', 
    width: 'w-[93px]',
    items: ['Dinnerware', 'Flatware', 'Glassware', 'Serveware', 'Table Accessories']
  },
  { 
    id: 'janitorial', 
    label: 'JANITORIAL', 
    width: 'w-[111px]',
    items: ['Cleaning Supplies', 'Paper Products', 'Waste Management', 'Safety', 'Equipment']
  },
  { 
    id: 'smallwares', 
    label: 'SMALLWARES', 
    width: 'w-[124px]',
    items: ['Kitchen Tools', 'Bakeware', 'Bar Supplies', 'Food Prep', 'Storage']
  }
];