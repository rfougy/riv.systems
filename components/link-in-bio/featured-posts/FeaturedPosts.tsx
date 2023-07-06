import IPostData from "../../../interfaces/IPostData";
import PostCard from "./card/PostCard";

import { List } from "./FeaturedPosts.styled";

const FeaturedPosts: React.FC<{
  posts: IPostData[];
}> = ({ posts }) => (
  <List>
    {posts.map((post) => (
      <PostCard key={post.path} post={post} />
    ))}
  </List>
);

export default FeaturedPosts;
