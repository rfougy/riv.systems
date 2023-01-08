import PostCard from "../card/PostCard";
import { Grid, GridItem } from "./PostGrid.styled";

const PostGrid: React.FC<{
  content: any;
}> = ({ content }) => {
  return content ? (
    <Grid>
      {content.map((singleContent: any, index: number) => {
        const { path, frontmatter } = singleContent;

        return (
          <GridItem key={index}>
            <PostCard path={path} frontmatter={frontmatter} />
          </GridItem>
        );
      })}
    </Grid>
  ) : (
    <div>Error: No content available...</div>
  );
};

export default PostGrid;
