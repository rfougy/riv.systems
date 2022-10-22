import ISectionObj from "../../interfaces/ISectionObj";
import ICategoryObj from "../../interfaces/ICategoryObj";

import handleFilterByCategory from "../../util/handleFilterByCategory";
import handleFilterBySection from "../../util/handleFilterBySection";

const FilterMenu: React.FC<{
  sections?: ISectionObj[];
  categories: ICategoryObj[];
  sectionFilters?: ISectionObj[];
  categoryFilters: ICategoryObj[];
  setCategoryFilters: (arg: any) => void;
  setSectionFilters?: undefined | ((arg: any) => void);
}> = ({
  sections,
  categories,
  sectionFilters,
  categoryFilters,
  setCategoryFilters,
  setSectionFilters,
}) => {
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
                    handleFilterBySection(
                      sectionObj,
                      categories,
                      categoryFilters,
                      sectionFilters,
                      setCategoryFilters,
                      setSectionFilters
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
                  handleFilterByCategory(
                    categoryObj,
                    categoryFilters,
                    sectionFilters,
                    setCategoryFilters,
                    setSectionFilters
                  )
                }
              />
              <label>{category}</label>
            </div>
          );
        })}
      </form>
    </div>
  );
};

export default FilterMenu;
