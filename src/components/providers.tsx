"use client";

import { type ReactNode } from "react";
import { ParallaxProvider } from "react-scroll-parallax";

export function AppProviders({ children }: { children: ReactNode }) {
  // This component ensures the Parallax context is available to all pages.
  return <ParallaxProvider>{children}</ParallaxProvider>;
}