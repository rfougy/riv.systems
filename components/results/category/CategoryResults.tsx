import { useState } from "react";

import Pagination from "../../features/pagination/Pagination";
import DefaultView from "../views/default/DefaultView";

import { capitalizeFirstChar } from "../../../utils/common/capitalizeFirstChar";

import {
  CategoryResultsBox,
  PageTitle,
  TitleAndToggle,
  ViewSection,
} from "../Results.styled";
import { postView } from "../../../types/postView";
import ColumnView from "../views/column/ColumnView";
import PostViewToggle from "../../features/post-view-toggle/PostViewToggle";
import useScrollToTop from "../../../hooks/useScrollToTop";
import useViewportWidthEventListener from "../../../hooks/useViewportWidthListener";
import { breakpoints } from "../../../styles/theme";

const CategoryResults: React.FC<{
  category: string;
  content: any;
}> = ({ category, content }) => {
  const [renderedPostCards, setRenderedPostCards] = useState<any>();
  const [postView, setPostView] = useState<postView>("column");

  const renderPostViewOptions = !useViewportWidthEventListener(
    breakpoints.useViewportWidth.xs
  );
  const categoryAsTitle: string = capitalizeFirstChar(category);

  function renderPostView(): React.ReactElement {
    switch (postView) {
      case "column":
        return <ColumnView content={renderedPostCards} />;
      default:
        return <DefaultView content={renderedPostCards} />;
    }
  }

  useScrollToTop([postView]);

  return (
    <CategoryResultsBox>
      <TitleAndToggle>
        <div>
          <PageTitle>Category: {categoryAsTitle}</PageTitle>
        </div>
        {renderPostViewOptions && (
          <PostViewToggle setPostView={setPostView} postView={postView} />
        )}
      </TitleAndToggle>

      <ViewSection>
        {renderPostView()}
        <Pagination
          contentToPaginate={content}
          paginationResetDeps={[content]}
          setRenderedPostCards={setRenderedPostCards}
          totalPostCards={content.length}
        />
      </ViewSection>
    </CategoryResultsBox>
  );
};

export default CategoryResults;
