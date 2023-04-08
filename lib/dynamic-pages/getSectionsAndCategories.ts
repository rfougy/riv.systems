import ICategoryObj from "../../interfaces/ICategoryObj";
import ISectionObj from "../../interfaces/ISectionObj";

export function getSectionsForFilterMenu(content: any): ISectionObj[] {
  return content.reduce((list: ISectionObj[], singleContent: any) => {
    const { section: contentSection }: { section: string } = singleContent;

    const sectionObj: ISectionObj = {
      section: contentSection,
    };

    const sectionInList: ISectionObj | undefined = list.find(
      (item): boolean => item.section === sectionObj.section
    );

    if (!sectionInList) list.push(sectionObj);
    return list;
  }, []);
}

export function getCategoriesForFilterMenu(content: any): ICategoryObj[] {
  return content.reduce((list: ICategoryObj[], singleContent: any) => {
    const {
      category: categorySection,
      section: contentSection,
    }: { category: string; section: string } = singleContent;

    const categoryObj: ICategoryObj = {
      category: categorySection,
      section: contentSection,
    };

    const categoryInList: ICategoryObj | undefined = list.find(
      (item): boolean =>
        item.category === categoryObj.category &&
        item.section === categoryObj.section
    );

    if (!categoryInList) list.push(categoryObj);
    return list;
  }, []);
}
