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
  const categories: string[] = getFileNamesInDirectory("test");
  const allPosts = getAllPosts("test", categories);

  const pathToPostPage = allPosts.map((post: any) => ({
    params: {
      slug: [post.category, post.title],
    },
  }));

  const pathToCategoryPage = categories.map((category: string) => ({
    params: {
      slug: [category],
    },
  }));

  const pathToSectionPage = [{ params: { slug: [] } }];

  return {
    paths: [...pathToSectionPage, ...pathToCategoryPage, ...pathToPostPage],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  const slug: string | string[] | undefined = params?.slug;
  let content: IPost[][] | string[] | string | undefined;

  // Docs: Content for Section Page
  if (!slug) {
    const categories: string[] = getFileNamesInDirectory("test");
    const allPosts: IPost[][] = getAllPosts("test", categories);

    content = allPosts;
  }

  // Docs: Content for Category Page
  if (slug?.length === 1) {
    const category: string = slug[0];
    const postList: string[] = getFileNamesInDirectory("test", category).map(
      (post) => post.replace(/\.md/, "")
    );

    content = postList;
  }

  // Docs: Content for Post Page
  if (slug?.length === 2) {
    const category: string = slug[0];
    const post: string = slug[1];
    const path: string = getAbsolutePath("test", category, post);

    content = getFileContents(path);
  }

  return {
    props: {
      slug: params?.slug || null,
      content: content,
    },
  };
};
