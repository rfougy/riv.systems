import NavMenu from "./nav-menu/NavMenu";
import NavLogo from "./nav-logo/NavLogo";
import ThemeToggleButton from "../features/theme-toggle/ThemeToggleButton";
import { AudioPlayer } from "../features/audio-player/AudioPlayer";

import {
  Nav,
  FeaturesContainer,
  LogoAndButtonsContainer,
} from "./Navbar.styled";

const Navbar: React.FC<{ toggleTheme: () => void }> = ({ toggleTheme }) => {
  return (
    <Nav>
      <LogoAndButtonsContainer>
        <NavLogo />
        <FeaturesContainer>
          <ThemeToggleButton toggleTheme={toggleTheme} />
          <AudioPlayer />
        </FeaturesContainer>
      </LogoAndButtonsContainer>
      <NavMenu />
    </Nav>
  );
};

export default Navbar;
