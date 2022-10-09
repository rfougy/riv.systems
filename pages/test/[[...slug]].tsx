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

const DynamicTestPage: NextPage<{ content: string; slug: string }> = ({
  content,
  slug,
}) => {
  return <MarkDown>{content}</MarkDown>;
};

export default DynamicTestPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const categories: string[] = getFileNamesInDirectory("test");

  let posts: IPost[][] = categories.map((category: string) => {
    const posts = getFileNamesInDirectory("test", category);

    const postList: IPost[] = posts.map((fileName: string) => {
      return {
        title: fileName.replace(/\.md/, ""),
        category: category,
      };
    });

    return postList;
  });

  posts = Array.prototype.concat.apply([], posts);

  return {
    paths: posts.map((post: any) => ({
      params: {
        slug: [post.category, post.title],
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  const path = join(
    process.cwd(),
    "content",
    "test",
    params.slug[0],
    params.slug[1] + ".md"
  );
  const content = getFileContents(path);

  return {
    props: {
      content: content,
      slug: params.slug,
    },
  };
};
