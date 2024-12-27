"use client";

import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import { getProducts } from "../lib/api";
import { transformProduct, filterKitchenProducts } from "../lib/utils/product";
import type { Product, ProductDisplay } from "../lib/types";

export const ProductGrid = () => {
  const [products, setProducts] = useState<ProductDisplay[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        const kitchenProducts = filterKitchenProducts(data);
        const transformedProducts = kitchenProducts.map(transformProduct);
        setProducts(transformedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="bg-gray-200 rounded-[20px] h-[340px]" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};