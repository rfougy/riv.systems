import { Dispatch, SetStateAction } from "react";

import NavMenu from "../../nav-menu/NavMenu";
import SearchButton from "../../../features/search/search-button/SearchButton";
import { AudioPlayer } from "../../../features/audio-player/AudioPlayer";
import ThemeToggleButton from "../../../features/theme-toggle/ThemeToggleButton";
import NavLogo from "../../nav-logo/NavLogo";

import {
  LogoAndButtonsContainer,
  FeaturesContainer,
} from "./DefaultLayout.styled";
import { NavContainer } from "../../Navbar.styled";

const DefaultLayout: React.FC<{
  toggleTheme: () => void;
  setSearchActivated: Dispatch<SetStateAction<boolean>>;
}> = ({ toggleTheme, setSearchActivated }) => (
  <NavContainer>
    <LogoAndButtonsContainer>
      <NavLogo />
      <FeaturesContainer>
        <ThemeToggleButton toggleTheme={toggleTheme} />
        <AudioPlayer />
        <SearchButton setSearchActivated={setSearchActivated} />
      </FeaturesContainer>
    </LogoAndButtonsContainer>
    <NavMenu />
  </NavContainer>
);

export default DefaultLayout;
