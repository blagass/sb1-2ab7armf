"use client";

import * as React from "react";

interface HeroButtonProps {
  text: string;
  onClick?: () => void;
}

export function HeroButton({ text, onClick }: HeroButtonProps) {
  return (
    <button
      onClick={onClick}
      className="self-start px-16 pt-1.5 pb-9 mt-14 text-white bg-amber-500 rounded-[463px] hover:bg-amber-600 transition-colors max-md:px-5 max-md:mt-10"
      aria-label={text}
    >
      {text}
    </button>
  );
}