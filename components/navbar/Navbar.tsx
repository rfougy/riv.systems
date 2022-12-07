import Link from "next/link";
import { useRouter } from "next/router";
import { sectionType } from "../../types/sectionType";
import DisplayDotsAnime from "../features/display-dots-anime/DisplayDotsAnime";
import ThemeToggleButton from "../features/theme-toggle/ThemeToggleButton";
import { Nav, NavMenu, MenuOption, A, LogoContainer } from "./Navbar.styled";

const sectionsList: sectionType[] = ["works", "logs", "items", "test"];

const Navbar: React.FC<{ toggleTheme: () => void }> = ({ toggleTheme }) => {
  const { asPath } = useRouter();

  /**
   * @description used for visual highlighting of the menu option in navbar.
   */
  const currMenuOption: string =
    asPath.split("/").length === 2
      ? asPath.split("/")[1]
      : asPath.split("/")[2];

  return (
    <Nav>
      {/* <DisplayDotsAnime /> */}
      <LogoContainer>
        <Link href={`/`} passHref>
          <A>RIV.SYSTEMS</A>
        </Link>
        <ThemeToggleButton toggleTheme={toggleTheme} />
      </LogoContainer>
      <NavMenu>
        {sectionsList.map((section: string, index: number) => (
          <MenuOption key={index}>
            <Link href={`/content/${section}`} passHref>
              <A currMenuOption={currMenuOption === section}>
                {"/" + section.toUpperCase()}
              </A>
            </Link>
          </MenuOption>
        ))}
        <MenuOption>
          <Link href={`/content`} passHref>
            <A currMenuOption={currMenuOption === "content"}>{"/" + "ALL"}</A>
          </Link>
        </MenuOption>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
