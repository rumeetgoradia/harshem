"use client";

import Image from "next/image";
import { ParallaxBanner } from "react-scroll-parallax";
import LandingImage from "public/images/home/landing.jpg";

export function LandingHero() {
  return (
    <div className="relative text-white">
      <ParallaxBanner
        // The layers array defines the content of the banner.
        // They are layered from bottom to top.
        layers={[
          // Layer 1: The background image with the parallax effect
          {
            image: LandingImage.src,
            speed: -20, // Negative speed makes it move up slower than the page
            className: "bg-black",
          },
          // Layer 2: A semi-transparent black overlay
          {
            className: "bg-black/75",
          },
          // Layer 3: The text content
          {
            className: "container max-w-[64rem] px-8 flex justify-center mx-auto", // Center content
            children: (
              <div className="flex h-full flex-col justify-center">
                <h1 className="mb-2 text-4xl font-bold leading-none text-primary md:text-6xl lg:text-7xl">
                  Harshem Family Practice
                </h1>
                <h2 className="text-2xl font-medium md:text-4xl">
                  Dr. Rita U. Goradia, MDPC
                </h2>
              </div>
            ),
          },
        ]}
        // Sets the height of the entire hero section
        style={{ height: "45vh" }}
      />
    </div>
  );
}