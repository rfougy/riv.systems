import { GetStaticProps, NextPage } from "next";

import IPostData from "../interfaces/IPostData";

import findFeaturedPosts from "../utils/link-in-bio/findFeaturedPosts";
import { getContentByDynamicPage } from "../lib/dynamic-pages/getContentByDynamicPage";
import { includePlaceholderImage } from "../lib/dynamic-pages/includePlaceholderImage";

const LinkInBio: NextPage<{ posts: IPostData[] }> = ({ posts }) => {
  const featuredPosts: IPostData[] = findFeaturedPosts(posts, [
    "On Creating Meaningless Content",
    "Custom Biker Jacket References",
    "Sleepless Magazine Archive Fashion Editorial",
  ]);

  return <>TEST</>;
};

export default LinkInBio;

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = await includePlaceholderImage(getContentByDynamicPage());

  return {
    props: {
      posts: allPosts,
      metaTagInputs: {
        page: "link-in-bio",
        title: "Link In Bio",
        description:
          "Discover Riv's social media platforms, latest content, and more.",
      },
      isDisplayDotsPage: true,
    },
  };
};
