import Image from "next/image";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";

import useViewportWidthEventListener from "../../hooks/useViewportWidthListener";

import ThemeToggleButton from "../features/theme-toggle/ThemeToggleButton";
import { AudioPlayer } from "../features/audio-player/AudioPlayer";

import { logo } from "../../constants/logo";
import { sectionsList } from "../../constants/sectionsList";

import {
  Nav,
  NavMenu,
  MenuOption,
  A,
  Logo,
  FeaturesContainer,
  LogoAndButtonsContainer,
} from "./Navbar.styled";

const Navbar: React.FC<{ toggleTheme: () => void }> = ({ toggleTheme }) => {
  const { asPath: path }: NextRouter = useRouter();
  const isVerticalView = useViewportWidthEventListener(640);

  const [logoState, setLogoState] = useState<any>();
  const [hoveredOption, setHoveredOption] = useState<string | null>();
  const [activeOption, setActiveOption] = useState<string | null>();

  const logoHidden = isVerticalView ? logo.short.hidden : logo.long.hidden;
  const logoActive = isVerticalView ? logo.short.active : logo.long.active;

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

  useEffect(() => setLogoState(logoHidden), [logoHidden]);
  useEffect((): void => setNavStates(), [path]);

  return (
    <Nav>
      <LogoAndButtonsContainer>
        <Logo>
          <Link href={`/`} passHref>
            <a>
              <Image
                src={logoState}
                alt="website logo"
                onMouseOver={(): void => setLogoState(logoActive)}
                onMouseLeave={(): void => setLogoState(logoHidden)}
                onTouchStart={(): void => setLogoState(logoActive)}
                onTouchEnd={(): void => setLogoState(logoHidden)}
                onTouchCancel={(): void => setLogoState(logoHidden)}
              />
            </a>
          </Link>
        </Logo>
        <FeaturesContainer>
          <ThemeToggleButton toggleTheme={toggleTheme} />
          <AudioPlayer />
        </FeaturesContainer>
      </LogoAndButtonsContainer>
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
