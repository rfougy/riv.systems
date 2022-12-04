import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import DisplayDotsAnime from "../components/features/display-dots-anime/DisplayDotsAnime";

import { Container, Description, Margin, Button } from "../styles/Home.styled";

const Home: NextPage = () => {
  return (
    <Container>
      <Description>Hi, my name is Riviere, welcome to:</Description>
      <Margin>
        <DisplayDotsAnime />
      </Margin>
      <Description>
        I created this website to document the work I’ve made, <br />
        the experiences and thoughts I’ve had, <br />
        and the variety of ‘things’ I’ve acquired.
      </Description>
      <Link href={`/content`} passHref>
        <Button>EXPLORE SYSTEMS</Button>
      </Link>
    </Container>
  );
};

export default Home;
