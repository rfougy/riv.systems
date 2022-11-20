import Markdown from "markdown-to-jsx";
import Image from "next/image";

const PostPage: React.FC<{ slug: string; content: any }> = ({
  slug,
  content,
}) => {
  const { frontmatter, postContent } = content;

  return content ? (
    <div>
      <div>
        <Image src={frontmatter.coverImage} alt="" width={500} height={500} />
      </div>
      <Markdown>{postContent}</Markdown>
    </div>
  ) : (
    <div>Error: No content available...</div>
  );
};

export default PostPage;
