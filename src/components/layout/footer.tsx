import Link from "next/link";
import { NAV_ITEMS, OFFICES, SITE_NAME } from "~/lib/constants";
import { Logo } from "~/components/logo";

export function Footer() {
    return (
        // Full-width wrapper for the background color
        <div className="flex justify-center bg-muted">
            <footer className="container max-w-[64rem] space-y-8 px-8 py-8">
                {/* ====== Top Section: Info & Logo ====== */}
                <div className="flex w-full items-start justify-between gap-8">
                    {/* --- Office Information --- */}
                    <div className="flex flex-col items-start justify-start gap-4">
                        <h3 className="text-2xl font-medium text-foreground/70 sm:text-3xl">
                            Harshem Family Practice
                        </h3>
                        <div className="grid grid-cols-2 gap-x-8 text-foreground/70">
                            {OFFICES.map((office) => (
                                <div key={office.title} className="text-sm md:text-base">
                                    {office.address.map((line) => (
                                        <p key={line}>{line}</p>
                                    ))}
                                    <a
                                        href={`tel:${office.phone}`}
                                        className="mt-1 inline-block transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                    >
                                        {office.phone}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* --- Logo (Desktop only) --- */}
                    <div className="hidden shrink-0 md:block">
                        <Logo className="h-[157px] w-auto fill-foreground/60" />
                    </div>
                </div>

                {/* ====== Separator ====== */}
                <hr className="w-full border-border" />

                {/* ====== Navigation Links ====== */}
                <nav
                    aria-label="Footer navigation"
                    className="grid w-full grid-cols-2 gap-4 md:grid-cols-3"
                >
                    {NAV_ITEMS.map((item) =>
                        <Link
                            key={item.title}
                            href={item.path}
                            className="text-sm uppercase tracking-wider text-muted-foreground/80 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                            {item.title}
                        </Link>
                    )}
                </nav>

                {/* ====== Copyright ====== */}
                <p className="text-xs font-light text-muted-foreground/80">
                    © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
                </p>
            </footer>
        </div>
    );
}