import SearchResults from "../features/search/search-results/SearchResults";

import { useSearchContext } from "../../context/SearchContext";

import { ContentWrap } from "../../styles/pages/App.styled";

const AppComponentWrapper: React.FC<{
  isDisplayDotsPage: boolean;
  children: React.ReactNode;
}> = ({ isDisplayDotsPage, children }) => {
  const { searchActivated } = useSearchContext();

  return (
    <ContentWrap isDisplayDotsPage={isDisplayDotsPage}>
      {searchActivated ? <SearchResults /> : children}
    </ContentWrap>
  );
};

export default AppComponentWrapper;
