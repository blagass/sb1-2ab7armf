"use client";

import * as React from "react";
import { ContactInfoProps } from "./types";

export const ContactInfo: React.FC<ContactInfoProps> = ({ phone, hours }) => {
  return (
    <div className="text-right text-zinc-600" role="contentinfo">
      <div className="text-sm font-medium">{phone}</div>
      <div className="text-xs">{hours}</div>
    </div>
  );
};