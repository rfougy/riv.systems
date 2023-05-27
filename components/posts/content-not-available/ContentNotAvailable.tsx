import React from "react";
import Link from "next/link";

import DisplayDotsCoordsProvider from "../../context/DisplayDotsCoordsContext";

import DisplayDotsAnime from "../../features/display-dots-anime/DisplayDotsAnime";

import {
  Button,
  Container,
  Description,
  Margin,
} from "../../../styles/pages/DisplayDotsPage.styled";

const ContentNotAvailable = () => {
  return (
    <>
      <DisplayDotsCoordsProvider>
        <Container>
          <Margin>
            <DisplayDotsAnime text={"NO CONTENT"} />
          </Margin>
          <Description>
            The content you&apos;re searching for cannot be found.
          </Description>
          <Link href={`/content`} passHref>
            <Button>RETURN TO SYSTEMS</Button>
          </Link>
        </Container>
      </DisplayDotsCoordsProvider>
    </>
  );
};

export default ContentNotAvailable;
