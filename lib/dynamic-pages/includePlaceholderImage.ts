import { getPlaiceholder } from "plaiceholder";

import devPlaceholderImage from "../../public/assets/offline-placeholder.png";
import IPost from "../../interfaces/IPost";

export async function includePlaceholderImage(
  content: IPost[][] | string[] | string | undefined
) {
  if (!content) return;

  const contentIsForResultsPage = Array.isArray(content);

  const developingOffline = process.env.DEVELOPING_OFFLINE === "true";

  if (developingOffline && contentIsForResultsPage) {
    const contentWithPlaceholderImage = await Promise.all(
      content.map(async (singleContent: any) => {
        singleContent.frontmatter.coverImage = devPlaceholderImage;
        return singleContent;
      })
    );
    return contentWithPlaceholderImage;
  }

  if (developingOffline && !contentIsForResultsPage) {
    // @ts-ignore
    content.frontmatter.coverImage = devPlaceholderImage;
    return content;
  }

  if (contentIsForResultsPage) {
    const contentWithPlaceholderImage = await Promise.all(
      content.map(async (singleContent: any) => {
        const { coverImage } = singleContent.frontmatter;
        const { base64 } = await getPlaiceholder(coverImage);

        singleContent.frontmatter.placeholderImage = base64;

        return singleContent;
      })
    );

    return contentWithPlaceholderImage;
  } else {
    // @ts-ignore
    const { coverImage } = content.frontmatter;
    const { base64 } = await getPlaiceholder(coverImage);

    // @ts-ignore
    content.frontmatter.placeholderImage = base64;

    return content;
  }
}
