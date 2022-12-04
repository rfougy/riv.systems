import { useEffect, useState } from "react";
import Pagination from "../../features/pagination/Pagination";
import PostGrid from "../../posts/grid/PostGrid";
import { capitalizeFirstChar } from "../../../utils/capitalizeFirstChar";

const CategoryPage: React.FC<{
  category: string;
  content: any;
}> = ({ category, content }) => {
  // states for pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postCardsPerPage, setPostCardsPerPage] = useState<number>(2);

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

  return (
    <div>
      <h1>Category: {categoryAsTitle}</h1>
      <PostGrid content={currentPostCards} />
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
