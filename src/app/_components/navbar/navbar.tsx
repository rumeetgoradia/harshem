import Link from "next/link";
import { OFFICES } from "~/content/offices";
import { DesktopMenu } from "./desktop-menu";
import { MobileMenu } from "./mobile-menu";
import { Logo } from "./logo";

export function Navbar() {
  return (
    <>
      <div className="hidden md:block bg-brand-700 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-4">
            <div className="bg-white p-1 rounded-md">
              <Logo />
            </div>
            <h1 className="text-2xl font-medium">Harshem Family Practice</h1>
          </Link>
          <div className="flex gap-4">
            {OFFICES.map((office) => (
              <div key={office.title} className="text-right">
                <p className="text-sm">{office.title}</p>
                <a href={`tel:${office.phone}`} className="font-bold">
                  {office.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <DesktopMenu />
        <MobileMenu />
      </header>
    </>
  );
}
