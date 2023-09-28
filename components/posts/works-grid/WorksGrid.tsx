import { useEffect, useState } from "react";
import { Box, Toggler, Grid, Title } from "./WorksGrid.styled";
import WorksGridItem from "./WorksGridItem";
import useViewportWidthEventListener from "../../../hooks/useViewportWidthListener";
import { breakpoints } from "../../../styles/theme";

const WorksGrid: React.FC<{
  teamSize: number;
  roles: string[];
  duration: string[];
  tools: string[];
}> = ({ teamSize, roles, duration, tools }) => {
  const [expandGrid, setExpandGrid] = useState<boolean>();

  const isVerticalView = useViewportWidthEventListener(
    breakpoints.useViewportWidth.xs
  );

  const formatted = {
    duration: duration.join(" - "),
    roles: roles.join(", "),
    tools: tools.join(", "),
  };

  useEffect(() => setExpandGrid(!isVerticalView), [isVerticalView]);

  return (
    <>
      {expandGrid ? (
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
          <Toggler>
            <Title>VIEW PROJECT DETAILS</Title>
            <Title>O</Title>
          </Toggler>
        </Box>
      )}
    </>
  );
};

export default WorksGrid;
