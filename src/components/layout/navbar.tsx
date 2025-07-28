"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { NAV_ITEMS, OFFICES } from "~/lib/constants";
import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "~/components/ui/sheet";
import { Logo } from "~/components/logo";

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* ====== Top Bar: Logo, Practice Name, Office Phones  ====== */}
      <div className="hidden bg-primary md:flex justify-center">
        <div className="container max-w-[64rem] flex items-center justify-between px-8 pt-4 text-white lg:pt-8">
          <Link href="/" className="flex items-center gap-4 group">
            <div className="flex items-center justify-center p-1 bg-white rounded-md size-10 lg:size-12">
              <Logo className="w-auto h-full fill-primary" />
            </div>
            <h1 className="text-3xl font-medium leading-none lg:text-4xl">
              Harshem Family Practice
            </h1>
          </Link>
          <div className="flex items-start gap-4">
            {OFFICES.map((office) => (
              <div key={office.title} className="text-right">
                <p className="text-sm">{office.title}</p>
                <a
                  href={`tel:${office.phone}`}
                  className="font-bold hover:underline"
                >
                  {office.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ====== Main Navigation Bar (Sticky) ====== */}
      <header className="sticky top-0 z-50 w-full bg-primary flex justify-center">
        <div className="container max-w-[64rem] flex items-center justify-between px-8 text-white md:justify-center">
          {/* ====== Desktop Navigation ====== */}
          <nav className="hidden w-full py-4 md:flex md:justify-between lg:py-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.title}
                href={item.path}
                data-active={pathname === item.path}
                className={cn(
                  "relative px-2 text-sm font-medium transition-transform active:scale-95 lg:text-base lg:font-normal",
                  "hover:text-white/80",
                  "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-white after:transition-transform",
                  "data-[active=true]:after:scale-x-100",
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* ====== Mobile Header & Menu Trigger ====== */}
          <div className="flex items-center justify-between w-full py-4 md:hidden">
            <Link href="/" className="flex items-center" aria-label="Go to homepage">
              <Logo className="w-auto h-10 fill-white transition-transform group-hover:scale-110 active:scale-95" />
            </Link>
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open navigation menu">
                  <Menu className="size-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85%] bg-primary text-white border-l-brand-600 p-8">
                <nav className="flex flex-col items-center justify-center h-full -mt-12">
                  <ul className="space-y-4 text-center">
                    {NAV_ITEMS.map((item) => (
                      <li key={item.title}>
                        <SheetClose asChild>
                          <Link
                            href={item.path}
                            data-active={pathname === item.path}
                            className={cn(
                              "relative px-2 py-1 text-xl transition-transform active:scale-95",
                              "hover:text-white/80",
                              "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-white after:transition-transform",
                              "data-[active=true]:after:scale-x-100",
                            )}
                          >
                            {item.title}
                          </Link>
                        </SheetClose>
                      </li>
                    ))}
                  </ul>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}