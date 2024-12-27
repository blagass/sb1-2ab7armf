"use client";

import * as React from "react";
import type { FeaturedSectionProps } from "./types";

export const FeaturedSection = ({ featured }: FeaturedSectionProps) => {
  return (
    <div className="hidden md:block">
      <div className="relative rounded-lg overflow-hidden transition-transform duration-200 ease-in-out hover:scale-[1.02]">
        <img
          src={featured.image}
          alt={featured.title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-lg font-bold">{featured.title}</h3>
          <p className="text-sm mt-1 opacity-90">{featured.description}</p>
        </div>
      </div>
    </div>
  );
}