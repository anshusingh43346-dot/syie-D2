import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SYIE | Creator-Learner Marketplace",
  description: "SYIE is a creator-learner marketplace operated by Sdivynex.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body className="min-h-screen bg-charcoal font-sans text-ivory antialiased">
        {children}
      </body>
    </html>
  );
}
