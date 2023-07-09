import type { GetStaticProps, NextPage } from "next";

import DisplayDotsCoordsProvider from "../context/DisplayDotsCoordsContext";
import DisplayDotsAnime from "../components/features/display-dots-anime/DisplayDotsAnime";
import Button from "../components/shared/button/Button";

import {
  Container,
  Description,
  Margin,
} from "../styles/pages/DisplayDotsPage.styled";

const Home: NextPage = () => {
  return (
    <>
      <DisplayDotsCoordsProvider>
        <Container>
          <Description>Hi, my name is Riviere, welcome to:</Description>
          <Margin>
            <DisplayDotsAnime
              text={"RIV.SYSTEMS"}
              includeRestartButton={true}
            />
          </Margin>
          <Description>
            I created this website to document <br />
            my projects, experiences and thoughts.
          </Description>
          <Button href={`/content`}>EXPLORE SYSTEMS</Button>
        </Container>
      </DisplayDotsCoordsProvider>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      metaTagInputs: {
        page: "home",
        title: "RIV.SYSTEMS: Fashion, Web Development, Life Experiences",
        description:
          "Welcome to RIV.SYSTEMS, a personal portfolio and blog website featuring content on fashion, web development, design and more.",
        isHomePage: true,
      },
      isDisplayDotsPage: true,
    },
  };
};
