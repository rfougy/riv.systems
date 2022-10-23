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
          const { title, datePublished, category, path } = singleContent;
          const formattedDatePublished: string = datePublished.replaceAll(
            "-",
            "."
          );

          return (
            <PostCard
              key={index}
              title={title}
              datePublished={formattedDatePublished}
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
