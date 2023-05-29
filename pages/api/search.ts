import type { NextApiRequest, NextApiResponse } from "next";

import {
  getCategories,
  getFileNamesInDirectory,
  getPosts,
} from "../../lib/cms/getCmsContent";
import { ICmsCategory } from "../../interfaces/lCmsCategories";

const searchApiRoute = (req: NextApiRequest, res: NextApiResponse) => {
  const sections: string[] = getFileNamesInDirectory();
  const allCategories: ICmsCategory[] = getCategories(sections);
  const allPosts: any[] = getPosts(allCategories);

  const results = allPosts.filter(
    ({
      frontmatter: { title, category, section },
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
      section.toLowerCase().indexOf(req.query.q as string) != -1
  );

  res.status(200).json({ results });
};

export default searchApiRoute;
