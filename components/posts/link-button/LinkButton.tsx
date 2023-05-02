import React, { useState } from "react";

import IconButton from "../../shared/icon-button/IconButton";
import linkIconV1 from "../../../public/assets/icons/link-icon.svg";

import { Container } from "./LinkButton.styled";

const LinkButton: React.FC<{ url: string; title: string }> = ({
  url,
  title,
}) => {
  const [onHover, setOnHover] = useState<boolean>(false);

  return (
    <Container>
      <a href={url} target="_blank" rel="noreferrer">
        <IconButton
          src={linkIconV1}
          alt={`link button for ${title}`}
          ariaLabel={`link button`}
          height="1.75rem"
          width="1.75rem"
          isActive={onHover}
          onMouseOver={() => setOnHover(true)}
          onMouseLeave={() => setOnHover(false)}
        />
      </a>
    </Container>
  );
};

export default LinkButton;
