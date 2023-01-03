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
  const [currentPostCards, setCurrentPostCards] = useState<any>();

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
          <PostGrid content={currentPostCards} />
          <Pagination
            contentToPaginate={content}
            paginationResetDeps={[content]}
            setCurrentPostCards={setCurrentPostCards}
            totalPostCards={content.length}
          />
        </section>
      </CategoryPageContainer>
    </>
  );
};

export default CategoryPage;
