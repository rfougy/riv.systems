import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import DisplayDotsAnime from "../components/features/display-dots-anime/DisplayDotsAnime";

import * as S from "../styles/Home.styled";

const Home: NextPage = () => {
  return (
    <S.Container>
      <S.Description>Hi, my name is Riviere, welcome to:</S.Description>
      {/* <S.Margin> */}
      <DisplayDotsAnime />
      {/* </S.Margin> */}
      <S.Description>
        I created this website to document the work I’ve made, the experiences
        and thoughts I’ve had, and the variety of ‘things’ I’ve acquired.
      </S.Description>
      <Link href={`/content`} passHref>
        <S.Button>EXPLORE SYSTEMS</S.Button>
      </Link>
    </S.Container>
  );
};

export default Home;
