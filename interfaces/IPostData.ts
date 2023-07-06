import { IPostFrontMatter } from "./IPostFrontMatter";

export default interface IPostData {
  fileName: string;
  section: string;
  category: string;
  frontmatter: IPostFrontMatter;
  path: string;
}
