import { useEffect, useState } from "react";
import Pagination from "../../features/Pagination/Pagination";
import PostList from "../../posts/PostList/PostList";

const CategoryPage: React.FC<{
  slug: string;
  content: any;
}> = ({ slug, content }) => {
  // Docs: states for pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postCardsPerPage, setPostCardsPerPage] = useState<number>(2);

  // Docs: currentPostCards for pagination
  const indexOfLastPostCard: number = currentPage * postCardsPerPage;
  const indexOfFirstPostCard: number = indexOfLastPostCard - postCardsPerPage;
  const currentPostCards: any[] = content.slice(
    indexOfFirstPostCard,
    indexOfLastPostCard
  );

  useEffect(() => {
    // Docs: reset current page for pagination upon filtering
    setCurrentPage(1);
  }, [postCardsPerPage, content]);

  return (
    <div>
      <PostList slug={slug} content={currentPostCards} />
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
