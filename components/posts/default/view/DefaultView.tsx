import IPost from "../../../../interfaces/IPost";
import { sectionType } from "../../../../types/sectionType";
import { Grid, GridItem } from "./DefaultView.styled";
import DefaultCard from "../card/DefaultCard";

const PostView: React.FC<{
  content: any;
}> = ({ content }) => {
  return content ? (
    <Grid>
      {content.map((singleContent: any, index: number) => {
        const { path, frontmatter } = singleContent;

        return (
          <GridItem key={index}>
            <DefaultCard path={path} frontmatter={frontmatter} />
          </GridItem>
        );
      })}
    </Grid>
  ) : (
    <div>Error: No content available...</div>
  );
};

export default PostView;
