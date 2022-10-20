import {
  getPosts,
  getFileNamesInDirectory,
  getCategories,
} from "../getCmsContent";

export function getDynamicPagePaths() {
  const sections: any = getFileNamesInDirectory();
  const allCategories: any = getCategories(sections);
  const allPosts = getPosts(allCategories);

  const pathToRepoPage = [{ params: { slug: [] } }];

  const pathToSectionPage = sections.map((section: string) => ({
    params: {
      slug: [section],
    },
  }));

  const pathToCategoryPage = allCategories.map((category: any) => ({
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
