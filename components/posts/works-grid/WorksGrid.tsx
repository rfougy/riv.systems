import { useEffect, useState } from "react";
import { Box, Divider, Grid } from "./WorksGrid.styled";
import WorksGridItem from "./works-grid-item/WorksGridItem";
import useViewportWidthEventListener from "../../../hooks/useViewportWidthListener";
import { breakpoints } from "../../../styles/theme";
import Toggler from "./toggler/Toggler";

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
    duration: (roles && duration.join(" - ")) || "—",
    roles: (roles && roles.join(", ")) || "—",
    tools: (tools && tools.join(", ")) || "—",
  };

  useEffect(() => setExpanded(!isVerticalView), [isVerticalView]);

  return (
    <>
      {expanded ? (
        <Box>
          <Toggler expanded={expanded} setExpanded={setExpanded} />
          <Divider />
          <Grid>
            <WorksGridItem title="duration" val={formatted.duration} />
            <WorksGridItem title="team size" val={teamSize} />
            <WorksGridItem title="roles" val={formatted.roles} />
            <WorksGridItem title="tools" val={formatted.tools} />
          </Grid>
        </Box>
      ) : (
        <Box>
          <Toggler expanded={expanded} setExpanded={setExpanded} />
        </Box>
      )}
    </>
  );
};

export default WorksGrid;
