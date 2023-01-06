import { join } from "path";
import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { ICmsCategory } from "../../interfaces/lCmsCategories";

export function getAbsolutePath(
  section?: string,
  category?: string,
  post?: string
): string {
  return section
    ? category
      ? post
        ? join(process.cwd(), "cms", section, category, post + ".md")
        : join(process.cwd(), "cms", section, category)
      : join(process.cwd(), "cms", section)
    : join(process.cwd(), "cms");
}

export function getFileNamesInDirectory(...args: any): string[] {
  const path: string = getAbsolutePath(...args);
  const fileNames: string[] =
    process.env.NODE_ENV === "development"
      ? readdirSync(path)
      : readdirSync(path).filter((fileName) => fileName !== "example");

  return fileNames;
}

export function getFileContents(path: string): string {
  return readFileSync(path).toString();
}

export function getCategories(sections: string[]): ICmsCategory[] {
  let categories: ICmsCategory[] = sections.map((section: string) => {
    const posts: string[] = getFileNamesInDirectory(section);

    const categoryList: any = posts.map((fileName: string) => {
      return {
        title: fileName,
        section: section,
      };
    });

    return categoryList;
  });

  categories = Array.prototype.concat.apply([], categories);

  return categories;
}

export function getPosts(categories: ICmsCategory[]) {
  let posts: any = categories.map((category: any) => {
    const { title: categoryTitle, section } = category;
    const posts: any = getFileNamesInDirectory(section, categoryTitle);

    const postList: any = posts.map((fileName: string) => {
      const formattedFileName = fileName.replace(/\.md/, "");

      const path = getAbsolutePath(section, categoryTitle, formattedFileName);
      const markdownContent = getFileContents(path);

      const { data: frontmatter } = matter(markdownContent);

      return {
        fileName: formattedFileName,
        section: section,
        category: categoryTitle,
        frontmatter: frontmatter,
        path: `/content/${section}/${categoryTitle}/${formattedFileName}`,
      };
    });

    return postList;
  });

  posts = Array.prototype.concat.apply([], posts);

  return posts;
}
