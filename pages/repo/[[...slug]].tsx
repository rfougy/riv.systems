import type {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import RepoPage from "../../components/RepoPage/RepoPage";
import SectionPage from "../../components/section/SectionPage";
import CategoryPage from "../../components/category/CategoryPage";
import PostPage from "../../components/post/PostPage";
import IPost from "../../interfaces/IPost";
import { getContentByDynamicPage } from "../../util/pages/getContentByDynamicPage";
import { getDynamicPagePaths } from "../../util/pages/getDynamicPagePaths";

const DynamicPage: NextPage<{ slug: string; content?: string }> = ({
  slug,
  content,
}) => {
  if (!slug) return <RepoPage slug={slug} content={content} />;

  if (slug?.length === 1)
    return <SectionPage slug={slug} content={content} section={slug[0]} />;

  if (slug?.length === 2) return <CategoryPage slug={slug} content={content} />;

  if (slug?.length === 3) return <PostPage slug={slug} content={content} />;
};

export default DynamicPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const {
    pathToRepoPage,
    pathToSectionPage,
    pathToCategoryPage,
    pathToPostPage,
  } = getDynamicPagePaths();

  return {
    paths: [
      ...pathToRepoPage,
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
