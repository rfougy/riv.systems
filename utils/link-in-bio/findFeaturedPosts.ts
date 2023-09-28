import IPostData from "../../interfaces/IPostData";

type title = string;

export default function findFeaturedPosts(
  posts: IPostData[],
  postsToFind: title[]
): IPostData[] {
  return posts.filter((post) => postsToFind.includes(post.frontmatter.title));
}
