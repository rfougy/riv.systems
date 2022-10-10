import type {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import {
  getFileNamesInDirectory,
  getAbsolutePath,
  getAllPosts,
  getFileContents,
} from "../../lib/getContent";
import Section from "../../components/section/Section";
import Category from "../../components/category/Category";
import Post from "../../components/post/Post";
import IPost from "../../interfaces/post";
import { getContentByDynamicPage } from "../../util/pages/getContentByDynamicPage";
import { getDynamicPagePaths } from "../../util/pages/getDynamicPagePaths";

const DynamicTestPage: NextPage<{ slug: string; content?: string }> = ({
  slug,
  content,
}) => {
  // Docs: Section Page
  if (!slug) return <Section slug={slug} content={content} section={"test"} />;

  // Docs: Category Page
  if (slug?.length === 1) return <Category slug={slug} content={content} />;

  // Docs: Post Page
  if (slug?.length === 2) return <Post slug={slug} content={content} />;
};

export default DynamicTestPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const { pathToSectionPage, pathToCategoryPage, pathToPostPage } =
    getDynamicPagePaths("test");

  return {
    paths: [...pathToSectionPage, ...pathToCategoryPage, ...pathToPostPage],
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
