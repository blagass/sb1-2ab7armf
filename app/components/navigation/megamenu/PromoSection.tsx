"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";

interface PromoSectionProps {
  title: string;
  description: string;
}

export const PromoSection = ({ title, description }: PromoSectionProps) => {
  return (
    <div className="hidden md:flex flex-col justify-center p-6 bg-gradient-to-br 
      from-sky-50 to-white rounded-xl border border-sky-100">
      <h3 className="text-xl font-semibold text-sky-900">{title}</h3>
      <p className="mt-2 text-sm text-sky-700">{description}</p>
      <button className="mt-4 inline-flex items-center gap-2 text-sm font-medium 
        text-sky-600 hover:text-sky-700 transition-colors">
        Learn more <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}