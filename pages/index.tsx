import type { NextPage } from "next";
import Link from "next/link";

import DisplayDotsCoordsProvider from "../components/context/DisplayDotsCoordsContext";
import DisplayDotsAnime from "../components/features/display-dots-anime/DisplayDotsAnime";
import PageHead from "../components/head/PageHead";

import {
  Container,
  Description,
  Margin,
  Button,
} from "../styles/pages/Home.styled";

const Home: NextPage = () => {
  return (
    <>
      <PageHead
        isHomePage
        title={"RIV.SYSTEMS: Fashion, Web Development, Life Experiences"}
        description={
          "Welcome to RIV.SYSTEMS, a personal portfolio and blog website featuring content on fashion, web development, design and more."
        }
      />
      <DisplayDotsCoordsProvider>
        <Container>
          <Description>Hi, my name is Riviere, welcome to:</Description>
          <Margin>
            <DisplayDotsAnime text={"RIV.SYSTEMS"} />
          </Margin>
          <Description>
            I created this website to document <br />
            my projects, experiences and thoughts.
          </Description>
          <Link href={`/content`} passHref>
            <Button>EXPLORE SYSTEMS</Button>
          </Link>
        </Container>
      </DisplayDotsCoordsProvider>
    </>
  );
};

export default Home;
