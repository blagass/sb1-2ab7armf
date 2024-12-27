"use client";

import * as React from "react";
import { CategoryList } from "./CategoryList";
import { PromoSection } from "./PromoSection";
import type { MegaMenuContentProps } from "./types";

export const MegaMenuContent = ({ data }: MegaMenuContentProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-8 p-6">
      <CategoryList categories={data.categories} />
      <PromoSection title={data.featured.title} description={data.featured.description} />
    </div>
  );
}