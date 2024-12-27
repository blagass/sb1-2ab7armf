"use client";

import * as React from "react";

interface MegaMenuOverlayProps {
  onClose: () => void;
}

export const MegaMenuOverlay = ({ onClose }: MegaMenuOverlayProps) => {
  return (
    <div
      className="fixed inset-0 bg-black/10 backdrop-blur-[2px] z-40 
        transition-opacity duration-300 ease-out"
      onClick={onClose}
    />
  );
}