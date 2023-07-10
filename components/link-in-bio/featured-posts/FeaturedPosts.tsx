import IPostData from "../../../interfaces/IPostData";
import PostCard from "./card/PostCard";

import { Container, List } from "./FeaturedPosts.styled";

const FeaturedPosts: React.FC<{
  posts: IPostData[];
}> = ({ posts }) => (
  <Container>
    <List>
      {posts.map((post) => (
        <PostCard key={post.path} post={post} />
      ))}
    </List>
  </Container>
);

export default FeaturedPosts;
