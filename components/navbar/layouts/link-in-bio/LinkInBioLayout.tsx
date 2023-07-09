import Link from "next/link";
import ThemeToggleButton from "../../../features/theme-toggle/ThemeToggleButton";
import ArrowIcon from "../../../icons/ArrowIcon";
import { NavContainer } from "../../Navbar.styled";
import { Button } from "./LinkInBioLayout.styled";

const LinkInBioLayout: React.FC<{
  toggleTheme: () => void;
}> = ({ toggleTheme }) => (
  <NavContainer>
    <ThemeToggleButton forLinkInBioLayout={true} toggleTheme={toggleTheme} />
    <Link href={`/`}>
      <Button>
        Go To Website
        <ArrowIcon right />
      </Button>
    </Link>
  </NavContainer>
);

export default LinkInBioLayout;
