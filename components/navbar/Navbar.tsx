import Link from "next/link";
import { sectionType } from "../../types/sectionType";
import DisplayDotsAnime from "../features/display-dots-anime/DisplayDotsAnime";
import { Nav, NavMenu, MenuOption, A } from "./Navbar.styled";

const sectionsList: sectionType[] = ["works", "logs", "items", "test"];

const Navbar: React.FC<{ sections?: string[] }> = ({ sections }) => {
  return (
    <Nav>
      {/* <DisplayDotsAnime /> */}
      <Link href={`/`} passHref>
        <A>RIV.SYSTEMS</A>
      </Link>

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
