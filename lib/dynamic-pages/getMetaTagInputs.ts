import IPost from "../../interfaces/IPost";
import { IPostFrontMatter } from "../../interfaces/IPostFrontMatter";
import { capitalizeFirstChar } from "../../utils/capitalizeFirstChar";

export function contentResultsPageMetaTagInputs() {
  const page: string = "content";
  const title: string = "Content";
  const description: string =
    "Browse all blog posts in RIV.SYSTEMS, from professional work to journal entries and miscellaneous content.";

  return { page, description, title };
}

export function categoryResultsPageMetaTagInputs(slug: string | string[]) {
  const category: string = slug[1];
  const page: string = category.replace(" ", "-");
  const title: string = capitalizeFirstChar(category);
  const description: string = `View all content related to ${title} in RIV.SYSTEMS.`;

  return { page, description, title };
}

export function sectionResultsPageMetaTagInputs(slug: string | string[]) {
  const section: string = slug[0];
  const page: string = section.replace(" ", "-");
  const title: string = capitalizeFirstChar(section);
  const description: string = `View all content related to ${title} in RIV.SYSTEMS.`;

  return { page, description, title };
}

export function postPageMetaTagInputs(content: any) {
  const { frontmatter }: any = content;
  const {
    excerpt: description,
    coverImage: image,
    title,
  }: IPostFrontMatter = frontmatter;
  const page = title.replace(" ", "-");

  return { page, description, image, title };
}

export function getMetaTagInputs(
  content: IPost[][] | string[] | string | undefined,
  slug: string | string[] | undefined
) {
  switch (slug?.length) {
    case 1:
      return sectionResultsPageMetaTagInputs(slug);
    case 2:
      return categoryResultsPageMetaTagInputs(slug);
    case 3:
      return postPageMetaTagInputs(content);
    default:
      return contentResultsPageMetaTagInputs();
  }
}
