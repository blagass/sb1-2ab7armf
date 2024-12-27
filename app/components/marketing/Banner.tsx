"use client";

import * as React from "react";

export const Banner: React.FC = () => {
  return (
    <div className="w-full h-[200px] bg-[#00b0be] flex items-center justify-center">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Equipping Your Success
        </h2>
        <p className="mt-4 text-lg text-white/90">
          Professional kitchen equipment and supplies for every business
        </p>
      </div>
    </div>
  );
};