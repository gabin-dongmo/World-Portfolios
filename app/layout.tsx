import React from "react";
import type { Metadata } from "next";
import Providers from "@/utils/provider";
import "@/styles/globals.scss";
import { inter, overpass } from "@/utils/fonts";
import Top from "@/components/ToTop";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | World Portfolios",
    default: "World Portfolios",
  },
  description: "Open source collection of World portfolios",
  keywords: "portfolio, opensource, world, github",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${overpass.variable}`}>
      <body>
        <div className="App">
          <Top />
          <Providers>{children}</Providers>
          <Footer />
        </div>
      </body>
    </html>
  );
}
