"use client";

import * as React from "react";
import { MarketingSection } from "./MarketingSection";

export const MarketingSections: React.FC = () => {
  return (
    <div className="w-full space-y-16 sm:space-y-24 py-12 sm:py-24">
      <MarketingSection
        title="Professional Kitchen Equipment"
        description="Discover our premium selection of commercial-grade kitchen equipment designed for professional chefs and restaurants. From high-performance ovens to precision cooking tools, we have everything you need to elevate your culinary creations."
        imageUrl="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=2000"
        imageAlt="Professional kitchen equipment"
      />
      
      <MarketingSection
        title="Expert Design & Installation"
        description="Our team of kitchen design experts will help you create the perfect layout for your commercial kitchen. We offer professional installation services to ensure your equipment is set up correctly and safely."
        imageUrl="https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?auto=format&fit=crop&q=80&w=2000"
        imageAlt="Kitchen design and installation"
        reversed
      />
    </div>
  );
}