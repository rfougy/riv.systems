import React from "react";

import DisplayDotsCoordsProvider from "../../../context/DisplayDotsCoordsContext";

import DisplayDotsAnime from "../../features/display-dots-anime/DisplayDotsAnime";
import Button from "../button/Button";

import {
  Box,
  Description,
  Margin,
} from "../../../styles/pages/DisplayDotsPage.styled";

const NotFound: React.FC<{ title: string; copy: string }> = ({
  title,
  copy,
}) => (
  <>
    <DisplayDotsCoordsProvider>
      <Box>
        <Margin>
          <DisplayDotsAnime text={title} />
        </Margin>
        <Description>{copy}</Description>
        <Button href={`/content`}>RETURN TO SYSTEMS</Button>
      </Box>
    </DisplayDotsCoordsProvider>
  </>
);

export default NotFound;
