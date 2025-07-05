"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "~/constants/navigation";

export function DesktopMenu() {
  const pathname = usePathname();
  return (
    <nav className="hidden md:flex gap-8">
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.title}
          href={item.path}
          className={`text-sm font-medium transition-colors hover:text-primary ${
            pathname === item.path ? "" : "text-muted-foreground"
          }`}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
