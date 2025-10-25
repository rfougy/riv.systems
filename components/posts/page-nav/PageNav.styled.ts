import styled from "@emotion/styled";
import { breakpoints } from "../../../styles/theme";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 4rem 0;
`;

export const NavButton = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: ${(props: any) => props.theme.primary};

  &:hover {
    opacity: 0.7;
  }

  &.previous {
    margin-right: auto;
  }

  &.next {
    margin-left: auto;
  }
`;

export const PostTitle = styled.span`
  font-size: 0.9rem;
  max-width: 200px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.2;
`;
