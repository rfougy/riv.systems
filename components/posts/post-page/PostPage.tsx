import Image from "next/image";
import Markdown from "markdown-to-jsx";

import { IPostFrontMatter } from "../../../interfaces/IPostFrontMatter";

import NextImage from "../../markdown-to-jsx/next-image/NextImage";
import Slideshow from "../../markdown-to-jsx/slideshow/Slideshow";
import SlideDisplay from "../../markdown-to-jsx/slideshow/slide-display/SlideDisplay";
import CodeSnippet from "../../markdown-to-jsx/code-snippet/CodeSnippet";
import HighlightedText from "../../features/text-highlight/HighlightedText";

import { Box, Content, CoverImage, Divider } from "./PostPage.styled";
import Header from "../header/Header";
import TextHighlightProvider from "../../../context/TextHighlightContext";
import HighlightToggler from "../../features/text-highlight/HighlightToggler";

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
                code: {
                  component: CodeSnippet,
                },
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
                Slide: {
                  component: SlideDisplay,
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
