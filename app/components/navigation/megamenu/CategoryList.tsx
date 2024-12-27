"use client";

import * as React from "react";
import { CategoryItem } from "./CategoryItem";
import type { CategoryListProps } from "./types";

export const CategoryList = ({ categories }: CategoryListProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {categories.map((category) => (
        <CategoryItem key={category.id} {...category} />
      ))}
    </div>
  );
}