"use client";

import * as React from "react";
import { CircleLayer } from "./CircleLayer";
import { CircularDesignProps } from "./types";

export const CircularDesign: React.FC<CircularDesignProps> = ({
  initialRotation = 1.5707964261425558,
  maxWidth = 801
}) => {
  const layers = React.useMemo(() => [
    { bgColor: "bg-cyan-500 bg-opacity-10", padding: "px-12 py-12", ariaLabel: "Outer circle layer" },
    { bgColor: "bg-white", padding: "px-12 py-12", ariaLabel: "First inner circle layer" },
    { bgColor: "bg-cyan-500 bg-opacity-10", padding: "px-16 py-14", ariaLabel: "Second inner circle layer" },
    { bgColor: "bg-white", padding: "px-14 py-12", ariaLabel: "Third inner circle layer" },
    { bgColor: "bg-cyan-500 bg-opacity-10", padding: "px-14 py-12", ariaLabel: "Fourth inner circle layer" }
  ], []);

  return (
    <div className="fixed top-0 right-0 -z-10 pointer-events-none">
      <div 
        className="relative"
        style={{
          transform: `translate(50%, -50%) rotate(${initialRotation}rad)`,
          maxWidth: `${maxWidth}px`
        }}
      >
        {layers.map((layer, index) => (
          <CircleLayer
            key={`circle-layer-${index}`}
            bgColor={layer.bgColor}
            padding={layer.padding}
            ariaLabel={layer.ariaLabel}
          >
            {index === layers.length - 1 ? (
              <div 
                className="flex shrink-0 bg-white rounded-full h-[243px]"
                role="presentation"
                aria-hidden="true"
              />
            ) : (
              layers[index + 1] && <CircleLayer {...layers[index + 1]} />
            )}
          </CircleLayer>
        ))}
      </div>
    </div>
  );
};