import type { NextPageContext } from "next";

import {
  ContentResults,
  SectionResults,
  CategoryResults,
  PostPage,
} from "../../components/results";

import IPost from "../../interfaces/IPost";
import { getMetaTagInputs } from "../../lib/dynamic-pages/getMetaTagInputs";
import { getContentByDynamicPage } from "../../lib/dynamic-pages/getContentByDynamicPage";
import { useEffect } from "react";

const DynamicPage = ({
  slug,
  content,
  isServer,
}: {
  slug: string;
  content?: string;
  isServer: boolean;
}) => {
  useEffect(() => console.log(isServer));

  if (!slug) return <ContentResults content={content} />;

  if (slug?.length === 1)
    return <SectionResults section={slug[0]} content={content} />;

  if (slug?.length === 2)
    return <CategoryResults category={slug[1]} content={content} />;

  if (slug?.length === 3) return <PostPage slug={slug} content={content} />;

  return null;
};

export default DynamicPage;

// export const getStaticPaths: GetStaticPaths = async () => {
//   const {
//     pathToContentResults,
//     pathToSectionResults,
//     pathToCategoryResults,
//     pathToPostPage,
//   }: any = getDynamicPagePaths();

//   return {
//     paths: [
//       ...pathToContentResults,
//       ...pathToSectionResults,
//       ...pathToCategoryResults,
//       ...pathToPostPage,
//     ],
//     fallback: false,
//   };
// };

DynamicPage.getInitialProps = async (context: NextPageContext) => {
  const { query, req } = context;
  console.log(query.slug);

  const slug: string | string[] | undefined = query.slug;
  const content: IPost[][] | string[] | string | undefined =
    await getContentByDynamicPage(slug);

  const metaTagInputs = getMetaTagInputs(content, slug);

  return {
    slug: query.slug || null,
    content: content,
    metaTagInputs: metaTagInputs,
    isServer: !!req,
  };
};
