import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
} from "next";

import {
  ContentResults,
  SectionResults,
  CategoryResults,
  PostPage,
} from "../../components/results";

import IPost from "../../interfaces/IPost";
import { getMetaTagInputs } from "../../lib/dynamic-pages/getMetaTagInputs";

import { getContentByDynamicPage } from "../../lib/dynamic-pages/getContentByDynamicPage";
import { includePlaceholderImage } from "../../lib/dynamic-pages/includePlaceholderImage";

const DynamicPage: NextPage<{ slug: string; content?: string }> = ({
  slug,
  content,
}) => {
  if (!slug) return <ContentResults content={content} />;

  if (slug?.length === 1)
    return <SectionResults section={slug[0]} content={content} />;

  if (slug?.length === 2)
    return <CategoryResults category={slug[1]} content={content} />;

  if (slug?.length === 3) return <PostPage slug={slug} content={content} />;

  return null;
};

export default DynamicPage;

export const getServerSideProps: GetServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  const slug: string | string[] | undefined = params?.slug;
  const content: IPost[][] | string[] | string | undefined =
    getContentByDynamicPage(slug);

  const metaTagInputs = getMetaTagInputs(content, slug);

  const contentWithPlaceholderImage = await includePlaceholderImage(content);

  return {
    props: {
      slug: params?.slug || null,
      content: contentWithPlaceholderImage,
      metaTagInputs: metaTagInputs,
    },
  };
};
