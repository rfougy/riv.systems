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
  margin: 0 0 1rem 0;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin: 0;

  @media (max-width: 40em) {
    font-size: 1.75rem;
  }
`;

export const P = styled.p`
  margin: 0;
`;

export const Inline = styled.p`
  display: inline-block;
  margin: 0 0.5rem;
`;

export const MarginBottom = styled.div`
  margin-bottom: 3rem;
`;

export const MarginTop = styled.div`
  margin-top: 3rem;
`;
