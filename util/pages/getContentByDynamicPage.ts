import IPost from "../../interfaces/post";
import {
  getAbsolutePath,
  getAllPosts,
  getFileContents,
  getFileNamesInDirectory,
} from "../../lib/getContent";

export function getContentByDynamicPage(slug: string | string[] | undefined) {
  // Docs: Content for Section Page
  if (!slug) {
    const categories: string[] = getFileNamesInDirectory("test");
    const allPosts: IPost[][] = getAllPosts("test", categories);

    return allPosts;
  }

  // Docs: Content for Category Page
  if (slug?.length === 1) {
    const category: string = slug[0];
    const postsFromCategory: string[] = getFileNamesInDirectory(
      "test",
      category
    ).map((post) => post.replace(/\.md/, ""));

    return postsFromCategory;
  }

  // Docs: Content for Post Page
  if (slug?.length === 2) {
    const category: string = slug[0];
    const post: string = slug[1];
    const path: string = getAbsolutePath("test", category, post);
    const postContent = getFileContents(path);

    return postContent;
  }
}
