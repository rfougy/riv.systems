import ICategoryObj from "../interfaces/ICategoryObj";
import ISectionObj from "../interfaces/ISectionObj";

export default function handleFilterBySection(
  sectionObj: ISectionObj,
  categories: ICategoryObj[],
  categoryFilters: ICategoryObj[],
  sectionFilters: ISectionObj[] | undefined,
  setCategoryFilters: (arg: any) => void,
  setSectionFilters: ((arg: any) => void) | undefined
) {
  const sectionInFilterState: ISectionObj | undefined = sectionFilters?.find(
    (item: ISectionObj) => item.section === sectionObj.section
  );

  // Docs: remove section and related categories from filter states.
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

  // Docs: add section to filter state.
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
