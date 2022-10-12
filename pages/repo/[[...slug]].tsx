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

const DynamicPage: NextPage<{ slug: string; content?: string }> = ({
  slug,
  content,
}) => {
  // Docs: Repo Page
  if (!slug) return <div>PAGE: Repo</div>;

  // Docs: Section Page
  if (slug?.length === 1) {
    const section = slug[0];
    return (
      <SectionPage>
        <PostList slug={slug} content={content} section={section} />
      </SectionPage>
    );
  }

  // Docs: Category Page
  if (slug?.length === 2)
    return (
      <CategoryPage>
        <PostList slug={slug} content={content} />
      </CategoryPage>
    );

  // Docs: Post Page
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

/*

To-Do:
- Add types across new changes.
- Address bug in getContentByDynamicPage
*/
