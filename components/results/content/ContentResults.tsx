import { useEffect, useState } from "react";

import FilterMenu from "../../features/filter/FilterMenu";
import Pagination from "../../features/pagination/Pagination";
import DefaultView from "../../posts/views/default/DefaultView";

import {
  Container,
  FilterSection,
  PageTitle,
  TitleAndToggle,
  ViewSection,
} from "../Results.styled";

import { postView } from "../../../types/postView";
import ColumnView from "../../posts/views/column/ColumnView";
import PostViewToggle from "../../features/post-view-toggle/PostViewToggle";
import useContentFiltering from "../../../hooks/useContentFiltering";
import { scrollToTop } from "../../../utils/scrollToTop";

const ContentResults: React.FC<{
  content: any;
}> = ({ content }) => {
  const [renderedPostCards, setRenderedPostCards] = useState<any>();
  const [postView, setPostView] = useState<postView>("default");

  const {
    filteredContent,
    categories,
    categoryFilters,
    setCategoryFilters,
    sections,
    sectionFilters,
    setSectionFilters,
  } = useContentFiltering(content);

  function renderPostView(): React.ReactElement {
    switch (postView) {
      case "column":
        return <ColumnView content={renderedPostCards} />;
      default:
        return <DefaultView content={renderedPostCards} />;
    }
  }

  useEffect(() => scrollToTop(), [postView, filteredContent]);

  return (
    <Container>
      <FilterSection>
        <TitleAndToggle>
          <div>
            <PageTitle>Content</PageTitle>
          </div>
          <PostViewToggle setPostView={setPostView} postView={postView} />
        </TitleAndToggle>
        <FilterMenu
          sections={sections}
          categories={categories}
          sectionFilters={sectionFilters}
          categoryFilters={categoryFilters}
          setSectionFilters={setSectionFilters}
          setCategoryFilters={setCategoryFilters}
        />
      </FilterSection>
      <ViewSection>
        {renderPostView()}
        <Pagination
          contentToPaginate={filteredContent}
          paginationResetDeps={[
            categoryFilters,
            sectionFilters,
            filteredContent,
            content,
          ]}
          setRenderedPostCards={setRenderedPostCards}
          totalPostCards={filteredContent.length}
        />
      </ViewSection>
    </Container>
  );
};

export default ContentResults;
