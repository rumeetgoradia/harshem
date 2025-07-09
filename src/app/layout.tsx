import "~/styles/globals.css";

import { type Metadata } from "next";
import localFont from "next/font/local";

import { TRPCReactProvider } from "~/trpc/react";
import { Navbar } from "~/components/layout/navbar";
import { Footer } from "~/components/layout/footer";
import { AppProviders } from "~/components/providers";
import { Toaster } from "~/components/ui/sonner";

export const metadata: Metadata = {
  title: "Harshem Family Practice",
  description: "Harshem Family Practice, an outpatient medical practice for all primary care, geriatric, adolescent, and women's health needs. Located in Rahway and Elizabeth, NJ.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const splineSans = localFont({
  src: "../../public/fonts/SplineSans.woff2",
  variable: "--font-spline-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${splineSans.variable}`}>
    <body>
        <TRPCReactProvider>
          <AppProviders>
            <div className="flex min-h-screen flex-col bg-background font-sans text-foreground antialiased">
              <Navbar />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
            <Toaster richColors />
          </AppProviders>
        </TRPCReactProvider>
      </body></html>
  );
}
