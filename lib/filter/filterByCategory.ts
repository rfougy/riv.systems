import ICategoryObj from "../../interfaces/ICategoryObj";
import ISectionObj from "../../interfaces/ISectionObj";

export default function filterByCategory(
  categoryObj: ICategoryObj,
  sectionFilters: ISectionObj[] | undefined,
  categoryFilters: ICategoryObj[],
  setSectionFilters: ((arg: any) => void) | undefined,
  setCategoryFilters: (arg: any) => void
) {
  const categoryInFilterState: ICategoryObj | undefined = categoryFilters.find(
    (item: ICategoryObj): boolean =>
      item.category === categoryObj.category &&
      item.section === categoryObj.section
  );
  const sectionInFilterState: ISectionObj | undefined = sectionFilters?.find(
    (item: ISectionObj): boolean => item.section === categoryObj.section
  );

  // remove category from filter state.
  if (categoryInFilterState) {
    const updatedCategoryFilters: ICategoryObj[] = categoryFilters.filter(
      (item: ICategoryObj): boolean => item !== categoryInFilterState
    );
    setCategoryFilters(updatedCategoryFilters);

    const categoryWithMatchingSection: ICategoryObj[] = categoryFilters.filter(
      (item: ICategoryObj): boolean =>
        item.section === categoryInFilterState.section
    );

    // remove section from filter state once all related categories are removed
    if (categoryWithMatchingSection.length === 1 && setSectionFilters) {
      const updatedSectionFilters: ISectionObj[] | undefined =
        sectionFilters?.filter(
          (item: ISectionObj): boolean =>
            item.section !== categoryInFilterState.section
        );
      setSectionFilters(updatedSectionFilters);
    }
  }

  // add category to filter state.
  if (!categoryInFilterState) {
    setCategoryFilters((prevState: ICategoryObj[]): ICategoryObj[] => [
      ...prevState,
      categoryObj,
    ]);

    // add section to filter state.
    if (!sectionInFilterState && setSectionFilters) {
      const sectionObj: ISectionObj = { section: categoryObj.section };
      setSectionFilters((prevState: ISectionObj[]): ISectionObj[] => [
        ...prevState,
        sectionObj,
      ]);
    }
  }
}
