"use client";

import * as React from "react";

interface ColorStripeProps {
  backgroundColor: string;
  minHeight: string;
}

export const ColorStripe: React.FC<ColorStripeProps> = ({ backgroundColor, minHeight }) => {
  return (
    <div 
      className={`flex w-full ${backgroundColor}`}
      style={{ minHeight }}
      role="presentation"
    />
  );
};