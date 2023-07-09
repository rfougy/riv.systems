import { GetStaticProps, NextPage } from "next";

import DisplayDotsAnime from "../components/features/display-dots-anime/DisplayDotsAnime";
import FeaturedPosts from "../components/link-in-bio/featured-posts/FeaturedPosts";

import DisplayDotsCoordsProvider from "../context/DisplayDotsCoordsContext";

import IPostData from "../interfaces/IPostData";

import findFeaturedPosts from "../utils/link-in-bio/findFeaturedPosts";
import { getContentByDynamicPage } from "../lib/dynamic-pages/getContentByDynamicPage";
import { includePlaceholderImage } from "../lib/dynamic-pages/includePlaceholderImage";

import { Container, Header, Button } from "../styles/pages/LinkInBio.styled";
import SocialsList from "../components/socials/socials-list/SocialsList";
import { socialsList } from "../constants/socialsList";
import Link from "next/link";
import ArrowIcon from "../components/icons/ArrowIcon";
import AnimatedBackground from "../components/features/animated-background/AnimatedBackground";

const LinkInBio: NextPage<{ featuredPosts: IPostData[] }> = ({
  featuredPosts,
}) => (
  <DisplayDotsCoordsProvider>
    <AnimatedBackground activateAnime={true}>
      <Container>
        <Header>
          <DisplayDotsAnime text={"RIV.LINKS"} />
          <SocialsList socials={socialsList} />
        </Header>
        <FeaturedPosts posts={featuredPosts} />
        <Link href={`/`}>
          <Button>
            Go To Website
            <ArrowIcon right />
          </Button>
        </Link>
      </Container>
    </AnimatedBackground>
  </DisplayDotsCoordsProvider>
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
      isLinkInBioPage: true,
    },
  };
};
