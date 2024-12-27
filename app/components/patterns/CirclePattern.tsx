"use client";

import * as React from "react";

export const CirclePattern: React.FC = () => {
  return (
    <div className="relative w-full">
      {/* Circle SVG - Hidden on smaller screens where it would overlap text */}
      <div className="absolute right-0 top-full -translate-y-1/2 translate-x-1/3 z-10 
        hidden lg:block">
        <svg 
          width="390" 
          height="390" 
          viewBox="0 0 590 590" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="max-w-full h-auto"
        >
          <circle cx="295" cy="295" r="295" fill="#0077CD"/>
          <path 
            d="M-5.15794e-05 295C-2.30929e-05 132.076 132.076 2.30929e-05 295 5.15794e-05V5.15794e-05C457.924 8.0066e-05 590 132.076 590 295L590 301.239L-5.26702e-05 301.239L-5.15794e-05 295Z" 
            fill="white"
          />
          <circle cx="295.002" cy="295" r="172.9" fill="white"/>
          <path 
            d="M122.102 295C122.102 199.51 199.512 122.1 295.002 122.1V122.1C390.492 122.1 467.902 199.51 467.902 295L467.902 301.239L122.102 301.239L122.102 295Z" 
            fill="#00B0BE"
          />
        </svg>
      </div>
      <div className="w-full h-[200px] bg-[#00b0be]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-left max-w-[600px]">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Equipping Your Success
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Professional kitchen equipment and supplies for every business
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};