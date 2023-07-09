import { GetStaticProps, NextPage } from "next";

import DisplayDotsAnime from "../components/features/display-dots-anime/DisplayDotsAnime";
import FeaturedPosts from "../components/link-in-bio/featured-posts/FeaturedPosts";

import DisplayDotsCoordsProvider from "../context/DisplayDotsCoordsContext";

import IPostData from "../interfaces/IPostData";

import findFeaturedPosts from "../utils/link-in-bio/findFeaturedPosts";
import { getContentByDynamicPage } from "../lib/dynamic-pages/getContentByDynamicPage";
import { includePlaceholderImage } from "../lib/dynamic-pages/includePlaceholderImage";

import { Container, Header } from "../styles/pages/LinkInBio.styled";
import SocialsList from "../components/socials/socials-list/SocialsList";
import { socialsList } from "../constants/socialsList";
import { useEffect, useRef, useState } from "react";

import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

const LinkInBio: NextPage<{ featuredPosts: IPostData[] }> = ({
  featuredPosts,
}) => {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    const threeScript = document.createElement("script");
    threeScript.setAttribute("id", "threeScript");
    threeScript.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
    );
    document.getElementsByTagName("head")[0].appendChild(threeScript);
    return () => {
      if (threeScript) {
        threeScript.remove();
      }
    };
  }, []);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          color: 0x14b679,
          backgroundColor: 0x15173c,
          maxDistance: 34.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destory();
    };
  }, [vantaEffect]);

  return (
    <DisplayDotsCoordsProvider>
      <Container ref={vantaRef}>
        <Header>
          <DisplayDotsAnime text={"RIV.LINKS"} />
          <SocialsList socials={socialsList} />
        </Header>
        <FeaturedPosts posts={featuredPosts} />
      </Container>
    </DisplayDotsCoordsProvider>
  );
};

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
