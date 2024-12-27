import type { Product, ProductDisplay } from '../types';

export function transformProduct(product: Product): ProductDisplay {
  return {
    id: product.id,
    title: product.title,
    // Adjust price to be more realistic for kitchen equipment
    price: Math.round(product.price * 10),
    imageUrl: product.image
  };
}

export function filterKitchenProducts(products: Product[]): Product[] {
  return products.filter(product => 
    product.category.toLowerCase().includes('electronics') || 
    product.category.toLowerCase().includes('home')
  );
}