"use client";

import type { MegaMenuData } from "./types";

export const menuCategories: Record<string, MegaMenuData> = {
  default: {
    categories: [
      {
        id: "smallwares",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>',
        name: "Smallwares",
        description: "Essential kitchen tools and utensils"
      },
      {
        id: "ovens",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>',
        name: "Ovens",
        description: "Professional grade ovens and ranges"
      },
      {
        id: "refrigeration",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>',
        name: "Refrigeration",
        description: "Commercial refrigerators and freezers"
      }
    ],
    featured: {
      title: "Spring Sale Event",
      description: "Save up to 20% on selected kitchen equipment",
      image: "" // Removed image as requested
    }
  }
};