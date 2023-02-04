import { useState } from "react";

import Pagination from "../../features/pagination/Pagination";
import DefaultView from "../../posts/views/default/DefaultView";

import { capitalizeFirstChar } from "../../../utils";

import {
  CategoryResultsContainer,
  PageTitle,
  ViewSection,
} from "../Results.styled";

const CategoryResults: React.FC<{
  category: string;
  content: any;
}> = ({ category, content }) => {
  const [renderedPostCards, setRenderedPostCards] = useState<any>();

  const categoryAsTitle: string = capitalizeFirstChar(category);

  return (
    <CategoryResultsContainer>
      <PageTitle>Category: {categoryAsTitle}</PageTitle>
      <ViewSection>
        <DefaultView content={renderedPostCards} />
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
