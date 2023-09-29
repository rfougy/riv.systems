import { useState } from "react";

import FilterMenu from "../../features/filter/FilterMenu";
import Pagination from "../../features/pagination/Pagination";
import DefaultView from "../views/default/DefaultView";

import {
  Box,
  EmptyBox,
  FilterSection,
  ViewSection,
} from "../Results.styled";

import { postView } from "../../../types/postView";
import ColumnView from "../views/column/ColumnView";

import useContentFiltering from "../../../hooks/useContentFiltering";
import useScrollToTop from "../../../hooks/useScrollToTop";
import useViewportWidthEventListener from "../../../hooks/useViewportWidthListener";
import TitleAndToggler from "../../shared/title-and-toggle/TitleAndToggler";

const ContentResults: React.FC<{
  content: any;
}> = ({ content }) => {
  const [renderedPostCards, setRenderedPostCards] = useState<any>();
  const [postView, setPostView] = useState<postView>("default");

  const isVerticalView = useViewportWidthEventListener(960);

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

  useScrollToTop([postView, filteredContent]);

  return (
    <Box>
      <FilterSection>
        <TitleAndToggler
          title="Content"
          postView={postView}
          setPostView={setPostView}
        />
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
      {!isVerticalView && <EmptyBox />}
    </Box>
  );
};

export default ContentResults;
