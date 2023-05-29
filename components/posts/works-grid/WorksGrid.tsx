import { Grid } from "./WorksGrid.styled";
import WorksGridItem from "./WorksGridItem";

const WorksGrid: React.FC<{
  teamSize: number;
  roles: string[];
  duration: string[];
  tools: string[];
}> = ({ teamSize, roles, duration, tools }) => {
  const formatted = {
    duration: duration.join(" - "),
    roles: roles.join(", "),
    tools: tools.join(", "),
  };

  return (
    <Grid>
      <WorksGridItem title="duration" val={formatted.duration} />
      <WorksGridItem title="team size" val={teamSize} />
      <WorksGridItem title="roles" val={formatted.roles} />
      <WorksGridItem title="tools" val={formatted.tools} />
    </Grid>
  );
};

export default WorksGrid;
