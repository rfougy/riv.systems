import type { NextApiRequest, NextApiResponse } from "next";
import {
  getCategories,
  getFileNamesInDirectory,
  getPosts,
} from "../../utils/getCmsContent";

const searchApiRoute = (req: NextApiRequest, res: NextApiResponse) => {
  let posts: any;

  if (process.env.NODE_ENV === "production") {
    posts = require("../../cache/data").posts;
  } else {
    const sections: string[] = getFileNamesInDirectory();
    const allCategories: any = getCategories(sections);
    const allPosts: any = getPosts(allCategories);

    posts = allPosts;
  }

  const results = posts.filter(
    ({ frontmatter: { title, category, section, excerpt } }) =>
      title.toLowerCase().indexOf(req.query.q) != -1 ||
      category.toLowerCase().indexOf(req.query.q) != -1 ||
      section.toLowerCase().indexOf(req.query.q) != -1 ||
      excerpt.toLowerCase().indexOf(req.query.q) != -1
  );

  res.status(200).json({ results });
};

export default searchApiRoute;
