"use client";

import * as React from "react";

interface HeroImageProps {
  src: string;
  className?: string;
}

export function HeroImage({ src, className = "" }: HeroImageProps) {
  return (
    <img
      loading="lazy"
      src={src}
      alt=""
      className={`object-contain w-full aspect-[1.56] rounded-[34px] ${className}`}
      role="presentation"
    />
  );
}