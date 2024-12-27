"use client";

import * as React from "react";
import { FooterSection } from "./FooterSection";

const footerSections = [
  {
    title: "Shop",
    links: [
      { label: "Restaurant Equipment", href: "/equipment" },
      { label: "Smallwares", href: "/smallwares" },
      { label: "Tableware", href: "/tableware" },
      { label: "Furniture", href: "/furniture" },
      { label: "Storage", href: "/storage" }
    ]
  },
  {
    title: "Support",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "Shipping", href: "/shipping" },
      { label: "Returns", href: "/returns" },
      { label: "Warranty", href: "/warranty" },
      { label: "FAQ", href: "/faq" }
    ]
  },
  {
    title: "Services",
    links: [
      { label: "Design & Build", href: "/design" },
      { label: "Installation", href: "/installation" },
      { label: "Maintenance", href: "/maintenance" },
      { label: "Financing", href: "/financing" },
      { label: "Training", href: "/training" }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" }
    ]
  }
];

export const FooterLinks = () => {
  return (
    <div className="bg-sky-600 py-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerSections.map((section) => (
            <FooterSection
              key={section.title}
              title={section.title}
              links={section.links}
            />
          ))}
        </div>
      </div>
    </div>
  );
};