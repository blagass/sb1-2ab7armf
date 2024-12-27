import { CategoryBoxes } from "./components/categories/CategoryBoxes";
import { HeroSection } from "./components/hero/HeroSection";
import { ProductGrid } from "./components/ProductGrid";
import { MarketingSections } from "./components/marketing/MarketingSections";
import { CirclePattern } from "./components/patterns/CirclePattern";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="relative w-full md:w-[calc(100vw-239px)] ml-0">
        <HeroSection
          title="A WORLD OF SUPPLIES FOR YOUR RESTAURANT"
          subtitle="20% off all Front of House equipment and supplies starts now"
          buttonText="VIEW SALE"
          backgroundImage="https://cdn.builder.io/api/v1/image/assets%2F30da67ba93cf4ecd91ebd5b9d868bd6d%2F14a2201052c27e6142005be42c287e8bd1d6ddf48643d63382a69dd8cd86060e"
        />
      </div>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <CategoryBoxes />
      </div>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-fjalla text-gray-900 mb-8 text-center">
          Featured Products
        </h1>
        <ProductGrid />
      </div>
      <CirclePattern />
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <MarketingSections />
      </div>
    </div>
  );
}