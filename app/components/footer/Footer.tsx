"use client";

import * as React from "react";
import { ColorStripe } from "./ColorStripe";
import { FooterLinks } from "./FooterLinks";

const stripeData = [
  { backgroundColor: "bg-sky-600", minHeight: "13px" },
  { backgroundColor: "bg-amber-500", minHeight: "13px" },
  { backgroundColor: "bg-sky-950", minHeight: "67px" }
];

export const Footer: React.FC = () => {
  return (
    <footer className="w-full mt-auto">
      <FooterLinks />
      {stripeData.map((stripe, index) => (
        <ColorStripe
          key={`stripe-${index}`}
          backgroundColor={stripe.backgroundColor}
          minHeight={stripe.minHeight}
        />
      ))}
    </footer>
  );
};