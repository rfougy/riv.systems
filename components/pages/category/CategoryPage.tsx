import { useState } from "react";
import Pagination from "../../features/pagination/Pagination";
import PostGrid from "../../posts/grid/PostGrid";
import { capitalizeFirstChar } from "../../../utils/capitalizeFirstChar";
import {
  CategoryPageContainer,
  PageTitle,
} from "../../../styles/Layouts.styled";
import PageHead from "../../head/page/PageHead";

const CategoryPage: React.FC<{
  category: string;
  content: any;
}> = ({ category, content }) => {
  const [renderedPostCards, setRenderedPostCards] = useState<any>();

  const categoryAsTitle: string = capitalizeFirstChar(category);

  return (
    <>
      <PageHead
        title={`Category: ${categoryAsTitle}`}
        description={`View all content related to ${categoryAsTitle} in RIV.SYSTEMS.`}
      />
      <CategoryPageContainer>
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
      </CategoryPageContainer>
    </>
  );
};

export default CategoryPage;
