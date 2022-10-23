import Link from "next/link";
import styles from "./PostCard.module.css";

const PostCard: React.FC<{
  path: string;
  frontmatter: any;
}> = ({ path, frontmatter }) => {
  const { title, datePublished, category, section, excerpt, coverImage } =
    frontmatter;
  const formattedDatePublished: string = datePublished.replaceAll("-", ".");

  return (
    <Link href={path} passHref>
      <a>
        <div className={styles.container}>
          <div>Title: {title}</div>
          <div>Date Published: {formattedDatePublished}</div>
          <div>Category: {category}</div>
        </div>
      </a>
    </Link>
  );
};

export default PostCard;
