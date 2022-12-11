import IPost from "../../../interfaces/IPost";
import { sectionType } from "../../../types/sectionType";
import PostCard from "../card/PostCard";
import { Grid } from "./PostGrid.styled";

const PostGrid: React.FC<{
  content: any;
}> = ({ content }) => {
  return content ? (
    <Grid numOfItems={content.length}>
      {content.map((singleContent: any, index: number) => {
        const { path, frontmatter } = singleContent;

        return <PostCard key={index} path={path} frontmatter={frontmatter} />;
      })}
    </Grid>
  ) : (
    <div>Error: No content available...</div>
  );
};

export default PostGrid;
