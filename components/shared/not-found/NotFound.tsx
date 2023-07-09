import React from "react";

import DisplayDotsCoordsProvider from "../../../context/DisplayDotsCoordsContext";

import DisplayDotsAnime from "../../features/display-dots-anime/DisplayDotsAnime";
import Button from "../button/Button";

import {
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
        <Button href={`/content`}>RETURN TO SYSTEMS</Button>
      </Container>
    </DisplayDotsCoordsProvider>
  </>
);

export default NotFound;
