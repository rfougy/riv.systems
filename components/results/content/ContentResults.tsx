import { useEffect, useState } from "react";

import FilterMenu from "../../features/filter/FilterMenu";
import Pagination from "../../features/pagination/Pagination";
import PostGrid from "../../posts/grid/PostGrid";

import ICategoryObj from "../../../interfaces/ICategoryObj";
import ISectionObj from "../../../interfaces/ISectionObj";

import {
  FilterAndGridContainer,
  FilterContainer,
  PageTitle,
} from "../Results.styled";

const ContentResults: React.FC<{
  content: any;
}> = ({ content }) => {
  const [sectionFilters, setSectionFilters] = useState<ISectionObj[]>([]);
  const [categoryFilters, setCategoryFilters] = useState<ICategoryObj[]>([]);
  const [filteredContent, setFilteredContent] = useState<any>(content);
  const [renderedPostCards, setRenderedPostCards] = useState<any>();

  const sections: ISectionObj[] = content.reduce(
    (list: ISectionObj[], singleContent: any) => {
      const { section: contentSection }: { section: string } = singleContent;

      const sectionObj: ISectionObj = {
        section: contentSection,
      };

      const sectionInList: ISectionObj | undefined = list.find(
        (item): boolean => item.section === sectionObj.section
      );

      if (!sectionInList) list.push(sectionObj);
      return list;
    },
    []
  );

  const categories: ICategoryObj[] = content.reduce(
    (list: ICategoryObj[], singleContent: any) => {
      const {
        category: categorySection,
        section: contentSection,
      }: { category: string; section: string } = singleContent;

      const categoryObj: ICategoryObj = {
        category: categorySection,
        section: contentSection,
      };

      const categoryInList: ICategoryObj | undefined = list.find(
        (item): boolean =>
          item.category === categoryObj.category &&
          item.section === categoryObj.section
      );

      if (!categoryInList) list.push(categoryObj);
      return list;
    },
    []
  );

  /**
   * @description filtering scenarios based on active section & category filters
   */
  useEffect((): void => {
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
            (item: ISectionObj): boolean => item.section === sectionObj.section
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
            (item: ICategoryObj): boolean =>
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
        <PostGrid content={renderedPostCards} />
        <Pagination
          contentToPaginate={filteredContent}
          paginationResetDeps={[
            categoryFilters,
            sectionFilters,
            filteredContent,
            content,
          ]}
          setRenderedPostCards={setRenderedPostCards}
          totalPostCards={filteredContent.length}
        />
      </section>
    </FilterAndGridContainer>
  );
};

export default ContentResults;
