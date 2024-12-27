"use client";

import * as React from "react";
import { ChatAvailabilityProps } from "./types";

export const ChatAvailability: React.FC<ChatAvailabilityProps> = ({ iconSrc, text }) => {
  return (
    <div 
      className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-xl shadow-sm"
      role="status"
      aria-live="polite"
    >
      <img
        loading="lazy"
        src={iconSrc}
        alt=""
        className="w-5 h-5 object-contain"
      />
      <span className="text-sm text-zinc-600">{text}</span>
    </div>
  );
};