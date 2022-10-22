import { sectionType } from "../../types/sectionType";
import PostList from "../PostList/PostList";

const SectionPage: React.FC<{
  slug: string;
  content: any;
  section: sectionType | string;
}> = ({ slug, content, section }) => {
  return <PostList slug={slug} content={content} section={section} />;
};

export default SectionPage;
