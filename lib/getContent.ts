import { join } from "path";
import { readdirSync, readFileSync } from "fs";

// docs: returns path to directory. If there is a category, function will return path to category directory.
export function getAbsolutePathToDir(page: string, category?: string) {
  return category
    ? join(__dirname, "..", "content", page, category)
    : join(__dirname, "..", "content", page);
}

export default function getFileNamesInDirectory(
  page: string,
  category?: string
) {
  const path = getAbsolutePathToDir(page, category);

  return readdirSync(path).map((fileName) =>
    fileName.includes(".md") ? fileName.replace(".md", "") : fileName
  );
}

export function getFileContents(path: string) {
  return readFileSync(path).toString();
}

const test = getFileNamesInDirectory("test", "categoryOne");
console.log(test);
