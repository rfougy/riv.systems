import Image from "next/image";
import Markdown from "markdown-to-jsx";

import { IPostFrontMatter } from "../../../interfaces/IPostFrontMatter";

import NextImage from "../../markdown-to-jsx/NextImage";
import Slideshow from "../../markdown-to-jsx/slideshow/Slideshow";
import SlideDisplay from "../../markdown-to-jsx/slideshow/slide-display/SlideDisplay";

import { Container, Content, CoverImage, Divider } from "./PostPage.styled";
import Header from "../header/Header";

const PostPage: React.FC<{ content: any }> = ({ content }) => {
  const { frontmatter, postContent }: any = content;
  const { title, coverImage, placeholderImage }: IPostFrontMatter = frontmatter;

  return content ? (
    <Container>
      <Header frontmatter={frontmatter} />
      <Divider />
      <CoverImage>
        <Image
          priority
          src={coverImage}
          alt={`Cover image for the blog post titled ${title}`}
          width={800}
          height={400}
          objectFit="cover"
          style={{ borderRadius: "2vh" }}
          placeholder="blur"
          blurDataURL={placeholderImage}
        />
      </CoverImage>
      <Content>
        <Markdown
          options={{
            wrapper: "article",
            forceBlock: true,
            overrides: {
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
    </Container>
  ) : (
    <div>Error: No content available...</div>
  );
};

export default PostPage;
