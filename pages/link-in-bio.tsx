import { GetStaticProps, NextPage } from "next";
import React from "react";
import { getContentByDynamicPage } from "../lib/dynamic-pages/getContentByDynamicPage";
import { includePlaceholderImage } from "../lib/dynamic-pages/includePlaceholderImage";
import IPostData from "../interfaces/IPostData";

const LinkInBio: NextPage<{ posts: IPostData[] }> = ({ posts }) => {
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
