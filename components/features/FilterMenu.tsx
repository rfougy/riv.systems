import ISectionObj from "../../interfaces/ISectionObj";
import ICategoryObj from "../../interfaces/ICategoryObj";

import filterByCategory from "../../utils/filterByCategory";
import filterBySection from "../../utils/filterBySection";

const FilterMenu: React.FC<{
  sections?: ISectionObj[];
  categories: ICategoryObj[];
  sectionFilters?: ISectionObj[];
  categoryFilters: ICategoryObj[];
  setSectionFilters?: undefined | ((arg: any) => void);
  setCategoryFilters: (arg: any) => void;
}> = ({
  sections,
  categories,
  sectionFilters,
  categoryFilters,
  setSectionFilters,
  setCategoryFilters,
}) => {
  function clearFilters() {
    if (setSectionFilters) setSectionFilters([]);
    setCategoryFilters([]);
  }

  return (
    <div>
      <div>Filtering:</div>
      {sections && (
        <form>
          <div>Filter by Section:</div>
          {sections?.map((sectionObj: ISectionObj, index: number) => {
            const { section } = sectionObj;
            const sectionInFilterState = sectionFilters?.find(
              (item) => item.section === sectionObj.section
            );

            return (
              <div key={index}>
                <input
                  type="checkbox"
                  name={section}
                  value={section}
                  //@ts-ignore
                  checked={sectionInFilterState || ""}
                  onChange={() =>
                    filterBySection(
                      sectionObj,
                      categories,
                      sectionFilters,
                      categoryFilters,
                      setSectionFilters,
                      setCategoryFilters
                    )
                  }
                />
                <label>{section}</label>
              </div>
            );
          })}
        </form>
      )}
      <form>
        <div>Filter by Category:</div>
        {categories.map((categoryObj: ICategoryObj, index: number) => {
          const { category } = categoryObj;
          const categoryInFilterState = categoryFilters.find(
            (item) =>
              item.category === categoryObj.category &&
              item.section === categoryObj.section
          );

          return (
            <div key={index}>
              <input
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
              <label>{category}</label>
            </div>
          );
        })}
      </form>
      <button onClick={() => clearFilters()}>Clear Filters</button>
    </div>
  );
};

export default FilterMenu;
