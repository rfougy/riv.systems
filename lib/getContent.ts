import { join, resolve } from "path";
import { readdirSync, readFileSync } from "fs";

export function getAbsolutePathToDir(section: string, category?: string) {
  return category
    ? join(process.cwd(), "cms", section, category)
    : join(process.cwd(), "cms", section);
}

export default function getFileNamesInDirectory(
  section: string,
  category?: string
) {
  const path = getAbsolutePathToDir(section, category);

  return readdirSync(path);
}

export function getFileContents(path: string) {
  return readFileSync(path).toString();
}
