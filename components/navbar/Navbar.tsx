import Link from "next/link";
import { sectionType } from "../../types/sectionType";
import DisplayDotsAnime from "../features/display-dots-anime/DisplayDotsAnime";
import { Nav, MenuItems, Item, Anchor } from "./Navbar.styled";

const sectionsList: sectionType[] = ["works", "logs", "items", "test"];

const Navbar: React.FC<{ sections?: string[] }> = ({ sections }) => {
  return (
    <Nav>
      {/* <DisplayDotsAnime /> */}
      <Link href={`/`} passHref>
        <Anchor>RIV.SYSTEMS</Anchor>
      </Link>

      <MenuItems>
        {sectionsList.map((section: string, index: number) => (
          <Item key={index}>
            <Link href={`/content/${section}`} passHref>
              <Anchor>{section}</Anchor>
            </Link>
          </Item>
        ))}
      </MenuItems>
    </Nav>
  );
};

export default Navbar;
