import { useEffect, useState } from "react";

import FilterMenu from "../../features/filter/FilterMenu";
import Pagination from "../../features/pagination/Pagination";
import DefaultView from "../../posts/views/default/DefaultView";

import { capitalizeFirstChar } from "../../../utils";

import { sectionType } from "../../../types/sectionType";

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

const SectionResults: React.FC<{
  section: sectionType | string;
  content: any;
}> = ({ section, content }) => {
  const [renderedPostCards, setRenderedPostCards] = useState<any>();
  const [postView, setPostView] = useState<postView>("column");

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

  useEffect(() => scrollToTop(), [postView, filteredContent]);

  return (
    <Container>
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
    </Container>
  );
};

export default SectionResults;
