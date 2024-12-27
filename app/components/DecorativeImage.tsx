"use client";

import * as React from "react";

interface DecorativeImageProps {
  src: string;
  alt: string;
}

export const DecorativeImage: React.FC<DecorativeImageProps> = ({ src, alt }) => {
  return (
    <div className="fixed top-0 right-0 -z-10 pointer-events-none">
      <div className="relative">
        <img
          src={src}
          alt={alt}
          className="w-[300px] h-[300px] object-cover"
          style={{
            transform: 'translate(50%, -50%)',
          }}
        />
      </div>
    </div>
  );
};