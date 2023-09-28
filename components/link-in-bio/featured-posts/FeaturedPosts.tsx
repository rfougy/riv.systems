import IPostData from "../../../interfaces/IPostData";
import PostCard from "./card/PostCard";

import { Box, List } from "./FeaturedPosts.styled";

const FeaturedPosts: React.FC<{
  posts: IPostData[];
}> = ({ posts }) => (
  <Box>
    <List>
      {posts.map((post) => (
        <PostCard key={post.path} post={post} />
      ))}
    </List>
  </Box>
);

export default FeaturedPosts;
