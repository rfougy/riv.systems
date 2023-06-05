import React from "react";
import Link from "next/link";

import DisplayDotsCoordsProvider from "../../../context/DisplayDotsCoordsContext";

import DisplayDotsAnime from "../../features/display-dots-anime/DisplayDotsAnime";

import {
  Button,
  Container,
  Description,
  Margin,
} from "../../../styles/pages/DisplayDotsPage.styled";

const NotFound: React.FC<{ title: string; copy: string }> = ({
  title,
  copy,
}) => (
  <>
    <DisplayDotsCoordsProvider>
      <Container>
        <Margin>
          <DisplayDotsAnime text={title} />
        </Margin>
        <Description>{copy}</Description>
        <Link href={`/content`} legacyBehavior>
          <Button>RETURN TO SYSTEMS</Button>
        </Link>
      </Container>
    </DisplayDotsCoordsProvider>
  </>
);

export default NotFound;
