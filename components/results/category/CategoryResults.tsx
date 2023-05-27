import { useState } from "react";

import Pagination from "../../features/pagination/Pagination";
import DefaultView from "../views/default/DefaultView";

import { capitalizeFirstChar } from "../../../utils";

import {
  CategoryResultsContainer,
  PageTitle,
  TitleAndToggle,
  ViewSection,
} from "../Results.styled";
import { postView } from "../../../types/postView";
import ColumnView from "../views/column/ColumnView";
import PostViewToggle from "../../features/post-view-toggle/PostViewToggle";
import useScrollToTop from "../../../hooks/useScrollToTop";

const CategoryResults: React.FC<{
  category: string;
  content: any;
}> = ({ category, content }) => {
  const [renderedPostCards, setRenderedPostCards] = useState<any>();
  const [postView, setPostView] = useState<postView>("column");

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
    <CategoryResultsContainer>
      <TitleAndToggle>
        <div>
          <PageTitle>Category: {categoryAsTitle}</PageTitle>
        </div>
        <PostViewToggle setPostView={setPostView} postView={postView} />
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
    </CategoryResultsContainer>
  );
};

export default CategoryResults;
