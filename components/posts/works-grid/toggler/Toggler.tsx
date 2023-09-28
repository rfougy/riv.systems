import { Dispatch, SetStateAction } from "react";
import { Box, Inline, Title } from "./Toggler.styled";
import ArrowIcon from "../../../icons/ArrowIcon";

const Toggler: React.FC<{
  expanded: boolean | undefined;
  setExpanded: Dispatch<SetStateAction<boolean | undefined>>;
}> = ({ expanded, setExpanded }) => (
  <Box onClick={() => setExpanded((prev) => !prev)}>
    <Title>VIEW PROJECT DETAILS</Title>
    <Inline>
      <ArrowIcon aria-label="Arrow Icon" top={!expanded} bottom={expanded} />
    </Inline>
  </Box>
);

export default Toggler;
