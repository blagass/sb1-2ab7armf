"use client";

import * as React from 'react';
import { navigationItems } from './NavigationData';
import { NavigationItem } from './NavigationItem';
import { AccountSection } from './AccountSection';
import { MobileNav } from './MobileNav';
import { useMoreMenu } from './hooks/useMoreMenu';

export function Navigation() {
  const [activeMenu, setActiveMenu] = React.useState<string | null>(null);
  const { visibleItems, hiddenItems } = useMoreMenu(navigationItems);
  const showMore = hiddenItems.length > 0;

  return (
    <nav className="w-full relative z-50" role="navigation" aria-label="Main navigation">
      <div className="max-w-[1440px] mx-auto flex items-center">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/30da67ba93cf4ecd91ebd5b9d868bd6d/2a90eb9f24a84db9baefc3823e98a323b6b6ac04ac67cd784cecc20a3703052c?apiKey=30da67ba93cf4ecd91ebd5b9d868bd6d&"
          className="h-14 w-[200px] object-contain pl-2"
          alt="Company logo"
        />
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-row self-stretch px-2 my-auto ml-auto text-4xl bg-sky-600 text-white grow-0 max-h-[50px] min-h-[50px] rounded-l-[32px] w-[calc(100%-200px)]">
          <div role="menubar" className="flex flex-row items-center flex-1 gap-0">
            {/* First item always stays left */}
            {visibleItems.length > 0 && (
              <NavigationItem
                key={visibleItems[0].id}
                {...visibleItems[0]}
                isActive={activeMenu === visibleItems[0].id}
                onMenuOpen={setActiveMenu}
              />
            )}
            {/* Remaining items are spaced evenly */}
            <div className="flex-1 flex justify-end items-center gap-0">
              {visibleItems.slice(1).map((item) => (
                <NavigationItem
                  key={item.id}
                  {...item}
                  isActive={activeMenu === item.id}
                  onMenuOpen={setActiveMenu}
                />
              ))}
            </div>
          </div>
          <div className="flex items-center flex-shrink-0">
            {showMore && (
              <div className="mr-8">
                <NavigationItem
                  id="more"
                  label="MORE"
                  width="w-[45px]"
                  items={hiddenItems.flatMap(item => item.items)}
                  isActive={activeMenu === 'more'}
                  onMenuOpen={setActiveMenu}
                />
              </div>
            )}
            <AccountSection />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden ml-auto">
          <MobileNav navigationItems={navigationItems} />
        </div>
      </div>
    </nav>
  );
}