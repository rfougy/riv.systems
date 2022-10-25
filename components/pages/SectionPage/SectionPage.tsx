import { useEffect, useState } from "react";
import { sectionType } from "../../../types/sectionType";
import PostList from "../../posts/PostList/PostList";
import ICategoryObj from "../../../interfaces/ICategoryObj";
import ISectionObj from "../../../interfaces/ISectionObj";
import FilterMenu from "../../features/FilterMenu/FilterMenu";
import Pagination from "../../features/Pagination/Pagination";

const SectionPage: React.FC<{
  slug: string;
  content: any;
  section: sectionType | string;
}> = ({ slug, content, section }) => {
  const [categoryFilters, setCategoryFilters] = useState<ICategoryObj[]>([]);
  const [filteredContent, setFilteredContent] = useState<any>(content);

  // Docs: states for pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postCardsPerPage, setPostCardsPerPage] = useState<number>(2);

  // Docs: currentPostCards for pagination
  const indexOfLastPostCard: number = currentPage * postCardsPerPage;
  const indexOfFirstPostCard: number = indexOfLastPostCard - postCardsPerPage;
  const currentPostCards: any[] = filteredContent.slice(
    indexOfFirstPostCard,
    indexOfLastPostCard
  );

  const categories: ICategoryObj[] = content.reduce(
    (list: ICategoryObj[], singleContent: any) => {
      const { category: categorySection, section: contentSection } =
        singleContent;

      const categoryObj: ICategoryObj = {
        category: categorySection,
        section: contentSection,
      };

      const categoryInList: ICategoryObj | undefined = list.find(
        (item) =>
          item.category === categoryObj.category &&
          item.section === categoryObj.section
      );

      if (!categoryInList) list.push(categoryObj);
      return list;
    },
    []
  );

  useEffect(() => {
    // Docs: reset current page for pagination upon filtering
    setCurrentPage(1);
  }, [postCardsPerPage, categoryFilters, content]);

  useEffect(() => {
    // Docs: no content filtering
    if (!categoryFilters.length) {
      setFilteredContent(content);
    }

    // Docs: filter content based on categoryFilters
    if (categoryFilters.length) {
      const updatedFilteredContent = content.filter((singleContent: any) => {
        const categoryObj: ICategoryObj = {
          category: singleContent.category,
          section: singleContent.section,
        };
        const categoryInFilterState: ICategoryObj | undefined =
          categoryFilters.find(
            (item: ICategoryObj) =>
              item.category === categoryObj.category &&
              item.section === categoryObj.section
          );

        return categoryInFilterState;
      });
      setFilteredContent(updatedFilteredContent);
      return;
    }
  }, [categoryFilters, content]);

  return (
    <div>
      <FilterMenu
        categories={categories}
        categoryFilters={categoryFilters}
        setCategoryFilters={setCategoryFilters}
      />
      <PostList slug={slug} content={currentPostCards} section={section} />
      <Pagination
        currentPage={currentPage}
        postCardsPerPage={postCardsPerPage}
        totalPostCards={filteredContent.length}
        setCurrentPage={setCurrentPage}
        setPostCardsPerPage={setPostCardsPerPage}
      />
    </div>
  );
};

export default SectionPage;
