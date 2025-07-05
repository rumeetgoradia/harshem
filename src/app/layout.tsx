import "~/styles/globals.css";

import { Inter } from "next/font/google";

import { Navbar } from "~/app/_components/navbar/navbar";
import { Footer } from "~/app/_components/footer";
import { TRPCReactProvider } from "~/trpc/react";
import { cn } from "~/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Harshem Family Practice",
  description: "Harshem Family Practice, an outpatient medical practice for all primary care, geriatric, adolescent, and women's health needs. Located in Rahway and Elizabeth, NJ.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title: "Harshem Family Practice",
    description: "Harshem Family Practice, an outpatient medical practice for all primary care, geriatric, adolescent, and women's health needs. Located in Rahway and Elizabeth, NJ.",
    url: "https://www.harshemfamilypractice.com",
    siteName: "Harshem Family Practice",
    images: [
      {
        url: "/images/seo/card.png",
        width: 1200,
        height: 628,
        alt: "Harshem Family Practice",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harshem Family Practice",
    description: "Harshem Family Practice, an outpatient medical practice for all primary care, geriatric, adolescent, and women's health needs. Located in Rahway and Elizabeth, NJ.",
    images: ["/images/seo/card.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable)}>
        <TRPCReactProvider>
          <Navbar />
          {children}
          <Footer />
        </TRPCReactProvider>
      </body>
    </html>
  );
}
