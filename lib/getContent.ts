import { join, resolve } from "path";
import { readdirSync, readFileSync } from "fs";

export function getAbsolutePathToDir(page: string, category?: string) {
  return category
    ? join(process.cwd(), "cms", page, category)
    : join(process.cwd(), "cms", page);
}

export default function getFileNamesInDirectory(
  page: string,
  category?: string
) {
  const path = getAbsolutePathToDir(page, category);

  return readdirSync(path);
}

export function getFileContents(path: string) {
  return readFileSync(path).toString();
}
