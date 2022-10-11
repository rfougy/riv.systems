import type {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import SectionPage from "../../components/section/SectionPage";
import CategoryPage from "../../components/category/CategoryPage";
import PostPage from "../../components/post/PostPage";
import IPost from "../../interfaces/post";
import { getContentByDynamicPage } from "../../util/pages/getContentByDynamicPage";
import { getDynamicPagePaths } from "../../util/pages/getDynamicPagePaths";
import PostList from "../../components/PostList";

const DynamicTestPage: NextPage<{ slug: string; content?: string }> = ({
  slug,
  content,
}) => {
  if (!slug)
    return (
      <SectionPage>
        <PostList slug={slug} content={content} section={"test"} />
      </SectionPage>
    );

  if (slug?.length === 1)
    return (
      <CategoryPage>
        <PostList slug={slug} content={content} />
      </CategoryPage>    );

  if (slug?.length === 2) return <PostPage slug={slug} content={content} />;
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
    getContentByDynamicPage("test", slug);

  return {
    props: {
      slug: params?.slug || null,
      content: content,
    },
  };
};
