import ISectionObj from "../../../interfaces/ISectionObj";
import ICategoryObj from "../../../interfaces/ICategoryObj";

import filterByCategory from "../../../lib/filter/filterByCategory";
import filterBySection from "../../../lib/filter/filterBySection";
import {
  Checkbox,
  FilterOption,
  Label,
  Container,
  Form,
  FilterSet,
  SectionTitle,
  SectionFilterOption,
  ToggleCheckbox,
} from "./FilterMenu.styled";
import { capitalizeFirstChar, sortInAlphabeticOrder } from "../../../utils";

const FilterMenu: React.FC<{
  categories: ICategoryObj[];
  categoryFilters: ICategoryObj[];
  sections?: ISectionObj[];
  sectionFilters?: ISectionObj[];
  setCategoryFilters: (arg: any) => void;
  setSectionFilters?: undefined | ((arg: any) => void);
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
    for (let key in hashtable) {
      hashtable[key] = [];
    }

    const hashtableRefEntries = Object.entries(sectionsArr);

    categories.map((category) => {
      const { section } = category;

      // @ts-ignore
      const refIndex = hashtableRefEntries.find((entry) => {
        const sectionInEntry = entry[1];
        return sectionInEntry === section;
      })[0];

      hashtable[refIndex].push(category);
    });

    return hashtable;
  }

  function validateCategoriesForSectionChecked(
    categoryFilters: ICategoryObj[],
    nestedFilteringOptions: ICategoryObj[][] | undefined,
    section: string
  ): boolean {
    const categoriesCheckedForSection = categoryFilters.filter(
      (category: ICategoryObj) => category.section === section
    );
    const allCategoriesForSection: ICategoryObj[] | undefined =
      nestedFilteringOptions?.find(
        (setOfCategories: ICategoryObj[]) =>
          setOfCategories[0].section === section
      );

    return (
      categoriesCheckedForSection.length === allCategoriesForSection?.length
    );
  }

  function clearFilters() {
    if (setSectionFilters) setSectionFilters([]);
    setCategoryFilters([]);
  }

  return (
    <Container>
      {nestedFilteringOptions ? (
        // Filter for Sections and Categories
        <Form>
          {nestedFilteringOptions.map((nestedCategories: any, index) => {
            const section = sectionsArr[index];

            return (
              <FilterSet key={index}>
                <SectionFilterOption>
                  <SectionTitle>{capitalizeFirstChar(section)}</SectionTitle>
                  <ToggleCheckbox
                    type="checkbox"
                    name={section}
                    value={section}
                    //@ts-ignore
                    checked={
                      validateCategoriesForSectionChecked(
                        categoryFilters,
                        nestedFilteringOptions,
                        section
                      ) || ""
                    }
                    onChange={() =>
                      filterBySection(
                        { section },
                        categories,
                        sectionFilters,
                        categoryFilters,
                        setSectionFilters,
                        setCategoryFilters
                      )
                    }
                  />
                </SectionFilterOption>
                <div>
                  {nestedCategories.map(
                    (categoryObj: ICategoryObj, index: number) => {
                      const { category: categoryLabel } = categoryObj;
                      const categoryInFilterState = categoryFilters.find(
                        (category) =>
                          category.category === categoryObj.category &&
                          category.section === categoryObj.section
                      );

                      return (
                        <FilterOption isCategoryFilter key={index}>
                          <input
                            type="checkbox"
                            name={categoryLabel}
                            value={categoryLabel}
                            //@ts-ignore
                            checked={categoryInFilterState || ""}
                            onChange={() =>
                              filterByCategory(
                                categoryObj,
                                sectionFilters,
                                categoryFilters,
                                setSectionFilters,
                                setCategoryFilters
                              )
                            }
                          />
                          <Label>{capitalizeFirstChar(categoryLabel)}</Label>
                        </FilterOption>
                      );
                    }
                  )}
                </div>
              </FilterSet>
            );
          })}
        </Form>
      ) : (
        // Filter for Categories
        <Form>
          {categories.map((categoryObj: ICategoryObj, index: number) => {
            const { category } = categoryObj;
            const categoryInFilterState = categoryFilters.find(
              (item) =>
                item.category === categoryObj.category &&
                item.section === categoryObj.section
            );

            return (
              <FilterOption
                isCategoryFilter={true}
                onlyCategoryFilters={true}
                key={index}
              >
                <Checkbox
                  type="checkbox"
                  name={category}
                  value={category}
                  //@ts-ignore
                  checked={categoryInFilterState || ""}
                  onChange={() =>
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
    </Container>
  );
};

export default FilterMenu;
