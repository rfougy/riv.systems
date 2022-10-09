import { join } from "path";
import { readdirSync, readFileSync } from "fs";

// docs: returns path to directory. If there is a category, function will return path to category directory.
export function getAbsolutePathToDir( page: string, category?: string) {
  return category ? join( __dirname, "..", "content", page, category) : join(__dirname, "..", "content", page);
}

export async function getFileNamesInDirectory(path: string) {
  return readdirSync(path).map(fileName => fileName.replace('.md', ''));
}

export function getFileContents(path: string, fileName: string) {
  return readFileSync(path + "/" + fileName).toString();
}