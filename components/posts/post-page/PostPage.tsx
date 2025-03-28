import Image from "next/image";
import Markdown from "markdown-to-jsx";

import { IPostFrontMatter } from "../../../interfaces/IPostFrontMatter";

import NextImage from "../../markdown-to-jsx/next-image/NextImage";
import Slideshow from "../../markdown-to-jsx/slideshow/Slideshow";
import HighlightedText from "../../features/text-highlight/HighlightedText";
import HighlightToggler from "../../features/text-highlight/HighlightToggler";
import Header from "../header/Header";
import TextHighlightProvider from "../../../context/TextHighlightContext";

import { Box, Content, CoverImage, Divider } from "./PostPage.styled";
import LineBreak from "../../markdown-to-jsx/line-break/LineBreak";

const PostPage: React.FC<{ content: any }> = ({ content }) => {
  const { frontmatter, postContent }: any = content;
  const { title, coverImage, placeholderImage, section }: IPostFrontMatter =
    frontmatter;

  const isWorksPage = section === "works";

  return content ? (
    <TextHighlightProvider>
      <Box>
        <Header frontmatter={frontmatter} />
        <Divider />
        <CoverImage>
          <Image
            priority
            src={coverImage}
            alt={`Cover image for the blog post titled ${title}`}
            fill
            placeholder="blur"
            blurDataURL={placeholderImage}
            style={{
              borderRadius: "2vh",
              objectFit: "cover",
            }}
          />
        </CoverImage>
        <Content>
          <Markdown
            options={{
              wrapper: "article",
              forceBlock: true,
              overrides: {
                mark: {
                  component: HighlightedText,
                },
                img: {
                  component: NextImage,
                },
                Image: {
                  component: NextImage,
                },
                Slideshow: {
                  component: Slideshow,
                },
                hr: {
                  component: LineBreak,
                },
              },
            }}
          >
            {postContent}
          </Markdown>
        </Content>
      </Box>
      {isWorksPage && <HighlightToggler />}
    </TextHighlightProvider>
  ) : (
    <div>Error: No content available...</div>
  );
};

export default PostPage;
