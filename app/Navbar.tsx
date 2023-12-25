import Image from "next/image";
import React, { useContext } from "react";
import { CountryContext } from "@/app/components/contexts/countryContext";
import { ThemeContext } from "@/app/components/contexts/themeContext";
import { LogoSvg, ThemeSvg } from "./components/Icons";
import Link from "next/link";

const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { country } = useContext(CountryContext);

  return (
    <>
      <nav className="nav" id="#nav">
        <div className="nav-container">
          <div className="nav-container-left">
            {country && (
              <div className="nav-container-left-flag">
                <Image
                  alt={country.name}
                  src={country.flag}
                  width={500}
                  height={500}
                />
              </div>
            )}
            <Link href="/public" className="nav-container-left-logo">
              <LogoSvg />
            </Link>
          </div>
          <div className="nav-container-menu">
            <button onClick={toggleTheme} className="nav-container-menu-mode">
              <ThemeSvg theme={theme} />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
