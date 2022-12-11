import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { sectionType } from "../../types/sectionType";
import ThemeToggleButton from "../features/theme-toggle/ThemeToggleButton";
import { Nav, NavMenu, MenuOption, A, LogoContainer } from "./Navbar.styled";

import logoActiveWhite from "../../public/assets/logo-active-light.svg";
import logoHiddenWhite from "../../public/assets/logo-hidden-light.svg";
import logoActiveBlack from "../../public/assets/logo-active-dark.svg";
import logoHiddenBlack from "../../public/assets/logo-hidden-dark.svg";

const logoTheme: any = {
  light: {
    active: logoActiveBlack,
    hidden: logoHiddenBlack,
  },
  dark: {
    active: logoActiveWhite,
    hidden: logoHiddenWhite,
  },
};

const sectionsList: sectionType[] = ["works", "logs", "items", "test"];

const Navbar: React.FC<{ theme: any; toggleTheme: () => void }> = ({
  theme,
  toggleTheme,
}) => {
  const { asPath: path } = useRouter();
  const logoActive = logoTheme[theme.id].active;
  const logoHidden = logoTheme[theme.id].hidden;

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

  useEffect(() => setNavStates(), [path]);

  useEffect(() => setLogo(logoHidden), [logoHidden, theme]);

  return (
    <Nav>
      <LogoContainer>
        <Link href={`/`} passHref>
          <a>
            <Image
              src={logo}
              alt="website logo"
              onMouseOver={() => setLogo(logoActive)}
              onMouseLeave={() => setLogo(logoHidden)}
            />
          </a>
        </Link>
        <ThemeToggleButton toggleTheme={toggleTheme} />
      </LogoContainer>
      <NavMenu onMouseLeave={() => setHoveredOption(activeOption)}>
        {sectionsList.map((section: string, index: number) => (
          <MenuOption key={index} onMouseOver={() => setHoveredOption(section)}>
            <Link href={`/content/${section}`} passHref>
              <A
                isActiveOption={activeOption === section}
                isHoveredOption={hoveredOption === section}
                hoverIsActive={typeof hoveredOption === "string"}
                userInHomePage={!activeOption}
              >
                {"/" + section.toUpperCase()}
              </A>
            </Link>
          </MenuOption>
        ))}
        <MenuOption onMouseOver={() => setHoveredOption("content")}>
          <Link href={`/content`} passHref>
            <A
              isActiveOption={activeOption === "content"}
              isHoveredOption={hoveredOption === "content"}
              hoverIsActive={typeof hoveredOption === "string"}
              userInHomePage={!activeOption}
            >
              {"/" + "ALL"}
            </A>
          </Link>
        </MenuOption>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
