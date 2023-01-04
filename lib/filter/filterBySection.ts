import ICategoryObj from "../../interfaces/ICategoryObj";
import ISectionObj from "../../interfaces/ISectionObj";

export default function filterBySection(
  sectionObj: ISectionObj,
  allCategoriesForSectionAreSelected: boolean,
  categories: ICategoryObj[],
  sectionFilters: ISectionObj[] | undefined,
  categoryFilters: ICategoryObj[],
  setSectionFilters: ((arg: any) => void) | undefined,
  setCategoryFilters: (arg: any) => void
): void {
  const sectionInFilterState: ISectionObj | undefined = sectionFilters?.find(
    (item: ISectionObj) => item.section === sectionObj.section
  );
  if (setSectionFilters) {
    if (sectionInFilterState && !allCategoriesForSectionAreSelected) {
      const updatedCategoryFilters: ICategoryObj[] = categories.filter(
        (item: ICategoryObj) => item.section === sectionObj.section
      );
      setCategoryFilters(updatedCategoryFilters);
      return;
    }

    // remove section and related categories from filter states
    if (sectionInFilterState) {
      const updatedSectionFilters: ISectionObj[] | undefined =
        sectionFilters?.filter(
          (item: ISectionObj) => item !== sectionInFilterState
        );
      const updatedCategoryFilters: ICategoryObj[] = categoryFilters.filter(
        (item: ICategoryObj) => item.section !== sectionObj.section
      );

      setSectionFilters(updatedSectionFilters);
      setCategoryFilters(updatedCategoryFilters);
      return;
    }

    // add section to filter state
    if (!sectionInFilterState) {
      const updatedCategoryFilters: ICategoryObj[] = categories.filter(
        (item: ICategoryObj) => item.section === sectionObj.section
      );

      setSectionFilters((prevState: ISectionObj[]) => [
        ...prevState,
        sectionObj,
      ]);
      setCategoryFilters((prevState: ICategoryObj[]) => [
        ...prevState,
        ...updatedCategoryFilters,
      ]);
      return;
    }
  }
}
