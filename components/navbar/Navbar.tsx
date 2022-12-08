import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { sectionType } from "../../types/sectionType";
import DisplayDotsAnime from "../features/display-dots-anime/DisplayDotsAnime";
import ThemeToggleButton from "../features/theme-toggle/ThemeToggleButton";
import { Nav, NavMenu, MenuOption, A, LogoContainer } from "./Navbar.styled";

const sectionsList: sectionType[] = ["works", "logs", "items", "test"];

const Navbar: React.FC<{ toggleTheme: () => void }> = ({ toggleTheme }) => {
  const [hoveredOption, setHoveredOption] = useState<string | null>();
  const [activeOption, setActiveOption] = useState<string | null>();

  const { asPath: path } = useRouter();

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

  return (
    <Nav>
      {/* <DisplayDotsAnime /> */}
      <LogoContainer>
        <Link href={`/`} passHref>
          <A optionIsLogo>RIV.SYSTEMS</A>
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
