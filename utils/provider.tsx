"use client";
import React from "react";
import CountryContextProvider from "@/app/components/contexts/countryContext";
import { ThemeProvider } from "@/app/components/contexts/themeContext";
import { BusinessLogicProvider } from "@/app/components/contexts/businessLogicContext";

export default function Providers({ children }: React.PropsWithChildren) {
  return (
    <ThemeProvider>
      <CountryContextProvider>
        <BusinessLogicProvider>{children}</BusinessLogicProvider>
      </CountryContextProvider>
    </ThemeProvider>
  );
}
