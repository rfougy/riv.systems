import { useEffect, useState } from "react";
import { sectionType } from "../../../types/sectionType";
import PostList from "../../posts/list/PostList";
import ICategoryObj from "../../../interfaces/ICategoryObj";
import ISectionObj from "../../../interfaces/ISectionObj";
import FilterMenu from "../../features/filter/FilterMenu";
import Pagination from "../../features/pagination/Pagination";

import * as SH from "../../../styles/shared/DynamicPage.styled";
import { capitalizeFirstChar } from "../../../utils/capitalizeFirstChar";

const SectionPage: React.FC<{
  section: sectionType | string;
  content: any;
}> = ({ section, content }) => {
  const [categoryFilters, setCategoryFilters] = useState<ICategoryObj[]>([]);
  const [filteredContent, setFilteredContent] = useState<any>(content);

  const sectionAsTitle: string = capitalizeFirstChar(section);

  // states for pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postCardsPerPage, setPostCardsPerPage] = useState<number>(2);

  // deducting the current PostCards for pagination
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
    setCurrentPage(1);
  }, [postCardsPerPage, categoryFilters, content]);

  /**
   * @description filtering scenarios based on active section & category filters
   */
  useEffect(() => {
    // no content filtering
    if (!categoryFilters.length) {
      setFilteredContent(content);
    }

    // filter content based on categoryFilters
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

  useEffect(() => {
    console.log(section);
  }, []);

  return (
    <div>
      <SH.Title>Section: {sectionAsTitle}</SH.Title>
      <FilterMenu
        categories={categories}
        categoryFilters={categoryFilters}
        setCategoryFilters={setCategoryFilters}
      />
      <PostList content={currentPostCards} />
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
