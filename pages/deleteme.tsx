import type { GetStaticProps, NextPage } from "next";
import Slideshow from "../components/markdown-to-jsx/slideshow/Slideshow";

const TestPage: NextPage = () => {
  return <Slideshow />;
};

export default TestPage;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      metaTagInputs: {
        title: "RIV.SYSTEMS: Fashion, Web Development, Life Experiences",
        description:
          "Welcome to RIV.SYSTEMS, a personal portfolio and blog website featuring content on fashion, web development, design and more.",
        isHomePage: true,
      },
      isDisplayDotsPage: true,
    },
  };
};
