import { useEffect } from "react";
import IPost from "../../../interfaces/IPost";
import { sectionType } from "../../../types/sectionType";
import PostCard from "../card/PostCard";
import styles from "./PostGrid.module.css";
import { Grid } from "./PostGrid.styled";

const PostGrid: React.FC<{
  content: any;
}> = ({ content }) => {
  useEffect(() => console.log("contentLength: ", content.length));

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
