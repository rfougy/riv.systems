import { join } from "path";
import { readdirSync, readFileSync } from "fs";

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
