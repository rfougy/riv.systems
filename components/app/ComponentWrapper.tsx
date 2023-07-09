import SearchResults from "../features/search/search-results/SearchResults";

import { useSearchContext } from "../../context/SearchContext";

import { ContentWrap } from "../../styles/pages/App.styled";

const AppComponentWrapper: React.FC<{
  isDisplayDotsPage: boolean;
  isLinkInBioPage: boolean;
  children: React.ReactNode;
}> = ({ isDisplayDotsPage, isLinkInBioPage, children }) => {
  const { searchActivated, searchResults } = useSearchContext();

  return (
    <ContentWrap
      isDisplayDotsPage={isDisplayDotsPage}
      isLinkInBioPage={isLinkInBioPage}
    >
      {searchActivated ? <SearchResults results={searchResults} /> : children}
    </ContentWrap>
  );
};

export default AppComponentWrapper;
