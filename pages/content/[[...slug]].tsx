import type {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import ContentPage from "../../components/pages/content/ContentPage";
import SectionPage from "../../components/pages/section/SectionPage";
import CategoryPage from "../../components/pages/category/CategoryPage";
import PostPage from "../../components/pages/post/PostPage";
import IPost from "../../interfaces/IPost";
import { getContentByDynamicPage } from "../../lib/dynamic-pages/getContentByDynamicPage";
import { getDynamicPagePaths } from "../../lib/dynamic-pages/getDynamicPagePaths";
import { useEffect } from "react";

const DynamicPage: NextPage<{ slug: string; content?: string }> = ({
  slug,
  content,
}) => {

  if (!slug) return <ContentPage content={content} />;

  if (slug?.length === 1)
    return <SectionPage section={slug[0]} content={content} />;

  if (slug?.length === 2)
    return <CategoryPage category={slug[1]} content={content} />;

  if (slug?.length === 3) return <PostPage slug={slug} content={content} />;

  return null;
};

export default DynamicPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const {
    pathToContentPage,
    pathToSectionPage,
    pathToCategoryPage,
    pathToPostPage,
  } = getDynamicPagePaths();

  return {
    paths: [
      ...pathToContentPage,
      ...pathToSectionPage,
      ...pathToCategoryPage,
      ...pathToPostPage,
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  const slug: string | string[] | undefined = params?.slug;
  const content: IPost[][] | string[] | string | undefined =
    getContentByDynamicPage(slug);

  return {
    props: {
      slug: params?.slug || null,
      content: content,
    },
  };
};
