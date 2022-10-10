import { join } from "path";
import { readdirSync, readFileSync } from "fs";
import IPost from "../interfaces/post";

export function getAbsolutePath(
  section: string,
  category?: string,
  post?: string
) {
  return category
    ? post
      ? join(process.cwd(), "cms", section, category, post + ".md")
      : join(process.cwd(), "cms", section, category)
    : join(process.cwd(), "cms", section);
}

export default function getFileNamesInDirectory(
  section: string,
  category?: string
) {
  const path = getAbsolutePath(section, category);

  return readdirSync(path);
}

export function getFileContents(path: string) {
  return readFileSync(path).toString();
}

export function getAllPosts(section: string, categories: string[]) {
  let posts: IPost[][] = categories.map((category) => {
    const posts: string[] = getFileNamesInDirectory(section, category);

    const postList: IPost[] = posts.map((fileName: string) => {
      return {
        title: fileName.replace(/\.md/, ""),
        category: category,
      };
    });

    return postList;
  });

  posts = Array.prototype.concat.apply([], posts);

  return posts;
}
