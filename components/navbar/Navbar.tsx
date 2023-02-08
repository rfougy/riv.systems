import Image from "next/image";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";

import { sectionsList } from "../../constants/sectionsList";
import { ITheme } from "../../interfaces/ITheme";

import ThemeToggleButton from "../features/theme-toggle/ThemeToggleButton";

import logoActiveLight from "../../public/assets/logo-active-light.svg";
import logoHiddenLight from "../../public/assets/logo-hidden-light.svg";
import logoActiveDark from "../../public/assets/logo-active-dark.svg";
import logoHiddenDark from "../../public/assets/logo-hidden-dark.svg";

import { Nav, NavMenu, MenuOption, A, LogoContainer } from "./Navbar.styled";

const logoTheme: any = {
  light: {
    active: logoActiveDark,
    hidden: logoHiddenDark,
  },
  dark: {
    active: logoActiveLight,
    hidden: logoHiddenLight,
  },
};

const Navbar: React.FC<{ theme: ITheme; toggleTheme: () => void }> = ({
  theme,
  toggleTheme,
}) => {
  const { asPath: path }: NextRouter = useRouter();
  const logoActive: any = logoTheme[theme.id].active;
  const logoHidden: any = logoTheme[theme.id].hidden;

  const [logo, setLogo] = useState<any>(logoHidden);
  const [hoveredOption, setHoveredOption] = useState<string | null>();
  const [activeOption, setActiveOption] = useState<string | null>();

  function setNavStates(): void {
    const parsedPath: string[] = path.split("/");
    let activeMenuOption: string | null;

    if (path === "/") {
      activeMenuOption = null; // Home Page
      setHoveredOption(activeMenuOption);
      setActiveOption(activeMenuOption);
      return;
    }

    if (parsedPath.length === 2) {
      activeMenuOption = parsedPath[1]; // Content Page
    } else {
      activeMenuOption = parsedPath[2]; // Section Page
    }

    setHoveredOption(activeMenuOption);
    setActiveOption(activeMenuOption);
  }

  useEffect((): void => setNavStates(), [path]);

  useEffect((): void => setLogo(logoHidden), [logoHidden, theme]);

  return (
    <Nav>
      <LogoContainer>
        <Link href={`/`} passHref>
          <a>
            <Image
              src={logo}
              alt="website logo"
              onMouseOver={(): void => setLogo(logoActive)}
              onMouseLeave={(): void => setLogo(logoHidden)}
              onTouchStart={(): void => setLogo(logoActive)}
              onTouchEnd={(): void => setLogo(logoHidden)}
              onTouchCancel={(): void => setLogo(logoHidden)}
            />
          </a>
        </Link>
        <ThemeToggleButton toggleTheme={toggleTheme} />
      </LogoContainer>
      <NavMenu onMouseLeave={(): void => setHoveredOption(activeOption)}>
        {sectionsList.map((section: string, index: number) => (
          <MenuOption
            key={index}
            onMouseOver={(): void => setHoveredOption(section)}
          >
            <Link href={`/content/${section}`} passHref>
              <A
                isActiveOption={section === activeOption}
                isHoveredOption={section === hoveredOption}
                hoverIsActive={typeof hoveredOption === "string"}
                userInHomePage={!activeOption}
              >
                {section === activeOption
                  ? "./" + section.toUpperCase()
                  : "/" + section.toUpperCase()}
              </A>
            </Link>
          </MenuOption>
        ))}
        <MenuOption onMouseOver={(): void => setHoveredOption("content")}>
          <Link href={`/content`} passHref>
            <A
              isActiveOption={"content" === activeOption}
              isHoveredOption={"content" === hoveredOption}
              hoverIsActive={typeof hoveredOption === "string"}
              userInHomePage={!activeOption}
            >
              {"content" === activeOption ? "./" + "ALL" : "/" + "ALL"}
            </A>
          </Link>
        </MenuOption>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
