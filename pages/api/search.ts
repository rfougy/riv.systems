import type { NextApiRequest, NextApiResponse } from "next";

import {
  getCategories,
  getFileNamesInDirectory,
  getPosts,
} from "../../lib/cms/getCmsContent";

const searchApiRoute = (req: NextApiRequest, res: NextApiResponse) => {
  const sections: string[] = getFileNamesInDirectory();
  const allCategories: any = getCategories(sections);
  const allPosts: any = getPosts(allCategories);

  const results = allPosts.filter(
    ({
      frontmatter: { title, category, section, excerpt },
    }: {
      frontmatter: {
        title: string;
        category: string;
        section: string;
        excerpt: string;
      };
    }) =>
      title?.toLowerCase().indexOf(req.query.q as string) != -1 ||
      category.toLowerCase().indexOf(req.query.q as string) != -1 ||
      section.toLowerCase().indexOf(req.query.q as string) != -1 ||
      excerpt.toLowerCase().indexOf(req.query.q as string) != -1
  );

  res.status(200).json({ results });
};

export default searchApiRoute;
