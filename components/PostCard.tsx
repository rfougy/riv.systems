const PostCard: React.FC<{
  postTitle: string | undefined;
  datePublished: string | undefined;
  category: string | undefined;
}> = ({ postTitle, datePublished, category }) => {
  return (
    <div>
      <div>Post Title: {postTitle}</div>
      <div>Date Published: {datePublished}</div>
      <div>Post Category: {category}</div>
    </div>
  );
};

export default PostCard;
