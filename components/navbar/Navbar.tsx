import { useSearchContext } from "../../context/SearchContext";

import DefaultLayout from "./layouts/default/DefaultLayout";
import LinkInBioLayout from "./layouts/link-in-bio/LinkInBioLayout";
import SearchLayout from "./layouts/search/SearchLayout";

const Navbar: React.FC<{
  isLinkInBioPage?: boolean;
  toggleTheme: () => void;
}> = ({ isLinkInBioPage, toggleTheme }) => {
  const { searchActivated, setSearchActivated, setSearchResults } =
    useSearchContext();

  if (searchActivated)
    return (
      <SearchLayout
        setSearchActivated={setSearchActivated}
        setSearchResults={setSearchResults}
      />
    );

  if (isLinkInBioPage) return <LinkInBioLayout toggleTheme={toggleTheme} />;

  return (
    <DefaultLayout
      toggleTheme={toggleTheme}
      setSearchActivated={setSearchActivated}
    />
  );
};

export default Navbar;
