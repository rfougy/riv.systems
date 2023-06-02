import type { NextApiRequest, NextApiResponse } from "next";

import { getAllPosts } from "../../lib/cms/getCmsContent";

const searchApiRoute = (req: NextApiRequest, res: NextApiResponse) => {
  const allPosts: any[] = getAllPosts();

  const results = allPosts.filter(
    ({
      frontmatter: { title, category, section },
    }: {
      frontmatter: {
        title: string;
        category: string;
        section: string;
      };
    }) =>
      title?.toLowerCase().indexOf(req.query.q as string) != -1 ||
      category.toLowerCase().indexOf(req.query.q as string) != -1 ||
      section.toLowerCase().indexOf(req.query.q as string) != -1
  );

  res.status(200).json({ results });
};

export default searchApiRoute;
