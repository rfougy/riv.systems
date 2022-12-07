import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import DisplayDotsAnime from "../components/features/display-dots-anime/DisplayDotsAnime";

import {
  Container,
  Description,
  Margin,
  Button,
} from "../styles/pages/Home.styled";

const Home: NextPage = () => {
  return (
    <Container>
      <Description>Hi, my name is Riviere, welcome to:</Description>
      <Margin>
        <DisplayDotsAnime />
      </Margin>
      <Description>
        I created this website to document <br />
        my projects, experiences and thoughts.
      </Description>
      <Link href={`/content`} passHref>
        <Button>EXPLORE SYSTEMS</Button>
      </Link>
    </Container>
  );
};

export default Home;
