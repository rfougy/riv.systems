import IPost from "../interfaces/post";
import { sectionType } from "../types/sectionType";
import PostCard from "./PostCard";

function isForSectionPage(content: any): content is IPost {
  return (
    typeof content !== "string" && "title" in content && "category" in content
  );
}

const PostList: React.FC<{
  slug: string;
  content: any;
  section?: sectionType;
}> = ({ slug, content, section }) => {
  const pageTitle: string | undefined = !slug ? section : slug[0];

  return content ? (
    <div>
      <div>{pageTitle}</div>
      {content.map((singleContent: IPost | string, index: number) => {
        let postTitle: string | undefined;
        let datePublished: string | undefined;
        let category: string | undefined;

        // Docs: Props for Section Page
        if (isForSectionPage(singleContent)) {
          const { title: post, category: postCategory } = singleContent;
          postTitle = post.split("_")[1];
          datePublished = post.split("_")[0];
          category = postCategory;
        }

        // Docs: Props for Category Page
        if (!isForSectionPage(singleContent)) {
          postTitle = singleContent.split("_")[1];
          datePublished = singleContent.split("_")[0];
          category = slug[0];
        }

        return (
          <PostCard
            key={index}
            postTitle={postTitle}
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
