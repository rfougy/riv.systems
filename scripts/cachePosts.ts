const fs = require("fs");
const { getAllPosts } = require("../lib/cms/getCmsContent.ts");

function createCacheForPostData() {
  const posts = getAllPosts();

  return `const cachedPosts = ${JSON.stringify(
    posts
  )}; module.exports = cachedPosts`;
}

try {
  fs.readdirSync("cache");
} catch (err) {
  fs.mkdirSync("cache");
}

fs.writeFile("cache/data.js", createCacheForPostData(), (err: any) => {
  if (err) return console.log(err);
  console.log("Posts Cached...");
});

export {};
