import { useEffect, useState } from "react";

import FilterMenu from "../../features/filter/FilterMenu";
import Pagination from "../../features/pagination/Pagination";
import DefaultView from "../../posts/views/default/DefaultView";

import ICategoryObj from "../../../interfaces/ICategoryObj";
import ISectionObj from "../../../interfaces/ISectionObj";

import {
  Container,
  FilterSection,
  PageTitle,
  TitleAndToggle,
  ViewSection,
} from "../Results.styled";

import { postView } from "../../../types/postView";
import ColumnView from "../../posts/views/column/ColumnView";
import PostViewToggle from "../../features/post-view-toggle/PostViewToggle";
import {
  getCategoriesForFilterMenu,
  getSectionsForFilterMenu,
} from "../../../lib/dynamic-pages/getSectionsAndCategories";

const ContentResults: React.FC<{
  content: any;
}> = ({ content }) => {
  const [sectionFilters, setSectionFilters] = useState<ISectionObj[]>([]);
  const [categoryFilters, setCategoryFilters] = useState<ICategoryObj[]>([]);
  const [filteredContent, setFilteredContent] = useState<any>(content);
  const [renderedPostCards, setRenderedPostCards] = useState<any>();
  const [postView, setPostView] = useState<postView>("default");

  const sections: ISectionObj[] = getSectionsForFilterMenu(content);
  const categories: ICategoryObj[] = getCategoriesForFilterMenu(content);

  function renderPostView(): React.ReactElement {
    switch (postView) {
      case "column":
        return <ColumnView content={renderedPostCards} />;
      default:
        return <DefaultView content={renderedPostCards} />;
    }
  }

  /**
   * @description filtering scenarios based on active section & category filters
   */
  useEffect((): void => {
    // no content filtering
    if (!sectionFilters.length && !categoryFilters.length) {
      setFilteredContent(content);
    }

    // filter content based on sectionsFilters
    if (sectionFilters.length && !categoryFilters.length) {
      const updatedFilteredContent = content.filter((singleContent: any) => {
        const sectionObj: ISectionObj = { section: singleContent.section };
        const sectionInFilterState: ISectionObj | undefined =
          sectionFilters.find(
            (item: ISectionObj): boolean => item.section === sectionObj.section
          );

        return sectionInFilterState;
      });
      setFilteredContent(updatedFilteredContent);
      return;
    }

    // filter content based on categoryFilters
    if (categoryFilters.length) {
      const updatedFilteredContent = content.filter((singleContent: any) => {
        const categoryObj: ICategoryObj = {
          category: singleContent.category,
          section: singleContent.section,
        };
        const categoryInFilterState: ICategoryObj | undefined =
          categoryFilters.find(
            (item: ICategoryObj): boolean =>
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
    <Container>
      <FilterSection>
        <TitleAndToggle>
          <div>
            <PageTitle>Content</PageTitle>
          </div>
          <PostViewToggle setPostView={setPostView} postView={postView} />
        </TitleAndToggle>
        <FilterMenu
          sections={sections}
          categories={categories}
          sectionFilters={sectionFilters}
          categoryFilters={categoryFilters}
          setSectionFilters={setSectionFilters}
          setCategoryFilters={setCategoryFilters}
        />
      </FilterSection>
      <ViewSection>
        {renderPostView()}
        <Pagination
          contentToPaginate={filteredContent}
          paginationResetDeps={[
            categoryFilters,
            sectionFilters,
            filteredContent,
            content,
          ]}
          setRenderedPostCards={setRenderedPostCards}
          totalPostCards={filteredContent.length}
        />
      </ViewSection>
    </Container>
  );
};

export default ContentResults;
