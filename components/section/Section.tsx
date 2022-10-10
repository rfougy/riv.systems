import IPost from "../../interfaces/post";
import { sectionType } from "../../types/sectionType";

const Section: React.FC<{ slug: string; content: any; section: sectionType }> = ({
  slug,
  content,
  section,
}) => {
  return content ? (
    <div>
      <div>Section Page: {section}</div>
      {content.map((singleContent: IPost, index: number) => {
        const { title: postTitle, category } = singleContent;

        return (
          <div key={index}>
            <div>Post Title: {postTitle}</div>
            <div>Category: {category}</div>
          </div>
        );
      })}
    </div>
  ) : (
    <div>Error: No content available...</div>
  );
};

export default Section;
