import ICategoryObj from "../../interfaces/ICategoryObj";
import ISectionObj from "../../interfaces/ISectionObj";

export default function filterBySection(
  sectionObj: ISectionObj,
  allCategoriesForSectionAreSelected: boolean,
  categories: ICategoryObj[],
  sectionFilters: ISectionObj[] | undefined,
  categoryFilters: ICategoryObj[],
  setCategoryFilters: (arg: any) => void,
  setSectionFilters: ((arg: any) => void) | undefined
): void {
  const sectionInFilterState: ISectionObj | undefined = sectionFilters?.find(
    (item: ISectionObj): boolean => item.section === sectionObj.section
  );
  // add section and all categories to filter states (via clicking toggle checkbox)
  if (sectionInFilterState && !allCategoriesForSectionAreSelected) {
    const updatedCategoryFilters: ICategoryObj[] = categories.filter(
      (item: ICategoryObj): boolean => item.section === sectionObj.section
    );

    setCategoryFilters(updatedCategoryFilters);

    return;
  }

  // remove section and related categories from filter states
  if (sectionInFilterState) {
    const updatedSectionFilters: ISectionObj[] | undefined =
      sectionFilters?.filter(
        (item: ISectionObj): boolean => item !== sectionInFilterState
      );
    const updatedCategoryFilters: ICategoryObj[] = categoryFilters.filter(
      (item: ICategoryObj): boolean => item.section !== sectionObj.section
    );

    setSectionFilters && setSectionFilters(updatedSectionFilters);
    setCategoryFilters(updatedCategoryFilters);

    return;
  }

  // add section to filter state
  if (!sectionInFilterState) {
    const updatedCategoryFilters: ICategoryObj[] = categories.filter(
      (item: ICategoryObj): boolean => item.section === sectionObj.section
    );

    setSectionFilters &&
      setSectionFilters((prevState: ISectionObj[]): ISectionObj[] => [
        ...prevState,
        sectionObj,
      ]);
    setCategoryFilters((prevState: ICategoryObj[]): ICategoryObj[] => [
      ...prevState,
      ...updatedCategoryFilters,
    ]);

    return;
  }
}
