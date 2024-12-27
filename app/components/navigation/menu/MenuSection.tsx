"use client";

import { MenuSectionData } from './types';

export function MenuSection({ title, items, textColor, icon: Icon }: MenuSectionData) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        {Icon && <Icon className={`w-4 h-4 ${textColor}`} />}
        <h2 className={`text-sm font-bold tracking-wide ${textColor}`}>{title}</h2>
      </div>
      <ul className="flex flex-col gap-2.5">
        {items.map((item) => (
          <li key={item}>
            <button className="text-xs text-gray-600 hover:text-[#00b0be] transition-colors duration-200">
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}