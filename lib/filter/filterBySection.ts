import ICategoryObj from "../../interfaces/ICategoryObj";
import ISectionObj from "../../interfaces/ISectionObj";

export default function filterBySection(
  sectionObj: ISectionObj,
  categories: ICategoryObj[],
  sectionFilters: ISectionObj[] | undefined,
  categoryFilters: ICategoryObj[],
  setSectionFilters: ((arg: any) => void) | undefined,
  setCategoryFilters: (arg: any) => void
) {
  const sectionInFilterState: ISectionObj | undefined = sectionFilters?.find(
    (item: ISectionObj) => item.section === sectionObj.section
  );

  // remove section and related categories from filter states
  if (sectionInFilterState && setSectionFilters) {
    const updatedSectionFilters: ISectionObj[] | undefined =
      sectionFilters?.filter(
        (item: ISectionObj) => item !== sectionInFilterState
      );
    setSectionFilters(updatedSectionFilters);

    const updatedCategoryFilters: ICategoryObj[] = categoryFilters.filter(
      (item: ICategoryObj) => item.section !== sectionObj.section
    );
    setCategoryFilters(updatedCategoryFilters);
  }

  // add section to filter state
  if (!sectionInFilterState && setSectionFilters) {
    setSectionFilters((prevState: ISectionObj[]) => [...prevState, sectionObj]);

    const updatedCategoryFilters: ICategoryObj[] = categories.filter(
      (item: ICategoryObj) => item.section === sectionObj.section
    );

    setCategoryFilters((prevState: ICategoryObj[]) => [
      ...prevState,
      ...updatedCategoryFilters,
    ]);
  }
}
