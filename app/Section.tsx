"use client";

import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CountryContext } from "@/app/components/contexts/countryContext";
import Country from "@/interfaces/country.interface";

type countryOption = {
  value: string;
  text: string;
};

const Section = () => {
  const router = useRouter();
  const { country, countries } = useContext(CountryContext);

  let options: countryOption[] = countries.map((c: Country) => ({
    value: c.code,
    text: c.name,
  }));

  options = [
    { value: "", text: "What country do you want to consult ?" },
    ...options,
  ];

  const [selected] = useState(options[0].value);
  const handleChange = (e: any) => {
    router.push(`/${e.target.value}`);
  };

  return (
    <section className="section">
      <div className="section-intro">
        <div className="section-intro__head">
          <h1>World Portfolios</h1>
          <p>Open source collection of World Portfolios</p>
          <div className="options">
            <Link href="https://github.com/ln-dev7/world-portfolios">
              Contribute on github
            </Link>
            <select value={selected} onChange={handleChange}>
              {options.map((option: countryOption) => (
                <option key={option.value} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
          </div>
          {country && (
            <span>
              Currently you visit the portfolios of :{" "}
              <span>{country.name}</span>
            </span>
          )}
          <div className="list">
            <div className="list-countries">
              {countries.map((country: any) => (
                <Link key={country.code} href={`/${country.code}`}>
                  <Image
                    alt={country.name}
                    src={country.flag}
                    width={500}
                    height={500}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
