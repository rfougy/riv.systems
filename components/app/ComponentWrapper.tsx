import SearchResults from "../features/search/search-results/SearchResults";

import { useSearchContext } from "../../context/SearchContext";

import { ContentWrap } from "../../styles/pages/App.styled";

const AppComponentWrapper: React.FC<{
  isDisplayDotsPage: boolean;
  children: React.ReactNode;
}> = ({ isDisplayDotsPage, children }) => {
  const { searchActivated, searchResults } = useSearchContext();

  return (
    <ContentWrap isDisplayDotsPage={isDisplayDotsPage}>
      {searchActivated ? <SearchResults results={searchResults} /> : children}
    </ContentWrap>
  );
};

export default AppComponentWrapper;
