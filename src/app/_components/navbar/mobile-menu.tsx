"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "~/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import { NAV_ITEMS } from "~/constants/navigation";
import { Logo } from "./logo";

export function MobileMenu() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav className="grid gap-6 text-lg font-medium">
          <Link href="#" className="flex items-center gap-2 text-lg font-semibold">
            <Logo />
            <span className="sr-only">Harshem</span>
          </Link>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.title}
              href={item.path}
              className={`transition-colors hover:text-foreground ${
                pathname === item.path ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
