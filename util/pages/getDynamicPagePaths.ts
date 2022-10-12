import {
  getAllPosts,
  getFileNamesInDirectory,
  getAllCategories,
} from "../getCmsContent";

export function getDynamicPagePaths() {
  const sections: any = getFileNamesInDirectory();
  const categories: any = getAllCategories(sections);
  const allPosts = getAllPosts(categories);

  const pathToRepoPage = [{ params: { slug: [] } }];

  const pathToSectionPage = sections.map((section: string) => ({
    params: {
      slug: [section],
    },
  }));

  const pathToCategoryPage = categories.map((category: any) => ({
    params: {
      slug: [category.section, category.title],
    },
  }));

  const pathToPostPage = allPosts.map((post: any) => ({
    params: {
      slug: [post.section, post.category, post.title],
    },
  }));

  return {
    pathToRepoPage,
    pathToSectionPage,
    pathToCategoryPage,
    pathToPostPage,
  };
}
