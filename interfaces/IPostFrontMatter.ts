export interface IPostFrontMatter {
  title: string;
  datePublished: string;
  coverImage: string;
  placeholderImage: string;
  excerpt: string;
  category: string;
  section: string;
  link?: string;
  worksTeamSize?: number;
  worksRoles?: string[];
  worksDuration?: string[];
  worksTools?: string[];
  imageGallery?: string[];
}
