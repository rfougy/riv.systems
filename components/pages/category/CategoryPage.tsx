import { useEffect, useState } from "react";
import Pagination from "../../features/pagination/Pagination";
import PostList from "../../posts/list/PostList";
import * as SH from "../../../styles/DynamicPage.styled";
import { capitalizeFirstChar } from "../../../utils/capitalizeFirstChar";

const CategoryPage: React.FC<{
  slug: string;
  content: any;
}> = ({ slug, content }) => {
  // states for pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postCardsPerPage, setPostCardsPerPage] = useState<number>(2);

  const category: string = slug[1];
  const categoryAsTitle: string = capitalizeFirstChar(category);

  // deducting the current PostCards for pagination
  const indexOfLastPostCard: number = currentPage * postCardsPerPage;
  const indexOfFirstPostCard: number = indexOfLastPostCard - postCardsPerPage;
  const currentPostCards: any[] = content.slice(
    indexOfFirstPostCard,
    indexOfLastPostCard
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [postCardsPerPage, content]);

  useEffect(() => {
    console.log(slug);
  });

  return (
    <div>
      <SH.Title>Category: {categoryAsTitle}</SH.Title>
      <PostList content={currentPostCards} />
      <Pagination
        currentPage={currentPage}
        postCardsPerPage={postCardsPerPage}
        totalPostCards={content.length}
        setCurrentPage={setCurrentPage}
        setPostCardsPerPage={setPostCardsPerPage}
      />
    </div>
  );
};

export default CategoryPage;
