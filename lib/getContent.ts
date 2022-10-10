import { join, resolve } from "path";
import { readdirSync, readFileSync } from "fs";

export function getAbsolutePath(
  section: string,
  category?: string,
  post?: string
) {
  switch (arguments.length) {
    case 1:
      return join(process.cwd(), "cms", section);
    case 2:
      return join(process.cwd(), "cms", section, category);
    case 3:
      return join(process.cwd(), "cms", section, category, post + ".md");
    default:
      break;
  }
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
