export interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  category: string;
}

export interface CategoryItemProps {
  id: string;
  icon: string;
  name: string;
  description: string;
}

export interface FeaturedItem {
  title: string;
  description: string;
  image: string;
}

export interface MegaMenuData {
  categories: CategoryItemProps[];
  featured: FeaturedItem;
}

export interface MegaMenuContentProps {
  data: MegaMenuData;
}

export interface CategoryListProps {
  categories: CategoryItemProps[];
}

export interface FeaturedSectionProps {
  featured: FeaturedItem;
}