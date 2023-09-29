import { useState } from "react";
import { Box, Title } from "./Playlist.styled";
import ArrowIcon from "../../../icons/ArrowIcon";

const Playlist: React.FC = () => {
  const [dropdownOpened, setDropdownOpened] = useState<boolean>(false);

  return (
    <Box aria-label="Color Theme Toggle" onClick={(): void => {}}>
      <Title>ELECTRONIC</Title>
      <ArrowIcon
        aria-label="Arrow Icon"
        top={!dropdownOpened}
        bottom={dropdownOpened}
      />
    </Box>
  );
};

export default Playlist;
