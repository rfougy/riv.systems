import {
  getPosts,
  getFileNamesInDirectory,
  getCategories,
} from "../cms/getCmsContent";

import { ICmsCategory } from "./../../interfaces/lCmsCategories";

export function getDynamicPagePaths() {
  const sections: string[] = getFileNamesInDirectory();
  const allCategories: ICmsCategory[] = getCategories(sections);
  const allPosts = getPosts(allCategories);

  const pathToContentResults = [{ params: { slug: [] } }];

  const pathToSectionResults = sections.map((section: string) => ({
    params: {
      slug: [section],
    },
  }));

  const pathToCategoryResults = allCategories.map((category: any) => ({
    params: {
      slug: [category.section, category.title],
    },
  }));

  const pathToPostPage = allPosts.map((post: any) => ({
    params: {
      slug: [
        post.frontmatter.section,
        post.frontmatter.category,
        post.fileName,
      ],
    },
  }));

  return {
    pathToContentResults,
    pathToSectionResults,
    pathToCategoryResults,
    pathToPostPage,
  };
}
