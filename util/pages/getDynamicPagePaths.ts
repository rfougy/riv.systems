import { getAllPosts, getFileNamesInDirectory } from "../../lib/getContent";
import { sectionType } from "../../types/sectionType";

export function getDynamicPagePaths(section: sectionType) {
  const categories: string[] = getFileNamesInDirectory(section);
  const allPosts = getAllPosts(section, categories);

  const pathToPostPage = allPosts.map((post: any) => ({
    params: {
      slug: [post.category, post.title],
    },
  }));

  const pathToCategoryPage = categories.map((category: string) => ({
    params: {
      slug: [category],
    },
  }));

  const pathToSectionPage = [{ params: { slug: [] } }];

  return { pathToPostPage, pathToCategoryPage, pathToSectionPage };
}
