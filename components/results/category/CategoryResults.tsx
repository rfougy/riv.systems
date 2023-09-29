import { useState } from "react";

import Pagination from "../../features/pagination/Pagination";
import DefaultView from "../views/default/DefaultView";

import { capitalizeFirstChar } from "../../../utils/common/capitalizeFirstChar";

import { CategoryResultsBox, ViewSection } from "../Results.styled";
import { postView } from "../../../types/postView";
import ColumnView from "../views/column/ColumnView";
import useScrollToTop from "../../../hooks/useScrollToTop";
import TitleAndToggler from "../../shared/title-and-toggle/TitleAndToggler";

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
    <CategoryResultsBox>
      <TitleAndToggler
        title={`Category: ${categoryAsTitle}`}
        postView={postView}
        setPostView={setPostView}
      />
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
