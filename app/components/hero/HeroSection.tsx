"use client";

import * as React from "react";
import { HeroSectionProps } from "./types";

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  buttonText,
  backgroundImage
}) => {
  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Restaurant supplies and equipment"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative h-full max-w-[1440px] mx-auto px-8">
        <div className="h-full flex items-center justify-end">
          <div className="max-w-[500px] text-right">
            <h1 className="text-4xl font-bold text-sky-950">
              {title}
            </h1>
            <p className="mt-6 text-2xl font-semibold text-cyan-500">
              {subtitle}
            </p>
            <div className="mt-8">
              <button
                className="px-16 py-4 bg-amber-500 hover:bg-amber-600 
                  text-white text-lg font-medium rounded-full 
                  transition-colors duration-300"
              >
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};