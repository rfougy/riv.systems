import { useEffect, useState } from "react";
import { Box, Toggler, Grid, Title, Inline } from "./WorksGrid.styled";
import WorksGridItem from "./WorksGridItem";
import useViewportWidthEventListener from "../../../hooks/useViewportWidthListener";
import { breakpoints } from "../../../styles/theme";
import ArrowIcon from "../../icons/ArrowIcon";

const WorksGrid: React.FC<{
  teamSize: number;
  roles: string[];
  duration: string[];
  tools: string[];
}> = ({ teamSize, roles, duration, tools }) => {
  const [expanded, setExpanded] = useState<boolean>();

  const isVerticalView = useViewportWidthEventListener(
    breakpoints.useViewportWidth.xs
  );

  const formatted = {
    duration: duration.join(" - "),
    roles: roles.join(", "),
    tools: tools.join(", "),
  };

  useEffect(() => setExpanded(!isVerticalView), [isVerticalView]);

  return (
    <>
      {expanded ? (
        <Box>
          <Grid>
            <WorksGridItem title="duration" val={formatted.duration} />
            <WorksGridItem title="team size" val={teamSize} />
            <WorksGridItem title="roles" val={formatted.roles} />
            <WorksGridItem title="tools" val={formatted.tools} />
          </Grid>
        </Box>
      ) : (
        <Box>
          <Toggler onClick={() => setExpanded((prev) => !prev)}>
            <Title>VIEW PROJECT DETAILS</Title>
            <Inline>
              <ArrowIcon
                aria-label="Arrow Icon"
                top={!expanded}
                bottom={expanded}
              />
            </Inline>
          </Toggler>
        </Box>
      )}
    </>
  );
};

export default WorksGrid;
