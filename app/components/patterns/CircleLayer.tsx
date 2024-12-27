"use client";

import * as React from "react";
import { CircleLayerProps } from "./types";

export const CircleLayer: React.FC<CircleLayerProps> = ({
  bgColor,
  children,
  padding,
  ariaLabel
}) => {
  return (
    <section
      className={`flex flex-col justify-center ${padding} ${bgColor} rounded-full max-md:px-5 max-md:max-w-full`}
      role="region"
      aria-label={ariaLabel}
    >
      {children}
    </section>
  );
};