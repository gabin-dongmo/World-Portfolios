"use client";
import React from "react";
import CountryContextProvider from "@/components/contexts/countryContext";
import { ThemeProvider } from "@/components/contexts/themeContext";

export default function Providers({ children }: React.PropsWithChildren) {
  return (
    <ThemeProvider>
      <CountryContextProvider>{children}</CountryContextProvider>
    </ThemeProvider>
  );
}
