import Link from "next/link";
import styles from "./PostCard.module.css";

const PostCard: React.FC<{
  postTitle: string | undefined;
  datePublished: string | undefined;
  category: string;
  path: string;
}> = ({ postTitle, datePublished, category, path }) => {
  return (
    <Link href={path} passHref>
      <a>
        <div className={styles.container}>
          <div>Title: {postTitle}</div>
          <div>Date Published: {datePublished}</div>
          <div>Category: {category}</div>
        </div>
      </a>
    </Link>
  );
};

export default PostCard;
