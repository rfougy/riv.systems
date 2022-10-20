import IPost from "../interfaces/post";
import { sectionType } from "../types/sectionType";
import PostCard from "./PostCard";

const PostList: React.FC<{
  slug: string;
  content: any;
  section?: sectionType | string;
}> = ({ slug, content, section }) => {
  const pageTitle: string | undefined = !slug ? section : slug[1];

  return content ? (
    <div>
      <div>{pageTitle}</div>
      {content.map((singleContent: any, index: number) => {
        const { title: postTitle, category: postCategory } = singleContent;
        const title: string | undefined = postTitle.split("_")[1];
        const datePublished: string | undefined = postTitle.split("_")[0];
        const category: string | undefined = postCategory;

        return (
          <PostCard
            key={index}
            postTitle={title}
            datePublished={datePublished}
            category={category}
          />
        );
      })}
    </div>
  ) : (
    <div>Error: No content available...</div>
  );
};

export default PostList;
