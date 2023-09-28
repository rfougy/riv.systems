import { useEffect, useState } from "react";
import { CollapsedGrid, Grid } from "./WorksGrid.styled";
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
        <Grid>
          <WorksGridItem title="duration" val={formatted.duration} />
          <WorksGridItem title="team size" val={teamSize} />
          <WorksGridItem title="roles" val={formatted.roles} />
          <WorksGridItem title="tools" val={formatted.tools} />
        </Grid>
      ) : (
        <CollapsedGrid></CollapsedGrid>
      )}
    </>
  );
};

export default WorksGrid;
