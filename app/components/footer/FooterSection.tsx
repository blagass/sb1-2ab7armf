"use client";

import * as React from "react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSectionProps {
  title: string;
  links: FooterLink[];
}

export const FooterSection: React.FC<FooterSectionProps> = ({ title, links }) => {
  return (
    <div>
      <h3 className="text-lg font-fjalla text-white mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-white/80 hover:text-white transition-colors text-sm font-cantarell"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};