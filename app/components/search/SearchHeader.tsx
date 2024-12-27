"use client";

import * as React from "react";
import { SearchBar } from "./SearchBar";
import { ChatAvailability } from "./ChatAvailability";
import { ContactInfo } from "./ContactInfo";

export const SearchHeader: React.FC = () => {
  return (
    <header 
      className="w-full max-w-[1440px] mx-auto px-4 py-2 relative z-20" 
      role="banner"
    >
      <div className="flex flex-col md:flex-row md:items-center gap-2">
        <div className="flex-1 min-w-0">
          <SearchBar />
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <ChatAvailability 
            iconSrc="https://cdn.builder.io/api/v1/image/assets/30da67ba93cf4ecd91ebd5b9d868bd6d/f29e7f3dee7e6e5eb8a0a181209f77c2151b8442493491e0b1bcf41b69a0b70f?apiKey=30da67ba93cf4ecd91ebd5b9d868bd6d&"
            text="Chat Available"
          />
          <div className="w-[140px]">
            <ContactInfo 
              phone="800-422-7818"
              hours="M-F, 8am-5pm PST"
            />
          </div>
        </div>
      </div>
    </header>
  );
}