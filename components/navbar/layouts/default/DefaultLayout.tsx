import { Dispatch, SetStateAction } from "react";

import NavMenu from "../../nav-menu/NavMenu";
import ThemeToggleButton from "../../../features/theme-toggle/ThemeToggleButton";
import NavLogo from "../../nav-logo/NavLogo";

import { LogoAndButtonsBox, FeaturesBox } from "./DefaultLayout.styled";
import { NavBox } from "../../Navbar.styled";
import AudioPlayer from "../../../features/audio-player/AudioPlayer";

const DefaultLayout: React.FC<{
  toggleTheme: () => void;
  setSearchActivated: Dispatch<SetStateAction<boolean>>;
}> = ({ toggleTheme, setSearchActivated }) => (
  <NavBox>
    <LogoAndButtonsBox>
      <NavLogo />
      <FeaturesBox>
        <ThemeToggleButton toggleTheme={toggleTheme} />
        <AudioPlayer />
      </FeaturesBox>
    </LogoAndButtonsBox>
    <NavMenu />
  </NavBox>
);

export default DefaultLayout;
