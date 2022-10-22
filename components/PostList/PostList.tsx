import IPost from "../../interfaces/IPost";
import { sectionType } from "../../types/sectionType";
import PostCard from "../PostCard/PostCard";
import styles from "./PostList.module.css";

const PostList: React.FC<{
  slug: string;
  content: any;
  section?: sectionType | string;
}> = ({ slug, content, section }) => {
  const pageTitle: string | undefined = !slug ? section : slug[1];

  return content ? (
    <div>
      <div className={styles.title}>{pageTitle}</div>
      <div className={styles.list}>
        {content.map((singleContent: any, index: number) => {
          const { title: postTitle, category, path } = singleContent;
          const title: string | undefined = postTitle.split("_")[1];
          const datePublished: string | undefined = postTitle.split("_")[0];

          return (
            <PostCard
              key={index}
              postTitle={title}
              datePublished={datePublished}
              category={category}
              path={path}
            />
          );
        })}
      </div>
    </div>
  ) : (
    <div>Error: No content available...</div>
  );
};

export default PostList;

/*

Notes:
- order by date published

*/
