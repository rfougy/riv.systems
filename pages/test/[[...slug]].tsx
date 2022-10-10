import type {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import { join } from "path";
import getFileNamesInDirectory, { getFileContents } from "../../lib/getContent";
import IPost from "../../interfaces/post";
import MarkDown from "markdown-to-jsx";
import Section from "../../components/section/Section";
import Category from "../../components/category/Category";
import Post from "../../components/post/Post";

const DynamicTestPage: NextPage<{ slug: string }> = ({ slug }) => {
  // NOTE: This logic wil be used in components, with slug being passed down to them.
  // const path: string = join(
  //   process.cwd(),
  //   "cms",
  //   "test",
  //   params.slug[0],
  //   params.slug[1] + ".md"
  // );
  // const content: string = getFileContents(path);

  // Docs: Section Page
  if (!slug) {
    return <Section slug={slug} />;
  }

  // Docs: Category Page
  if (slug?.length === 1) {
    return <Category slug={slug} />;
  }

  // Docs: Post Page
  if (slug?.length === 2) {
    return <Post slug={slug} />;
  }
};

export default DynamicTestPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const categories: string[] = getFileNamesInDirectory("test");

  let posts: IPost[][] = categories.map((category) => {
    const posts: string[] = getFileNamesInDirectory("test", category);

    const postList: IPost[] = posts.map((fileName: string) => {
      return {
        title: fileName.replace(/\.md/, ""),
        category: category,
      };
    });

    return postList;
  });

  posts = Array.prototype.concat.apply([], posts);

  const pathToPostPage = posts.map((post: any) => ({
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
  return {
    props: {
      slug: params?.slug || null,
    },
  };
};
