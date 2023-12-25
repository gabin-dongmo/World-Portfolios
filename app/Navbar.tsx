"use client";
import Image from "next/image";
import React, { useContext } from "react";
import { CountryContext } from "@/app/components/contexts/countryContext";
import { ThemeContext } from "@/app/components/contexts/themeContext";
import { LogoSvg, ThemeSvg } from "./components/Icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { country } = useContext(CountryContext);
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Portfolios", href: "/portfolios" },
  ];
  const currentPath = usePathname();

  return (
    <>
      <nav className="nav" id="#nav">
        <div className="nav-content">
          <div className="nav-content-left">
            {country && (
              <div className="nav-content-left-flag">
                <Image
                  alt={country.name}
                  src={country.flag}
                  width={500}
                  height={500}
                />
              </div>
            )}
            <Link href="/" className="nav-content-left-logo">
              <LogoSvg />
            </Link>
            <ul>
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={currentPath === link.href ? "active" : ""}
                >
                  {link.label}
                </Link>
              ))}
            </ul>
          </div>
          <div className="nav-content-right">
            <button onClick={toggleTheme} className="nav-content-right-mode">
              <ThemeSvg theme={theme} />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
