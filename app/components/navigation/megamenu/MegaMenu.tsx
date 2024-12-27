"use client";

import * as React from "react";
import { MegaMenuContent } from "./MegaMenuContent";
import { MegaMenuOverlay } from "./MegaMenuOverlay";
import { useMegaMenu } from "./useMegaMenu";
import type { MegaMenuProps } from "./types";

export const MegaMenu = ({ isOpen, onClose, category }: MegaMenuProps) => {
  const { menuData, handleMouseEnter } = useMegaMenu(category);

  return (
    <>
      {isOpen && (
        <>
          <MegaMenuOverlay onClose={onClose} />
          <div 
            className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50 
              transition-all duration-300 ease-out transform origin-top
              data-[state=closed]:opacity-0 data-[state=closed]:scale-y-95
              data-[state=open]:opacity-100 data-[state=open]:scale-y-100"
            data-state={isOpen ? 'open' : 'closed'}
            onMouseEnter={handleMouseEnter}
          >
            <div className="max-w-[1440px] mx-auto">
              <MegaMenuContent data={menuData} />
            </div>
          </div>
        </>
      )}
    </>
  );
}