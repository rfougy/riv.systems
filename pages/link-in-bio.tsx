import { GetStaticProps, NextPage } from "next";

import FeaturedPosts from "../components/link-in-bio/featured-posts/FeaturedPosts";

import IPostData from "../interfaces/IPostData";

import findFeaturedPosts from "../utils/link-in-bio/findFeaturedPosts";
import { getContentByDynamicPage } from "../lib/dynamic-pages/getContentByDynamicPage";
import { includePlaceholderImage } from "../lib/dynamic-pages/includePlaceholderImage";
import { Container } from "../styles/pages/LinkInBio.styled";

const LinkInBio: NextPage<{ featuredPosts: IPostData[] }> = ({
  featuredPosts,
}) => (
  <Container>
    <FeaturedPosts posts={featuredPosts} />
  </Container>
);

export default LinkInBio;

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = await includePlaceholderImage(getContentByDynamicPage());

  const featuredPosts: IPostData[] = findFeaturedPosts(
    allPosts as IPostData[],
    [
      "On Creating Meaningless Content",
      "Custom Biker Jacket References",
      "Sleepless Magazine Archive Fashion Editorial",
    ]
  );

  return {
    props: {
      featuredPosts,
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
