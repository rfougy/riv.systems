import { useEffect, useState } from "react";
import { sectionType } from "../../types/sectionType";
import PostList from "../PostList/PostList";
import ICategoryObj from "../../interfaces/ICategoryObj";
import ISectionObj from "../../interfaces/ISectionObj";
import FilterMenu from "../FilterMenu/FilterMenu";

const SectionPage: React.FC<{
  slug: string;
  content: any;
  section: sectionType | string;
}> = ({ slug, content, section }) => {
  const [categoryFilters, setCategoryFilters] = useState<ICategoryObj[]>([]);
  const [filteredContent, setFilteredContent] = useState<any>(null);

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
    if (!categoryFilters.length) {
      setFilteredContent(content);
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
  }, [categoryFilters, content]);

  return (
    <div>
      <FilterMenu
        categories={categories}
        categoryFilters={categoryFilters}
        setCategoryFilters={setCategoryFilters}
      />
      <PostList slug={slug} content={filteredContent} section={section} />
    </div>
  );
};

export default SectionPage;
