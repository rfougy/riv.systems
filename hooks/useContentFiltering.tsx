import { useState, useEffect } from "react";
import ISectionObj from "../interfaces/ISectionObj";
import ICategoryObj from "../interfaces/ICategoryObj";
import {
  getCategoriesForFilterMenu,
  getSectionsForFilterMenu,
} from "../lib/dynamic-pages/getSectionsAndCategories";

function useContentFiltering(
  content: any,
  filterCategoriesOnly?: boolean
): any {
  const [filteredContent, setFilteredContent] = useState<any>(content);
  const [sectionFilters, setSectionFilters] = useState<ISectionObj[]>([]);
  const [categoryFilters, setCategoryFilters] = useState<ICategoryObj[]>([]);

  const categories: ICategoryObj[] = getCategoriesForFilterMenu(content);
  const sections: ISectionObj[] | undefined = filterCategoriesOnly
    ? undefined
    : getSectionsForFilterMenu(content);

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

  return {
    filteredContent,
    categories,
    categoryFilters,
    setCategoryFilters,
    sections,
    sectionFilters,
    setSectionFilters,
  };
}

export default useContentFiltering;
