import { breakpoints } from "./../../../styles/theme";
import styled from "@emotion/styled";

export const Header = styled.header`
  border: solid transparent;
  border-radius: 3vh;
  border-width: 0 0.05rem 0.1rem 0.05rem;

  margin-bottom: 3rem;

  background: padding-box,
    linear-gradient(
        180deg,
        ${(props: any) => props.theme.secondary} 87.5%,
        ${(props: any) => props.theme.primary} 100%
      )
      border-box;
`;

export const HeaderContainer = styled.div`
  border-radius: 3vh;
  padding: 1rem;

  background: ${(props: any) => props.theme.secondary};
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin: 1rem 0 1.75rem 0;

  @media (max-width: ${breakpoints.xs}) {
    font-size: 1.75rem;
  }
`;

export const Excerpt = styled.p`
  margin: 0;
`;

export const Metadata = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const Inline = styled.li`
  display: inline-block;
  margin-right: 0.5rem;
`;

export const Li = styled.li`
  p {
    font-size: 0.75rem;
    margin: 0;
  }
`;

export const Margin = styled.div`
  margin-top: 1.75rem;
`;

export const CoverImage = styled.div``;

export const Content = styled.div`
  margin-top: 2.125rem;

  article {
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    width: 100%;
    text-align: left;
  }

  h2 {
    font-size: 1.25rem;
  }

  p {
    width: 100%;
    line-height: 175%;
  }

  a {
    font-size: 0.875rem;
  }

  ul {
    list-style-type: disc;
    width: 100%;
    margin-left: 20%;
    line-height: 150%;
  }

  iframe {
    aspect-ratio: 16 / 9;
    height: 100%;
    width: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 50rem;
`;
