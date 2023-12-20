"use client";
import React from "react";
import CountryContextProvider from "@/components/contexts/countryContext";
import { ThemeProvider } from "@/components/contexts/themeContext";
import { BusinessLogicProvider } from "@/components/contexts/businessLogicContext";

export default function Providers({ children }: React.PropsWithChildren) {
  return (
    <ThemeProvider>
      <CountryContextProvider>
        <BusinessLogicProvider>{children}</BusinessLogicProvider>
      </CountryContextProvider>
    </ThemeProvider>
  );
}
