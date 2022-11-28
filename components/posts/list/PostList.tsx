import IPost from "../../../interfaces/IPost";
import { sectionType } from "../../../types/sectionType";
import PostCard from "../card/PostCard";
import styles from "./PostList.module.css";

const PostList: React.FC<{
  content: any;
}> = ({ content }) => {
  return content ? (
    <div>
      <div className={styles.list}>
        {content.map((singleContent: any, index: number) => {
          const { path, frontmatter } = singleContent;

          return <PostCard key={index} path={path} frontmatter={frontmatter} />;
        })}
      </div>
    </div>
  ) : (
    <div>Error: No content available...</div>
  );
};

export default PostList;
