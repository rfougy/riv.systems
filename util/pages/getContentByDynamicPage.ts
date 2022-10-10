import IPost from "../../interfaces/post";
import {
  getAbsolutePath,
  getAllPosts,
  getFileContents,
  getFileNamesInDirectory,
} from "../getCmsContent";
import { sectionType } from "../../types/sectionType";

export function getContentByDynamicPage(
  section: sectionType,
  slug: string | string[] | undefined
) {
  // Docs: Content for Section Page
  if (!slug) {
    const categories: string[] = getFileNamesInDirectory(section);
    const allPosts: IPost[][] = getAllPosts(section, categories);

    return allPosts;
  }

  // Docs: Content for Category Page
  if (slug?.length === 1) {
    const category: string = slug[0];
    const postsFromCategory: string[] = getFileNamesInDirectory(
      section,
      category
    ).map((post) => post.replace(/\.md/, ""));

    return postsFromCategory;
  }

  // Docs: Content for Post Page
  if (slug?.length === 2) {
    const category: string = slug[0];
    const post: string = slug[1];
    const path: string = getAbsolutePath(section, category, post);
    const postContent = getFileContents(path);

    return postContent;
  }
}
