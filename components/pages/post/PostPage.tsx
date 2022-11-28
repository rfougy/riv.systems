import Markdown from "markdown-to-jsx";
import Image from "next/image";
import { useEffect } from "react";
import { dateToStr } from "../../../utils/dateToStr";
import DisplayDotsAnime from "../../features/display-dots-animation/DisplayDotsAnime";

const PostPage: React.FC<{ slug: string; content: any }> = ({
  slug,
  content,
}) => {
  const { frontmatter, postContent } = content;
  const { datePublished, coverImage } = frontmatter;
  const section: string = slug[0];
  const category: string = slug[1];
  const dateAsStr: string = dateToStr(new Date(datePublished));

  return content ? (
    <div>
      <div>
        <div>
          <div>
            <p>{section}</p>
            <p>&gt;</p>
            <p>{category}</p>
          </div>
          <div>
            <p>{dateAsStr}</p>
          </div>
        </div>
        <DisplayDotsAnime />
        <Image src={coverImage} alt="" width={500} height={500} />
      </div>
      <Markdown>{postContent}</Markdown>
    </div>
  ) : (
    <div>Error: No content available...</div>
  );
};

export default PostPage;
