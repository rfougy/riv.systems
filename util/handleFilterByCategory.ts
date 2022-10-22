import ICategoryObj from "../interfaces/ICategoryObj";
import ISectionObj from "../interfaces/ISectionObj";

export default function handleFilterByCategory(
  categoryObj: ICategoryObj,
  categoryFilters: ICategoryObj[],
  sectionFilters: ISectionObj[] | undefined,
  setCategoryFilters: (arg: any) => void,
  setSectionFilters: ((arg: any) => void) | undefined
) {
  const categoryInFilterState: ICategoryObj | undefined = categoryFilters.find(
    (item: ICategoryObj) =>
      item.category === categoryObj.category &&
      item.section === categoryObj.section
  );
  const sectionInFilterState: ISectionObj | undefined = sectionFilters?.find(
    (item: ISectionObj) => item.section === categoryObj.section
  );

  // Docs: remove category from filter state.
  if (categoryInFilterState) {
    const updatedCategoryFilters: ICategoryObj[] = categoryFilters.filter(
      (item: ICategoryObj) => item !== categoryInFilterState
    );
    setCategoryFilters(updatedCategoryFilters);

    const categoryWithMatchingSection: ICategoryObj[] = categoryFilters.filter(
      (item: ICategoryObj) => item.section === categoryInFilterState.section
    );

    // Docs: remove section from filter state once all related categories are removed
    if (categoryWithMatchingSection.length === 1 && setSectionFilters) {
      const updatedSectionFilters: ISectionObj[] | undefined =
        sectionFilters?.filter(
          (item: ISectionObj) => item.section !== categoryInFilterState.section
        );
      setSectionFilters(updatedSectionFilters);
    }
  }

  // Docs: add category to filter state.
  if (!categoryInFilterState) {
    setCategoryFilters((prevState: ICategoryObj[]) => [
      ...prevState,
      categoryObj,
    ]);

    // Docs: add section to filter state.
    if (!sectionInFilterState && setSectionFilters) {
      const sectionObj: ISectionObj = { section: categoryObj.section };
      setSectionFilters((prevState: ISectionObj[]) => [
        ...prevState,
        sectionObj,
      ]);
    }
  }
}
