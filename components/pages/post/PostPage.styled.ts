import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 50rem;
`;

export const Metadata = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 1rem;
`;

export const Header = styled.header``;

export const Title = styled.h1`
  font-size: 2rem;
  margin: 0;

  @media (max-width: 40em) {
    font-size: 1.75rem;
  }
`;

export const CoverImage = styled.div`
  margin: 1.5rem 0;
`;

export const Li = styled.li`
  p {
    margin: 0;
  }
`;

export const Inline = styled.li`
  display: inline-block;
  margin-right: 0.5rem;
`;

export const Content = styled.div`
  margin-top: 3rem;

  p {
    width: 100%;
  }

  iframe {
    aspect-ratio: 16 / 9;
    height: 100%;
    width: 100%;
  }

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }

  ul {
    // margin: 1.5rem 0;
  }

  ul img {
    margin: 0.25rem 0;
  }
`;
