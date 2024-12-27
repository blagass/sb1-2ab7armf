"use client";

import React from 'react';

export function DecorativeCorner() {
  return (
    <div className="fixed top-0 right-0 z-10 w-[200px] h-[200px] overflow-hidden pointer-events-none">
      <div className="absolute top-0 right-0 w-[400px] h-[400px]">
        <div className="relative w-full h-full">
          {[1, 2, 3, 4, 5].map((index) => (
            <div
              key={index}
              className={`
                absolute top-0 right-0 rounded-full
                ${index % 2 === 0 ? 'bg-white' : 'bg-cyan-500/10'}
                transition-all duration-300 ease-in-out
              `}
              style={{
                width: `${100 - (index * 12)}%`,
                height: `${100 - (index * 12)}%`,
                transform: 'translate(50%, -50%)',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}