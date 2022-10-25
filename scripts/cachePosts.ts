const fs = require("fs");
const {
  getCategories,
  getFileNamesInDirectory,
  getPosts,
} = require("../utils/getCmsContent.ts");

function postData() {
  const sections: string[] = getFileNamesInDirectory();
  const allCategories: any = getCategories(sections);
  const allPosts: any = getPosts(allCategories);

  const posts = allPosts;

  return `export const posts = ${JSON.stringify(posts)}`;
}

try {
  fs.readdirSync("cache");
} catch (err) {
  fs.mkdirSync("cache");
}

fs.writeFile("cache/data.js", postData(), (err: any) => {
  if (err) return console.log(err);
  console.log("Posts Cached...");
});

export {};
