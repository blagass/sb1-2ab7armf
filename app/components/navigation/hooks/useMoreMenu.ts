"use client";

import { useState, useEffect, useCallback } from 'react';
import { NavigationItem } from '../NavigationData';

// Constants for layout
const MENU_GAP = 0; // Since we're using gap in the parent flex container
const MORE_BUTTON_WIDTH = 45;
const ACCOUNT_SECTION_WIDTH = 100;
const RIGHT_PADDING = 16;
const RESERVED_WIDTH = ACCOUNT_SECTION_WIDTH + RIGHT_PADDING;
const MORE_RESERVED_WIDTH = RESERVED_WIDTH + MORE_BUTTON_WIDTH;
const DEFAULT_ITEM_WIDTH = 100;

export function useMoreMenu(items: NavigationItem[]) {
  const [visibleItems, setVisibleItems] = useState<NavigationItem[]>([]);
  const [hiddenItems, setHiddenItems] = useState<NavigationItem[]>([]);

  const getItemWidth = (item: NavigationItem): number => {
    if (!item.width) return DEFAULT_ITEM_WIDTH;
    
    const match = item.width.match(/w-\[(\d+)px\]/);
    return match ? parseInt(match[1], 10) : DEFAULT_ITEM_WIDTH;
  };

  const calculateVisibleItems = useCallback((containerWidth: number) => {
    const availableWidth = Math.max(0, containerWidth - MORE_RESERVED_WIDTH);
    let totalWidth = 0;
    let visibleCount = 0;

    // Calculate how many items can fit
    for (let i = 0; i < items.length; i++) {
      const itemWidth = getItemWidth(items[i]);
      const itemTotalWidth = itemWidth + (i > 0 ? MENU_GAP : 0);
      
      if (totalWidth + itemTotalWidth > availableWidth) {
        break;
      }
      
      totalWidth += itemTotalWidth;
      visibleCount++;
    }

    return {
      visible: items.slice(0, visibleCount),
      hidden: items.slice(visibleCount)
    };
  }, [items]);

  useEffect(() => {
    const updateVisibleItems = () => {
      const navContainer = document.querySelector('[role="menubar"]');
      if (!navContainer) return;

      const containerWidth = navContainer.clientWidth;
      const { visible, hidden } = calculateVisibleItems(containerWidth);
      
      setVisibleItems(visible);
      setHiddenItems(hidden);
    };

    updateVisibleItems();

    const resizeObserver = new ResizeObserver(updateVisibleItems);
    const navContainer = document.querySelector('[role="menubar"]');
    if (navContainer) {
      resizeObserver.observe(navContainer);
    }

    return () => {
      if (navContainer) {
        resizeObserver.unobserve(navContainer);
      }
    };
  }, [calculateVisibleItems]);

  return { visibleItems, hiddenItems };
}