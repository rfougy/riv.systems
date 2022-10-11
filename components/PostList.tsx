import IPost from "../interfaces/post";
import { sectionType } from "../types/sectionType";

function isForSectionPage(object: any): object is IPost {
  return "title" in object && "category" in object;
}

const PostList: React.FC<{
  slug: string;
  content: any;
  section?: sectionType;
}> = ({ slug, content, section }) => {
  const pageTitle: string | undefined = slug.length ? slug[0] : section;
  
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
          <div key={index}>
            <div>Post Title: {postTitle}</div>
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

export default PostList;

/*

Pseudocode: 

- SectionPage and CategoryPage are going to have PostList as child component, this way we can pass directly into the component as opposed to pro drilling.
- Create a postList component that 

*/
