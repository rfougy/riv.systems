import type {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import getFileNamesInDirectory, {
  getAbsolutePath,
  getFileContents,
} from "../../lib/getContent";
import IPost from "../../interfaces/post";
import Section from "../../components/section/Section";
import Category from "../../components/category/Category";
import Post from "../../components/post/Post";

const DynamicTestPage: NextPage<{ slug: string; content?: string }> = ({
  slug,
  content,
}) => {
  if (!slug) {
    return <Section slug={slug} />;
  }

  if (slug?.length === 1) {
    console.log("CONTENT: ", content);
    return <Category slug={slug} content={content} />;
  }

  if (slug?.length === 2) {
    console.log("CONTENT: ", content);
    return <Post slug={slug} content={content} />;
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
  const slug: string | string[] | undefined = params?.slug;
  let content: string | string[] | undefined;

  if (!slug) {
  }

  if (slug?.length === 1) {
    const category: string = slug[0];
    const postList: string[] = getFileNamesInDirectory("test", category).map(
      (post) => post.replace(/\.md/, "")
    );

    content = postList;
  }

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
