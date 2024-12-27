"use client";

import * as React from "react";

export const BackgroundPattern = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-50/80 to-white/50" />
      
      {/* Dot pattern */}
      <div className="absolute inset-0" 
        style={{
          backgroundImage: `radial-gradient(#e5e7eb 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />
      
      {/* Subtle waves */}
      <svg
        className="absolute w-full h-full opacity-[0.15]"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M0,50 C20,40 40,60 60,50 C80,40 100,60 100,50 L100,100 L0,100 Z"
          fill="url(#gradient)"
          className="animate-slow-pulse"
        >
          <animate
            attributeName="d"
            dur="8s"
            repeatCount="indefinite"
            values="
              M0,50 C20,40 40,60 60,50 C80,40 100,60 100,50 L100,100 L0,100 Z;
              M0,50 C20,60 40,40 60,50 C80,60 100,40 100,50 L100,100 L0,100 Z;
              M0,50 C20,40 40,60 60,50 C80,40 100,60 100,50 L100,100 L0,100 Z
            "
          />
        </path>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0284c7" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};