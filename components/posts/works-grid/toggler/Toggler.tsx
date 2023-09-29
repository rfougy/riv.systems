import { Dispatch, SetStateAction } from "react";
import { Box, Inline, Title } from "./Toggler.styled";
import ArrowIcon from "../../../icons/ArrowIcon";

const Toggler: React.FC<{
  expanded: boolean | undefined;
  setExpanded: Dispatch<SetStateAction<boolean | undefined>>;
}> = ({ expanded, setExpanded }) => {
  const title = expanded ? "PROJECT DETAILS" : "VIEW PROJECT DETAILS";

  return (
    <Box onClick={() => setExpanded((prev) => !prev)}>
      <Title>{title}</Title>
      <Inline>
        <ArrowIcon aria-label="Arrow Icon" top={!expanded} bottom={expanded} />
      </Inline>
    </Box>
  );
};

export default Toggler;
