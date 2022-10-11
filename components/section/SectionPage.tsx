import IPost from "../../interfaces/post";
import { sectionType } from "../../types/sectionType";
import PostList from "../PostList";

const SectionPage: React.FC<{
  slug: string;
  content: any;
  section: sectionType;
}> = ({ slug, content, section }) => {
  return content ? (
    <div>
      <div>Section Page: {section}</div>
      {content.map((singleContent: IPost, index: number) => {
        const { title: post, category } = singleContent;
        const datePublished = post.split("_")[0];
        const title = post.split("_")[1];

        return (
          <div key={index}>
            <div>Post Title: {title}</div>
            <div>Date Published: {datePublished}</div>
            <div>Post Category: {category}</div>
          </div>
        );
      })}
    </div>
  ) : (
    <div>Error: No content available...</div>
  );
};

export default SectionPage;
