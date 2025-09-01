import filterByCategory from "../../../lib/filter/filterByCategory";
import filterBySection from "../../../lib/filter/filterBySection";
import { capitalizeFirstChar } from "../../../utils/common/capitalizeFirstChar";
import { sortInAlphabeticOrder } from "../../../utils/common/sortInAlphabeticOrder";

import ISectionObj from "../../../interfaces/ISectionObj";
import ICategoryObj from "../../../interfaces/ICategoryObj";

import {
  Checkbox,
  FilterOption,
  Label,
  Box,
  Form,
  FilterSet,
  SectionTitle,
  SectionFilterOption,
  ToggleCheckbox,
} from "./FilterMenu.styled";

const FilterMenu: React.FC<{
  categories: ICategoryObj[];
  categoryFilters: ICategoryObj[];
  sections?: ISectionObj[];
  sectionFilters?: ISectionObj[];
  setCategoryFilters: (arg: ICategoryObj[]) => void;
  setSectionFilters?: undefined | ((arg: ISectionObj[]) => void);
}> = ({
  categories,
  categoryFilters,
  sections,
  sectionFilters,
  setCategoryFilters,
  setSectionFilters,
}) => {
  const sectionsArr = sections
    ?.reduce((arr: any, section) => {
      arr.push(section.section);
      return arr;
    }, [])
    .sort((a: string, b: string) => sortInAlphabeticOrder(a, b));

  const nestedFilteringOptions: ICategoryObj[][] | undefined = sections
    ? Object.values(createFilterHashtable())
    : undefined;

  function createFilterHashtable() {
    const hashtable = { ...sectionsArr };
    for (const key in hashtable) {
      hashtable[key] = [];
    }

    const hashtableRefEntries = Object.entries(sectionsArr);

    categories.map((category): void => {
      const { section } = category;

      // @ts-ignore
      const refIndex: number = hashtableRefEntries.find((entry: string[]) => {
        const sectionInEntry: string = entry[1];
        return sectionInEntry === section;
      })[0];

      hashtable[refIndex].push(category);
    });

    return hashtable;
  }

  function validateAllCategoriesForSectionAreSelected(
    categoryFilters: ICategoryObj[],
    nestedFilteringOptions: ICategoryObj[][] | undefined,
    section: string
  ): boolean {
    const categoriesCheckedForSection = categoryFilters.filter(
      (category: ICategoryObj): boolean => category.section === section
    );
    const allCategoriesForSection: ICategoryObj[] | undefined =
      nestedFilteringOptions?.find(
        (setOfCategories: ICategoryObj[]): boolean =>
          setOfCategories[0].section === section
      );

    return (
      categoriesCheckedForSection.length === allCategoriesForSection?.length
    );
  }

  function clearFilters(): void {
    if (setSectionFilters) setSectionFilters([]);
    setCategoryFilters([]);
  }

  return (
    <Box>
      {nestedFilteringOptions ? (
        // Filter for Sections and Categories
        <Form>
          {nestedFilteringOptions.map(
            (nestedCategories: ICategoryObj[], index: number) => {
              const section: string = sectionsArr[index];
              const allCategoriesForSectionAreSelected: boolean =
                validateAllCategoriesForSectionAreSelected(
                  categoryFilters,
                  nestedFilteringOptions,
                  section
                );

              return (
                <FilterSet key={index}>
                  <SectionFilterOption>
                    <SectionTitle>{capitalizeFirstChar(section)}</SectionTitle>
                    <ToggleCheckbox
                      type="checkbox"
                      name={section}
                      value={section}
                      //@ts-ignore
                      checked={allCategoriesForSectionAreSelected || ""}
                      onChange={(): void =>
                        filterBySection(
                          { section },
                          allCategoriesForSectionAreSelected,
                          categories,
                          sectionFilters,
                          categoryFilters,
                          setCategoryFilters,
                          setSectionFilters
                        )
                      }
                    />
                  </SectionFilterOption>
                  <div>
                    {nestedCategories.map(
                      (categoryObj: ICategoryObj, index: number) => {
                        const {
                          category: categoryLabel,
                        }: { category: string } = categoryObj;
                        const categoryInFilterState: ICategoryObj | undefined =
                          categoryFilters.find(
                            (category: ICategoryObj) =>
                              category.category === categoryObj.category &&
                              category.section === categoryObj.section
                          );

                        const categoryLabelCapitalized =
                          categoryLabel === "archive.pdf"
                            ? categoryLabel.replace(/^[^.]+/, (match) =>
                                match.toUpperCase()
                              )
                            : capitalizeFirstChar(categoryLabel);

                        return (
                          <FilterOption isCategoryFilter key={index}>
                            <input
                              type="checkbox"
                              name={categoryLabel}
                              value={categoryLabel}
                              //@ts-ignore
                              checked={categoryInFilterState || ""}
                              onChange={(): void =>
                                filterByCategory(
                                  categoryObj,
                                  sectionFilters,
                                  categoryFilters,
                                  setSectionFilters,
                                  setCategoryFilters
                                )
                              }
                            />
                            <Label>{categoryLabelCapitalized}</Label>
                          </FilterOption>
                        );
                      }
                    )}
                  </div>
                </FilterSet>
              );
            }
          )}
        </Form>
      ) : (
        // Filter for Categories
        <Form>
          {categories.map((categoryObj: ICategoryObj, index: number) => {
            const { category }: { category: string } = categoryObj;
            const categoryInFilterState: ICategoryObj | undefined =
              categoryFilters.find(
                (item: ICategoryObj) =>
                  item.category === categoryObj.category &&
                  item.section === categoryObj.section
              );

            return (
              <FilterOption key={index} isCategoryFilter onlyCategoryFilters>
                <Checkbox
                  type="checkbox"
                  name={category}
                  value={category}
                  //@ts-ignore
                  checked={categoryInFilterState || ""}
                  onChange={(): void =>
                    filterByCategory(
                      categoryObj,
                      sectionFilters,
                      categoryFilters,
                      setSectionFilters,
                      setCategoryFilters
                    )
                  }
                />
                <Label>{capitalizeFirstChar(category)}</Label>
              </FilterOption>
            );
          })}
        </Form>
      )}
    </Box>
  );
};

export default FilterMenu;
