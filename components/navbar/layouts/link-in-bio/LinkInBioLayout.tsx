import ThemeToggleButton from "../../../features/theme-toggle/ThemeToggleButton";
import { Nav } from "../../Navbar.styled";
import NavLogo from "../../nav-logo/NavLogo";

const LinkInBioLayout: React.FC<{
  toggleTheme: () => void;
}> = ({ toggleTheme }) => (
  <Nav>
    <ThemeToggleButton toggleTheme={toggleTheme} />
    <NavLogo />
  </Nav>
);

export default LinkInBioLayout;
