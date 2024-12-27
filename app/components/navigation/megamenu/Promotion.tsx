"use client";

import * as React from "react";
import { PromotionProps } from "./types";

export const Promotion: React.FC<PromotionProps> = ({ title, image }) => {
  return (
    <div className="flex flex-col">
      <h3 className="text-2xl md:text-3xl font-bold text-amber-500 text-center mb-4">
        {title}
      </h3>
      <div className="relative overflow-hidden rounded-2xl bg-gray-100">
        <img
          loading="lazy"
          src={image}
          alt="Promotional item"
          className="w-full h-auto object-cover aspect-[1.24] hover:scale-105 transition-transform duration-300"
          width={400}
          height={322}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
    </div>
  );
}