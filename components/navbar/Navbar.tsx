import { useSearchContext } from "../../context/SearchContext";

import DefaultNavLayout from "./layouts/default/DefaultNavLayout";
import SearchNavLayout from "./layouts/search/SearchNavLayout";

import { Nav } from "./Navbar.styled";

const Navbar: React.FC<{
  isLinkInBioPage: boolean;
  toggleTheme: () => void;
}> = ({ isLinkInBioPage, toggleTheme }) => {
  const { searchActivated, setSearchActivated, setSearchResults } =
    useSearchContext();

  if (searchActivated)
    return (
      <Nav>
        <SearchNavLayout
          setSearchActivated={setSearchActivated}
          setSearchResults={setSearchResults}
        />
      </Nav>
    );

  return (
    <Nav>
      <DefaultNavLayout
        toggleTheme={toggleTheme}
        setSearchActivated={setSearchActivated}
      />
    </Nav>
  );
};

export default Navbar;
