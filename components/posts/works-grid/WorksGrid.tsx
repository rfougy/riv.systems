import { Grid } from "./WorksGrid.styled";
import WorksGridItem from "./WorksGridItem";

const WorksGrid: React.FC<{
  link: string;
  roles: string[];
  duration: string[];
  tools: string[];
}> = ({ link, roles, duration, tools }) => {
  const formattedRoles = roles.join(", ");
  const formattedDuration = duration.join(" - ");
  const formattedTools = tools.join(", ");

  return (
    <Grid>
      <WorksGridItem title="duration" val={formattedDuration} />
      <WorksGridItem title="roles" val={formattedRoles} />
      <WorksGridItem title="tools" val={formattedTools} />
    </Grid>
  );
};

export default WorksGrid;
