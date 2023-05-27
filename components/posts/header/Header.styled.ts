import { breakpoints } from "../../../styles/theme";
import styled from "@emotion/styled";

export const Header = styled.header``;

export const Title = styled.h1`
  font-size: 2rem;

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

export const TitleAndLink = styled.div`
  display: flex;
  gap: 1rem;

  margin: 1rem 0 1.75rem 0;
`;
