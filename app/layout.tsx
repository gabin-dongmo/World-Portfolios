import React from "react";
import type { Metadata } from "next";
import "@/styles/globals.scss";
import Top from "@/app/components/ToTop";
import Footer from "@/app/Footer";
import { Inter, Overpass } from "next/font/google";
import CountryContextProvider from "@/app/components/contexts/countryContext";
import { DataProvider } from "@/app/components/contexts/dataContext";
import { ThemeProvider } from "@/app/components/contexts/themeContext";
import NavBar from "@/app/Navbar";
import Section from "@/app/Section";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const overpass = Overpass({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-overpass",
});

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
          <ThemeProvider>
            <CountryContextProvider>
              <Top />
              <NavBar />
              <Section />
              <DataProvider>{children}</DataProvider>
              <Footer />
            </CountryContextProvider>
          </ThemeProvider>{" "}
        </div>
      </body>
    </html>
  );
}
