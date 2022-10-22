import { useEffect, useState } from "react";
import PostList from "../PostList/PostList";
import ICategoryObj from "../../interfaces/ICategoryObj";
import ISectionObj from "../../interfaces/ISectionObj";
import FilterMenu from "../FilterMenu/FilterMenu";

const RepoPage: React.FC<{
  slug: string;
  content: any;
}> = ({ slug, content }) => {
  const [sectionFilters, setSectionFilters] = useState<ISectionObj[]>([]);
  const [categoryFilters, setCategoryFilters] = useState<ICategoryObj[]>([]);
  const [filteredContent, setFilteredContent] = useState<any>(null);

  const sections: ISectionObj[] = content.reduce(
    (list: ISectionObj[], singleContent: any) => {
      const { section: contentSection } = singleContent;

      const sectionObj: ISectionObj = {
        section: contentSection,
      };

      const sectionInList: ISectionObj | undefined = list.find(
        (item) => item.section === sectionObj.section
      );

      if (!sectionInList) list.push(sectionObj);
      return list;
    },
    []
  );

  const categories: ICategoryObj[] = content.reduce(
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
      <FilterMenu
        sections={sections}
        categories={categories}
        sectionFilters={sectionFilters}
        categoryFilters={categoryFilters}
        setCategoryFilters={setCategoryFilters}
        setSectionFilters={setSectionFilters}
      />
      <PostList slug={slug} content={filteredContent} />
    </div>
  );
};

export default RepoPage;
