import React from "react";
import Link from "next/link";
import IPost from "../../../interfaces/IPost";
import { IPostFrontMatter } from "../../../interfaces/IPostFrontMatter";
import { Nav, NavButton, PostTitle } from "./PageNav.styled";
import ArrowIcon from "../../icons/ArrowIcon";
import useViewportWidthEventListener from "../../../hooks/useViewportWidthListener";
import { breakpoints } from "../../../styles/theme";

interface ExtendedPost extends IPost {
  path: string;
  frontmatter: IPostFrontMatter;
}

const PageNav: React.FC<{
  currPost: ExtendedPost;
  posts: ExtendedPost[];
}> = ({ currPost, posts }) => {
  const currIndex = posts.findIndex((post) => post.path === currPost.path);
  const prevPost = currIndex < posts.length - 1 ? posts[currIndex + 1] : null;
  const nextPost = currIndex > 0 ? posts[currIndex - 1] : null;
  const isMobileView = useViewportWidthEventListener(
    breakpoints.useViewportWidth.xs
  );

  return (
    <Nav>
      {prevPost && (
        <Link href={prevPost.path}>
          <NavButton as="div" className="previous">
            <ArrowIcon left />
            <PostTitle>
              {isMobileView ? "Prev Post" : prevPost.frontmatter.title}
            </PostTitle>
          </NavButton>
        </Link>
      )}
      {nextPost && (
        <Link href={nextPost.path}>
          <NavButton as="div" className="next">
            <PostTitle>
              {isMobileView ? "Next Post" : nextPost.frontmatter.title}
            </PostTitle>
            <ArrowIcon right />
          </NavButton>
        </Link>
      )}
    </Nav>
  );
};

export default PageNav;
