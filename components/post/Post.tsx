import Markdown from "markdown-to-jsx";

const Post: React.FC<{ slug: string; content: string | undefined }> = ({
  slug,
  content,
}) => {
  return content ? (
    <Markdown>{content}</Markdown>
  ) : (
    <div>Error: No content available...</div>
  );
};

export default Post;
