import { Dispatch, SetStateAction } from "react";

import NavMenu from "../../nav-menu/NavMenu";
import { AudioControls } from "../../../features/audio-player/audio-controls/AudioControls";
import ThemeToggleButton from "../../../features/theme-toggle/ThemeToggleButton";
import NavLogo from "../../nav-logo/NavLogo";

import { LogoAndButtonsBox, FeaturesBox } from "./DefaultLayout.styled";
import { NavBox } from "../../Navbar.styled";
import Playlist from "../../../features/audio-player/playlist/Playlist";

const DefaultLayout: React.FC<{
  toggleTheme: () => void;
  setSearchActivated: Dispatch<SetStateAction<boolean>>;
}> = ({ toggleTheme, setSearchActivated }) => (
  <NavBox>
    <LogoAndButtonsBox>
      <NavLogo />
      <FeaturesBox>
        <ThemeToggleButton toggleTheme={toggleTheme} />
        <Playlist />
        <AudioControls />
      </FeaturesBox>
    </LogoAndButtonsBox>
    <NavMenu />
  </NavBox>
);

export default DefaultLayout;
