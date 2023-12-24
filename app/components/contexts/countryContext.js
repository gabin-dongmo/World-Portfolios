import React, { createContext, useEffect, useState } from "react";
import countries from "helpers/countries";
import { usePathname } from "next/navigation";

export const CountryContext = createContext();

const CountryContextProvider = ({ children }) => {
  const [country, setCountry] = useState(null);
  // const pathname = usePathname();
  //
  // useEffect(() => {
  //   const pathSegments = pathname.split("/");
  //   if (pathSegments.length > 1) {
  //     const countryCode = pathSegments[pathSegments.length - 1];
  //     const country = countries.find((country) => country.code === countryCode);
  //     if (country) setCountry(country);
  //   }
  // }, [pathname]);

  return (
    <CountryContext.Provider value={{ country, countries }}>
      {children}
    </CountryContext.Provider>
  );
};

export default CountryContextProvider;
