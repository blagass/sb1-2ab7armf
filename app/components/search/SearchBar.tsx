"use client";

import * as React from "react";
import { Search } from "lucide-react";

export const SearchBar: React.FC = () => {
  return (
    <div className="flex items-center gap-3 px-4 py-2 bg-transparent rounded-3xl shadow-sm border border-gray-200 w-full min-w-0">
      <Search className="w-4 h-4 text-zinc-400 flex-shrink-0" />
      <input
        type="search"
        placeholder="Search products..."
        className="w-full text-sm text-zinc-600 outline-none placeholder:text-zinc-400 bg-transparent truncate"
        aria-label="Search products"
      />
    </div>
  );
}