import IPost from "../../../../interfaces/IPost";
import { sectionType } from "../../../../types/sectionType";
import { Grid, GridItem } from "./GridView.styled";
import GridCard from "../card/GridCard";
import { useEffect } from "react";

const GridView: React.FC<{
  content: any;
}> = ({ content }) => {
  useEffect(() => console.log("HIT: GRID"));

  return content ? (
    <Grid>
      {content.map((singleContent: any, index: number) => {
        const { path, frontmatter } = singleContent;

        return (
          <GridItem key={index}>
            <GridCard path={path} frontmatter={frontmatter} />
          </GridItem>
        );
      })}
    </Grid>
  ) : (
    <div>Error: No content available...</div>
  );
};

export default GridView;
