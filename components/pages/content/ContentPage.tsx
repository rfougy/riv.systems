import { useEffect, useState } from "react";
import PostGrid from "../../posts/grid/PostGrid";
import ICategoryObj from "../../../interfaces/ICategoryObj";
import ISectionObj from "../../../interfaces/ISectionObj";
import FilterMenu from "../../features/filter/FilterMenu";
import Pagination from "../../features/pagination/Pagination";
import {
  FilterAndGridContainer,
  FilterContainer,
  PageTitle,
} from "../../../styles/Layouts.styled";
import PageHead from "../../head/page/PageHead";

const ContentPage: React.FC<{
  content: any;
}> = ({ content }) => {
  const [sectionFilters, setSectionFilters] = useState<ISectionObj[]>([]);
  const [categoryFilters, setCategoryFilters] = useState<ICategoryObj[]>([]);
  const [filteredContent, setFilteredContent] = useState<any>(content);

  // states for pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postCardsPerPage, setPostCardsPerPage] = useState<number>(6);

  // deducting the current PostCards for pagination
  const indexOfLastPostCard: number = currentPage * postCardsPerPage;
  const indexOfFirstPostCard: number = indexOfLastPostCard - postCardsPerPage;
  const currentPostCards: any[] = filteredContent.slice(
    indexOfFirstPostCard,
    indexOfLastPostCard
  );

  const sections: ISectionObj[] = content.reduce(
    (list: ISectionObj[], singleContent: any) => {
      const { section: contentSection } = singleContent;

      const sectionObj: ISectionObj = {
        section: contentSection,
      };

      const sectionInList: ISectionObj | undefined = list.find(
        (item) => item.section === sectionObj.section
      );

      if (!sectionInList) list.push(sectionObj);
      return list;
    },
    []
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
  }, [postCardsPerPage, categoryFilters, sectionFilters, content]);

  /**
   * @description filtering scenarios based on active section & category filters
   */
  useEffect(() => {
    // no content filtering
    if (!sectionFilters.length && !categoryFilters.length) {
      setFilteredContent(content);
    }

    // filter content based on sectionsFilters
    if (sectionFilters.length && !categoryFilters.length) {
      const updatedFilteredContent = content.filter((singleContent: any) => {
        const sectionObj: ISectionObj = { section: singleContent.section };
        const sectionInFilterState: ISectionObj | undefined =
          sectionFilters.find(
            (item: ISectionObj) => item.section === sectionObj.section
          );

        return sectionInFilterState;
      });
      setFilteredContent(updatedFilteredContent);
      return;
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
  }, [categoryFilters, sectionFilters, content]);

  return (
    <>
      <PageHead
        title={"Content"}
        description={
          "Browse all blog posts in RIV.SYSTEMS, from professional work to journal entries and miscellaneous content."
        }
      />
      <FilterAndGridContainer>
        <FilterContainer>
          <PageTitle>Content</PageTitle>
          <FilterMenu
            sections={sections}
            categories={categories}
            sectionFilters={sectionFilters}
            categoryFilters={categoryFilters}
            setSectionFilters={setSectionFilters}
            setCategoryFilters={setCategoryFilters}
          />
        </FilterContainer>
        <section>
          <PostGrid content={currentPostCards} />
          <Pagination
            currentPage={currentPage}
            postCardsPerPage={postCardsPerPage}
            totalPostCards={filteredContent.length}
            setCurrentPage={setCurrentPage}
            setPostCardsPerPage={setPostCardsPerPage}
          />
        </section>
      </FilterAndGridContainer>
    </>
  );
};

export default ContentPage;
