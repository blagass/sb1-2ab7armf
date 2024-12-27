"use client";

import * as React from "react";
import { Button } from "./Button";

interface MarketingSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  reversed?: boolean;
}

export const MarketingSection: React.FC<MarketingSectionProps> = ({
  title,
  description,
  imageUrl,
  imageAlt,
  reversed = false,
}) => {
  return (
    <div className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 md:gap-8 items-center`}>
      <div className="w-full md:w-1/2">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-[250px] md:h-[400px] object-cover rounded-2xl"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-start">
        <h2 className="text-2xl md:text-3xl font-cantarell font-bold mb-4 text-[#002d61]">
          {title}
        </h2>
        <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
          {description}
        </p>
        <Button>Learn More</Button>
      </div>
    </div>
  );
};