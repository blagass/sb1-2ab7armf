"use client";

import * as React from "react";
import { HeroProps } from "./types";
import { HeroButton } from "./HeroButton";

export function Hero({ title, subtitle, buttonText, backgroundImage }: HeroProps) {
  return (
    <section 
      className="flex relative flex-col items-end px-4 sm:px-8 lg:px-12 pt-12 sm:pt-16 lg:pt-20 
        pb-32 sm:pb-48 lg:pb-64 w-full min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] 
        rounded-2xl sm:rounded-[34px] overflow-hidden"
      role="banner"
    >
      <img
        loading="lazy"
        src={backgroundImage}
        alt=""
        className="object-cover absolute inset-0 size-full"
        aria-hidden="true"
      />
      <div className="relative flex flex-col mb-0 max-w-full w-[584px] max-md:mb-2.5">
        <div className="backdrop-blur-md bg-white/20 p-6 sm:p-8 rounded-xl sm:rounded-2xl 
          shadow-lg border border-white/30">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-sky-950 max-md:max-w-full">
            {title}
          </h1>
          <p className="mt-4 sm:mt-6 lg:mt-8 text-lg sm:text-xl lg:text-2xl font-bold text-cyan-500 
            max-md:max-w-full [text-shadow:_0_0_15px_rgba(255,255,255,0.9)]">
            {subtitle}
          </p>
          <div className="mt-6 sm:mt-8">
            <HeroButton text={buttonText} />
          </div>
        </div>
      </div>
    </section>
  );
}