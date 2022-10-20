import {
  getAbsolutePath,
  getCategories,
  getPosts,
  getFileContents,
  getFileNamesInDirectory,
} from "../getCmsContent";

export function getContentByDynamicPage(slug: string | string[] | undefined) {
  // Docs: Content for Repo Page
  if (!slug) {
    const sections: string[] = getFileNamesInDirectory();
    const allCategories: any = getCategories(sections);
    const allPosts: any = getPosts(allCategories);

    return allPosts;
  }

  // Docs: Content for Section Page
  if (slug?.length === 1) {
    const section = slug;
    const categoriesFromSection: any = getCategories(section);
    const postsFromSection: any = getPosts(categoriesFromSection);

    return postsFromSection;
  }

  // Docs: Content for Category Page
  if (slug?.length === 2) {
    const category: string = slug[0];
    const section: string = slug[1];
    // Bug: title and section are mismatched, this is temporary fix and needs more concrete solution.
    const postsFromCategory: any = getPosts([
      { title: section, section: category },
    ]);

    return postsFromCategory;
  }

  // Docs: Content for Post Page
  if (slug?.length === 3) {
    const section: string = slug[0];
    const category: string = slug[1];
    const post: string = slug[2];
    const path: string = getAbsolutePath(section, category, post);
    const postContent = getFileContents(path);

    return postContent;
  }
}
