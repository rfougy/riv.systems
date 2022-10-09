import type {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import { join } from "path";
import getFileNamesInDirectory, { getFileContents } from "../../lib/getContent";
import IPost from "../../interfaces/post";

const DynamicTestPage: NextPage<{ content: string; slug: string }> = ({
  content,
  slug,
}) => {
  return <>{slug}</>;
};

export default DynamicTestPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const categories: string[] = getFileNamesInDirectory("test");

  const posts: IPost[] = categories.reduce(
    (postList: any, category: string) => {
      const posts = getFileNamesInDirectory("test", category);

      const CategoryPostPairing = posts.map((fileName: string) => {
        const datePublished = fileName.split("_")[0];
        const title = fileName.split("_")[1];

        return {
          title: title,
          category: category,
          datePublished: datePublished,
        };
      });

      postList.concat(CategoryPostPairing);
      return postList;
    },
    []
  );

  return {
    paths: posts.map((post) => ({
      params: {
        slug: join(post.category, post.title),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  const content = getFileContents(params.slug);

  return {
    props: {
      content: content,
      slug: params.slug,
    },
  };
};
