import { useEffect, useState } from "react";
import PostList from "../PostList/PostList";

const RepoPage: React.FC<{
  slug: string;
  content: any;
}> = ({ slug, content }) => {
  const [sectionFilters, setSectionFilters] = useState<any[]>([]);
  const [categoryFilters, setCategoryFilters] = useState<any[]>([]);
  const [filteredContent, setFilteredContent] = useState<any>(null);

  const sections = content.reduce((sectionList: any[], singleContent: any) => {
    const { section: contentSection } = singleContent;

    const sectionObj = {
      section: contentSection,
    };

    const sectionInList = sectionList.find(
      (item) => item.section === sectionObj.section
    );

    if (!sectionInList) sectionList.push(sectionObj);
    return sectionList;
  }, []);

  const categories = content.reduce(
    (categoryList: any[], singleContent: any) => {
      const { category: categorySection, section: contentSection } =
        singleContent;

      const categoryObj = {
        category: categorySection,
        section: contentSection,
      };

      const categoryInList = categoryList.find(
        (item) =>
          item.category === categoryObj.category &&
          item.section === categoryObj.section
      );

      if (!categoryInList) categoryList.push(categoryObj);
      return categoryList;
    },
    []
  );

  function handleFilterByCategory(categoryObj: any) {
    const categoryInState = categoryFilters.find(
      (item) =>
        item.category === categoryObj.category &&
        item.section === categoryObj.section
    );
    const sectionInState = sectionFilters.find(
      (item) => item.section === categoryObj.section
    );

    console.log(
      "\x1b[36m%s\x1b[0m",
      "TRIGGER (handleFilterByCategory): ",
      categoryObj.category
    );

    // Docs: Remove category from filter state.
    if (categoryInState) {
      const updatedCategoryFilters = categoryFilters.filter(
        (category) => category !== categoryInState
      );
      setCategoryFilters(updatedCategoryFilters);

      console.log("Category in State.");
      console.log("updatedCategoryFilters: ", updatedCategoryFilters);
      console.log("categoryFilters: ", categoryFilters);
    }

    // Docs: Add category to filter state.
    if (!categoryInState) {
      setCategoryFilters((currState) => [...currState, categoryObj]);

      console.log("Category not in State.");
      console.log("categoryFilters: ", categoryFilters);

      // Docs: Add section to filter state.
      if (!sectionInState) {
        const sectionObj = { section: categoryObj.section };
        setSectionFilters((currState) => [...currState, sectionObj]);

        console.log("sectionFilters: ", sectionFilters);
      }
    }
  }

  function handleFilterBySection(sectionObj: any) {
    const sectionInState = sectionFilters.find(
      (item) => item.section === sectionObj.section
    );

    console.log(
      "\x1b[36m%s\x1b[0m",
      "TRIGGER (handleFilterBySection): ",
      sectionObj
    );

    // Docs: Remove section and affiliated categories from filter states.
    if (sectionInState) {
      const updatedSectionFilters = sectionFilters.filter(
        (section) => section !== sectionInState
      );
      setSectionFilters(updatedSectionFilters);

      const updatedCategoryFilters = categoryFilters.filter(
        (item) => item.section !== sectionObj.section
      );
      setCategoryFilters(updatedCategoryFilters);

      console.log("Section in State.");
      console.log("updatedSectionFilters: ", updatedSectionFilters);
      console.log("sectionFilters: ", sectionFilters);
      console.log("updatedCategoryFilters: ", updatedCategoryFilters);
      console.log("categoryFilters: ", categoryFilters);
    }

    // Docs: Add section to filter state.
    if (!sectionInState) {
      setSectionFilters((currState) => [...currState, sectionObj]);
      console.log(categories);

      const updatedCategoryFilters = categories.filter(
        (item: any) => item.section === sectionObj.section
      );

      setCategoryFilters((currState) => [
        ...currState,
        ...updatedCategoryFilters,
      ]);
    }
  }

  // Docs: Initialize filteredContent state with content passed as props
  useEffect(() => {
    setFilteredContent(content);
  }, [content]);

  useEffect(() => {
    console.log("\x1b[31m%s\x1b[0m", "TRIGGER (useEffect, filteredContent)");

    if (!categoryFilters.length && !sectionFilters.length) {
      console.log("\x1b[33m%s\x1b[0m", "TRIGGER: no filter");
      setFilteredContent(content);
    }

    if (!categoryFilters.length && sectionFilters.length) {
      console.log("\x1b[33m%s\x1b[0m", "TRIGGER: filter by section");

      const updatedFilteredContent = content.filter((singleContent: any) => {
        const { section } = singleContent;
        const contentSectionObj = { section: section };
        const contentSectionInFilteredState = sectionFilters.find(
          (item) => item.section === contentSectionObj.section
        );

        return contentSectionInFilteredState;
      });
      setFilteredContent(updatedFilteredContent);
      return;
    }

    // Docs: filter content based on categories in filter state
    if (categoryFilters.length) {
      console.log("\x1b[33m%s\x1b[0m", "TRIGGER: filter by category");
      const updatedFilteredContent = content.filter((singleContent: any) => {
        const { category, section } = singleContent;
        const contentCategoryObj = { category: category, section: section };
        const contentCategoryInFilteredState = categoryFilters.find(
          (item) =>
            item.category === contentCategoryObj.category &&
            item.section === contentCategoryObj.section
        );

        return contentCategoryInFilteredState;
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
          {sections.map((sectionObj: any, index: number) => {
            const { section } = sectionObj;
            const sectionInState = sectionFilters.find(
              (item) => item.section === sectionObj.section
            );

            return (
              <div key={index}>
                <input
                  type="checkbox"
                  name={section}
                  value={section}
                  checked={sectionInState}
                  onChange={() => handleFilterBySection(sectionObj)}
                />
                <label>{section}</label>
              </div>
            );
          })}
        </form>
        <form>
          <div>Filter by Category:</div>
          {categories.map((categoryObj: any, index: number) => {
            const { category } = categoryObj;
            const categoryInState = categoryFilters.find(
              (item) =>
                item.category === categoryObj.category &&
                item.section === categoryObj.section
            );

            return (
              <div key={index}>
                <input
                  type="checkbox"
                  name={category}
                  value={categoryObj}
                  checked={categoryInState}
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
