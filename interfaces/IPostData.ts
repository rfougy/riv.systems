export default interface IPostData {
  fileName: string;
  section: string;
  category: string;
  frontmatter: {
    title: string;
    datePublished: string;
    section: string;
    category: string;
    excerpt: string;
    coverImage: string;
    link: string;
    worksTeamSize: number;
    worksRoles: string[];
    worksDuration: string[];
    worksTools: string[];
  };
  path: string;
}
