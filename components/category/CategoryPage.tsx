import PostList from "../PostList/PostList";

const CategoryPage: React.FC<{
  slug: string;
  content: any;
}> = ({ slug, content }) => {
  return <PostList slug={slug} content={content} />;
};

export default CategoryPage;
