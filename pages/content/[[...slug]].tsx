import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticPaths,
  NextPage,
} from "next";

import {
  ContentResults,
  SectionResults,
  CategoryResults,
  PostPage,
} from "../../components/results";

import IPost from "../../interfaces/IPost";
import { getMetaTagInputs } from "../../lib/dynamic-pages/getMetaTagInputs";

import { getContentByDynamicPage } from "../../lib/dynamic-pages/getContentByDynamicPage";
import { getDynamicPagePaths } from "../../lib/dynamic-pages/getDynamicPagePaths";
import PageHead from "../../components/head/PageHead";

const DynamicPage: NextPage<{
  slug: string;
  content?: string;
  metaTagInputs: any;
}> = ({ slug, content, metaTagInputs }) => {
  if (!slug)
    return (
      <>
        <PageHead {...metaTagInputs} />
        <ContentResults content={content} />
      </>
    );

  if (slug?.length === 1)
    return (
      <>
        <PageHead {...metaTagInputs} />
        <SectionResults section={slug[0]} content={content} />
      </>
    );

  if (slug?.length === 2)
    return (
      <>
        <PageHead {...metaTagInputs} />
        <CategoryResults category={slug[1]} content={content} />
      </>
    );

  if (slug?.length === 3)
    return (
      <>
        <PageHead {...metaTagInputs} />
        <PostPage slug={slug} content={content} />
      </>
    );

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

export const getServerSideProps: GetServerSideProps = async ({
  params,
  res,
}: GetServerSidePropsContext) => {
  const slug: string | string[] | undefined = params?.slug;
  const content: IPost[][] | string[] | string | undefined =
    getContentByDynamicPage(slug);

  const metaTagInputs = getMetaTagInputs(content, slug);

  /**
   * @see https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props#caching-with-server-side-rendering-ssr
   */
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  return {
    props: {
      slug: params?.slug || null,
      content: content,
      metaTagInputs: metaTagInputs,
    },
  };
};
