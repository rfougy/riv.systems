import Link from "next/link";
import { sectionType } from "../../types/sectionType";
import DisplayDotsAnime from "../features/display-dots-anime/DisplayDotsAnime";
import ThemeToggle from "../features/theme-toggle/ThemeToggle";
import {
  Nav,
  NavMenu,
  MenuOption,
  A,
  ThemeTest,
  LogoContainer,
} from "./Navbar.styled";

const sectionsList: sectionType[] = ["works", "logs", "items", "test"];

const Navbar: React.FC<{ toggleTheme: () => void }> = ({ toggleTheme }) => {
  return (
    <Nav>
      {/* <DisplayDotsAnime /> */}
      <LogoContainer>
        <Link href={`/`} passHref>
          <A>RIV.SYSTEMS</A>
        </Link>
        <ThemeToggle toggleTheme={toggleTheme} />
      </LogoContainer>
      <NavMenu>
        {sectionsList.map((section: string, index: number) => (
          <MenuOption key={index}>
            <Link href={`/content/${section}`} passHref>
              <A>{"//" + section.toUpperCase()}</A>
            </Link>
          </MenuOption>
        ))}
        <MenuOption>
          <Link href={`/content`} passHref>
            <A>{"//" + "ALL"}</A>
          </Link>
        </MenuOption>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
