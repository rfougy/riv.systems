import NavMenu from "./nav-menu/NavMenu";
import NavLogo from "./nav-logo/NavLogo";

import Search from "../features/search/Search";
import ThemeToggleButton from "../features/theme-toggle/ThemeToggleButton";
import SearchButton from "../features/search/search-button/SearchButton";
import { AudioPlayer } from "../features/audio-player/AudioPlayer";
import IconButton from "../shared/icon-button/IconButton";

import { useSearchContext } from "../../context/SearchContext";

import {
  Nav,
  FeaturesContainer,
  LogoAndButtonsContainer,
} from "./Navbar.styled";

import closeIcon from "../../public/assets/icons/close-icon.svg";

const Navbar: React.FC<{
  toggleTheme: () => void;
}> = ({ toggleTheme }) => {
  const { searchActivated, setSearchActivated } =
    useSearchContext();

  return (
    <Nav>
      {searchActivated ? (
        <>
          <Search />
          <IconButton
            src={closeIcon}
            alt="close search button"
            ariaLabel="close search button"
            height="1.25rem"
            width="1.25rem"
            onClick={() => setSearchActivated(false)}
          />
        </>
      ) : (
        <>
          <LogoAndButtonsContainer>
            <NavLogo />
            <FeaturesContainer>
              <ThemeToggleButton toggleTheme={toggleTheme} />
              <AudioPlayer />
              <SearchButton setSearchActivated={setSearchActivated} />
            </FeaturesContainer>
          </LogoAndButtonsContainer>
          <NavMenu />
        </>
      )}
    </Nav>
  );
};

export default Navbar;
