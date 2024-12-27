"use client";

import Image from "next/image";

interface ProductCardProps {
  title: string;
  price: number;
  imageUrl: string;
}

export const ProductCard = ({ title, price, imageUrl }: ProductCardProps) => {
  return (
    <div className="group relative w-full bg-white rounded-[20px] border border-solid border-[#00b0be] transition-transform hover:scale-105 h-full">
      {/* Mobile layout (horizontal) */}
      <div className="md:hidden flex h-[160px]">
        <div className="w-[160px] relative flex-shrink-0">
          <div className="relative w-full h-full">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-contain p-4"
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex-1 p-4 flex flex-col justify-between">
          <p className="font-cantarell text-black text-sm mb-2 line-clamp-2">
            {title}
          </p>
          <p className="font-cantarell font-bold text-black text-xl">
            ${price}
          </p>
        </div>
      </div>

      {/* Tablet/Desktop layout (vertical) */}
      <div className="hidden md:block h-[340px]">
        <div className="absolute top-[30px] left-0 right-0 h-[200px] flex items-center justify-center">
          <div className="relative w-[200px] h-[200px]">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
        <div className="absolute inset-x-0 h-[90px] bottom-0 bg-[#00b0be36] rounded-b-[20px] px-4 py-2">
          <p className="font-cantarell text-black text-sm mb-2 line-clamp-2">
            {title}
          </p>
          <p className="font-cantarell font-bold text-black text-xl">
            ${price}
          </p>
        </div>
      </div>
    </div>
  );
};