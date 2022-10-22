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

  // Docs: sort list by newest to oldest
  if (content) {
    content.sort((a: any, b: any) => {
      const dateA = new Date(a.datePublished);
      const dateB = new Date(b.datePublished);

      return dateB.getTime() - dateA.getTime();
    });
  }

  return content ? (
    <div>
      <div className={styles.title}>{pageTitle}</div>
      <div className={styles.list}>
        {content.map((singleContent: any, index: number) => {
          const { title, datePublished, category, path } = singleContent;

          return (
            <PostCard
              key={index}
              title={title}
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
