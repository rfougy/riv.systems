import {
  getAbsolutePath,
  getCategories,
  getPosts,
  getFileContents,
  getFileNamesInDirectory,
} from "./getCmsContent";

import matter from "gray-matter";

export function sortPostsByDate(posts: any) {
  return posts.sort((a: any, b: any) => {
    const dateA = new Date(a.frontmatter.datePublished);
    const dateB = new Date(b.frontmatter.datePublished);

    return dateB.getTime() - dateA.getTime();
  });
}

/**
 * @todo for content for category page, title and section are mismatched. This is temporary fix and needs more concrete solution.
 */
export function getContentByDynamicPage(slug: string | string[] | undefined) {
  if (!slug) {
    const sections: string[] = getFileNamesInDirectory();
    const allCategories: any = getCategories(sections);
    const allPosts: any = getPosts(allCategories);

    const allPostsSorted = sortPostsByDate(allPosts);

    return allPostsSorted;
  }

  if (slug?.length === 1) {
    const section = slug;
    // @ts-ignore
    const categoriesFromSection: any = getCategories(section);
    const postsFromSection: any = getPosts(categoriesFromSection);

    const postsFromSectionSorted = sortPostsByDate(postsFromSection);

    return postsFromSectionSorted;
  }

  if (slug?.length === 2) {
    const category: string = slug[0];
    const section: string = slug[1];
    const postsFromCategory: any = getPosts([
      { title: section, section: category },
    ]);

    const postsFromCategorySorted = sortPostsByDate(postsFromCategory);

    return postsFromCategorySorted;
  }

  if (slug?.length === 3) {
    const section: string = slug[0];
    const category: string = slug[1];
    const post: string = slug[2];
    const path: string = getAbsolutePath(section, category, post);
    const markDownContent = getFileContents(path);

    const { data: frontmatter, content: postContent } = matter(markDownContent);

    return { frontmatter, postContent };
  }
}
