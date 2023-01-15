import { useEffect, useState } from "react";

import FilterMenu from "../../features/filter/FilterMenu";
import Pagination from "../../features/pagination/Pagination";
import PostGrid from "../../posts/grid/PostGrid";

import { capitalizeFirstChar } from "../../../utils";

import { sectionType } from "../../../types/sectionType";
import ICategoryObj from "../../../interfaces/ICategoryObj";

import {
  FilterAndGridContainer,
  FilterContainer,
  PageTitle,
} from "../Results.styled";

const SectionResults: React.FC<{
  section: sectionType | string;
  content: any;
}> = ({ section, content }) => {
  const [categoryFilters, setCategoryFilters] = useState<ICategoryObj[]>([]);
  const [filteredContent, setFilteredContent] = useState<any>(content);
  const [renderedPostCards, setRenderedPostCards] = useState<any>();

  const sectionAsTitle: string = capitalizeFirstChar(section);

  const categories: ICategoryObj[] = content.reduce(
    (list: ICategoryObj[], singleContent: any) => {
      const {
        category: categorySection,
        section: contentSection,
      }: { category: string; section: sectionType } = singleContent;

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
            (item: ICategoryObj): boolean =>
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
    <FilterAndGridContainer>
      <FilterContainer>
        <PageTitle>{sectionAsTitle}</PageTitle>
        <FilterMenu
          categories={categories}
          categoryFilters={categoryFilters}
          setCategoryFilters={setCategoryFilters}
        />
      </FilterContainer>
      <section>
        <PostGrid content={renderedPostCards} />
        <Pagination
          contentToPaginate={filteredContent}
          paginationResetDeps={[categoryFilters, filteredContent, content]}
          setRenderedPostCards={setRenderedPostCards}
          totalPostCards={filteredContent.length}
        />
      </section>
    </FilterAndGridContainer>
  );
};

export default SectionResults;
