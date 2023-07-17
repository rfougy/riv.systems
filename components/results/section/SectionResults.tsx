import { useState } from "react";

import FilterMenu from "../../features/filter/FilterMenu";
import Pagination from "../../features/pagination/Pagination";
import DefaultView from "../views/default/DefaultView";

import { capitalizeFirstChar } from "../../../utils/common/capitalizeFirstChar";

import { sectionType } from "../../../types/sectionType";

import {
  Box,
  EmptyBox,
  FilterSection,
  PageTitle,
  TitleAndToggle,
  ViewSection,
} from "../Results.styled";
import { postView } from "../../../types/postView";
import ColumnView from "../views/column/ColumnView";
import PostViewToggle from "../../features/post-view-toggle/PostViewToggle";
import useContentFiltering from "../../../hooks/useContentFiltering";
import useScrollToTop from "../../../hooks/useScrollToTop";
import useViewportWidthEventListener from "../../../hooks/useViewportWidthListener";

const SectionResults: React.FC<{
  section: sectionType | string;
  content: any;
}> = ({ section, content }) => {
  const [renderedPostCards, setRenderedPostCards] = useState<any>();
  const [postView, setPostView] = useState<postView>("column");

  const isVerticalView = useViewportWidthEventListener(960);

  const { filteredContent, categories, categoryFilters, setCategoryFilters } =
    useContentFiltering(content);

  const sectionAsTitle: string = capitalizeFirstChar(section);

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
        <TitleAndToggle>
          <div>
            <PageTitle>{sectionAsTitle}</PageTitle>
          </div>
          <PostViewToggle setPostView={setPostView} postView={postView} />
        </TitleAndToggle>
        <FilterMenu
          categories={categories}
          categoryFilters={categoryFilters}
          setCategoryFilters={setCategoryFilters}
        />
      </FilterSection>
      <ViewSection>
        {renderPostView()}
        <Pagination
          contentToPaginate={filteredContent}
          paginationResetDeps={[categoryFilters, filteredContent, content]}
          setRenderedPostCards={setRenderedPostCards}
          totalPostCards={filteredContent.length}
        />
      </ViewSection>
      {!isVerticalView && <EmptyBox />}
    </Box>
  );
};

export default SectionResults;
