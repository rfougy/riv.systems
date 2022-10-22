import { useEffect, useState } from "react";
import PostList from "../PostList/PostList";
import ICategoryObj from "../../interfaces/ICategoryObj";
import ISectionObj from "../../interfaces/ISectionObj";

const RepoPage: React.FC<{
  slug: string;
  content: any;
}> = ({ slug, content }) => {
  const [sectionFilters, setSectionFilters] = useState<ISectionObj[]>([]);
  const [categoryFilters, setCategoryFilters] = useState<ICategoryObj[]>([]);
  const [filteredContent, setFilteredContent] = useState<any>(null);

  const sections = content.reduce((list: ISectionObj[], singleContent: any) => {
    const { section: contentSection } = singleContent;

    const sectionObj: ISectionObj = {
      section: contentSection,
    };

    const sectionInList: ISectionObj | undefined = list.find(
      (item) => item.section === sectionObj.section
    );

    if (!sectionInList) list.push(sectionObj);
    return list;
  }, []);

  const categories = content.reduce(
    (list: ICategoryObj[], singleContent: any) => {
      const { category: categorySection, section: contentSection } =
        singleContent;

      const categoryObj: ICategoryObj = {
        category: categorySection,
        section: contentSection,
      };

      const categoryInList: ICategoryObj | undefined = list.find(
        (item) =>
          item.category === categoryObj.category &&
          item.section === categoryObj.section
      );

      if (!categoryInList) list.push(categoryObj);
      return list;
    },
    []
  );

  /*

  Notes:
  - improve naming conventions
  
  */

  function handleFilterByCategory(categoryObj: ICategoryObj) {
    const categoryInFilterState: ICategoryObj | undefined =
      categoryFilters.find(
        (item: ICategoryObj) =>
          item.category === categoryObj.category &&
          item.section === categoryObj.section
      );
    const sectionInFilterState: ISectionObj | undefined = sectionFilters.find(
      (item: ISectionObj) => item.section === categoryObj.section
    );

    // Docs: remove category from filter state.
    if (categoryInFilterState) {
      const updatedCategoryFilters: ICategoryObj[] = categoryFilters.filter(
        (item: ICategoryObj) => item !== categoryInFilterState
      );
      setCategoryFilters(updatedCategoryFilters);

      const categoryWithMatchingSection: ICategoryObj[] =
        categoryFilters.filter(
          (item: ICategoryObj) => item.section === categoryInFilterState.section
        );

      // Docs: remove section from filter state once all related categories are removed
      if (categoryWithMatchingSection.length === 1) {
        const updatedSectionFilters: ISectionObj[] = sectionFilters.filter(
          (item: ISectionObj) => item.section !== categoryInFilterState.section
        );
        setSectionFilters(updatedSectionFilters);
      }
    }

    // Docs: add category to filter state.
    if (!categoryInFilterState) {
      setCategoryFilters((prevState) => [...prevState, categoryObj]);

      // Docs: add section to filter state.
      if (!sectionInFilterState) {
        const sectionObj: ISectionObj = { section: categoryObj.section };
        setSectionFilters((prevState) => [...prevState, sectionObj]);
      }
    }
  }

  function handleFilterBySection(sectionObj: ISectionObj) {
    const sectionInFilterState: ISectionObj | undefined = sectionFilters.find(
      (item: ISectionObj) => item.section === sectionObj.section
    );

    // Docs: remove section and related categories from filter states.
    if (sectionInFilterState) {
      const updatedSectionFilters: ISectionObj[] = sectionFilters.filter(
        (item: ISectionObj) => item !== sectionInFilterState
      );
      setSectionFilters(updatedSectionFilters);

      const updatedCategoryFilters: ICategoryObj[] = categoryFilters.filter(
        (item: ICategoryObj) => item.section !== sectionObj.section
      );
      setCategoryFilters(updatedCategoryFilters);
    }

    // Docs: add section to filter state.
    if (!sectionInFilterState) {
      setSectionFilters((prevState) => [...prevState, sectionObj]);

      const updatedCategoryFilters: ICategoryObj[] = categories.filter(
        (item: ICategoryObj) => item.section === sectionObj.section
      );

      setCategoryFilters((prevState) => [
        ...prevState,
        ...updatedCategoryFilters,
      ]);
    }
  }

  useEffect(() => {
    // Docs: no content filtering
    if (!sectionFilters.length && !categoryFilters.length) {
      setFilteredContent(content);
    }

    // Docs: filter content based on sectionFilters
    if (sectionFilters.length && !categoryFilters.length) {
      const updatedFilteredContent = content.filter((singleContent: any) => {
        const sectionObj: ISectionObj = { section: singleContent.section };
        const sectionInFilterState: ISectionObj | undefined =
          sectionFilters.find(
            (item: ISectionObj) => item.section === sectionObj.section
          );

        return sectionInFilterState;
      });
      setFilteredContent(updatedFilteredContent);
      return;
    }

    // Docs: filter content based on categoryFilters
    if (categoryFilters.length) {
      const updatedFilteredContent = content.filter((singleContent: any) => {
        const categoryObj: ICategoryObj = {
          category: singleContent.category,
          section: singleContent.section,
        };
        const categoryInFilterState: ICategoryObj | undefined =
          categoryFilters.find(
            (item: ICategoryObj) =>
              item.category === categoryObj.category &&
              item.section === categoryObj.section
          );

        return categoryInFilterState;
      });
      setFilteredContent(updatedFilteredContent);
      return;
    }
  }, [categoryFilters, sectionFilters, content]);

  return (
    <div>
      <div>
        <div>Filtering:</div>
        <form>
          <div>Filter by Section:</div>
          {sections.map((sectionObj: ISectionObj, index: number) => {
            const { section } = sectionObj;
            const sectionInFilterState = sectionFilters.find(
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
                  onChange={() => handleFilterBySection(sectionObj)}
                />
                <label>{section}</label>
              </div>
            );
          })}
        </form>
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
                  onChange={() => handleFilterByCategory(categoryObj)}
                />
                <label>{category}</label>
              </div>
            );
          })}
        </form>
      </div>
      <PostList slug={slug} content={filteredContent} />
    </div>
  );
};

export default RepoPage;
