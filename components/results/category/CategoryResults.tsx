import { useState } from "react";

import Pagination from "../../features/pagination/Pagination";
import PostGrid from "../../posts/grid/PostGrid";

import { capitalizeFirstChar } from "../../../utils";

import { CategoryResultsContainer, PageTitle } from "../Results.styled";

const CategoryResults: React.FC<{
  category: string;
  content: any;
}> = ({ category, content }) => {
  const [renderedPostCards, setRenderedPostCards] = useState<any>();

  const categoryAsTitle: string = capitalizeFirstChar(category);

  return (
    <CategoryResultsContainer>
      <PageTitle>Category: {categoryAsTitle}</PageTitle>
      <section>
        <PostGrid content={renderedPostCards} />
        <Pagination
          contentToPaginate={content}
          paginationResetDeps={[content]}
          setRenderedPostCards={setRenderedPostCards}
          totalPostCards={content.length}
        />
      </section>
    </CategoryResultsContainer>
  );
};

export default CategoryResults;
