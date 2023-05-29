import { Dispatch, SetStateAction } from "react";

import NavMenu from "./nav-menu/NavMenu";
import NavLogo from "./nav-logo/NavLogo";

import Search from "../features/search/Search";
import ThemeToggleButton from "../features/theme-toggle/ThemeToggleButton";
import SearchButton from "../features/search/search-button/SearchButton";
import IconButton from "../shared/icon-button/IconButton";
import { AudioPlayer } from "../features/audio-player/AudioPlayer";

import {
  Nav,
  FeaturesContainer,
  LogoAndButtonsContainer,
} from "./Navbar.styled";

import closeIcon from "../../public/assets/icons/close-icon.svg";

const Navbar: React.FC<{
  searchIconClicked: boolean;
  setSearchIconClicked: Dispatch<SetStateAction<boolean>>;
  setSearchResults: Dispatch<SetStateAction<any[]>>;
  toggleTheme: () => void;
}> = ({
  searchIconClicked,
  setSearchIconClicked,
  setSearchResults,
  toggleTheme,
}) => (
  <Nav>
    {searchIconClicked ? (
      <>
        <Search setSearchResults={setSearchResults} />
        <IconButton
          src={closeIcon}
          alt="close search button"
          ariaLabel="close search button"
          onClick={() => setSearchIconClicked(false)}
        />
      </>
    ) : (
      <>
        <LogoAndButtonsContainer>
          <NavLogo />
          <FeaturesContainer>
            <ThemeToggleButton toggleTheme={toggleTheme} />
            <AudioPlayer />
          </FeaturesContainer>
        </LogoAndButtonsContainer>
        <NavMenu />
        <SearchButton setSearchIconClicked={setSearchIconClicked} />
      </>
    )}
  </Nav>
);

export default Navbar;
