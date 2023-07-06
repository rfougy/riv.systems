import { breakpoints } from "../../../../styles/theme";
import styled from "@emotion/styled";

export const Container = styled.div`
  overflow: hidden;
  text-decoration: none;

  display: flex;
  flex-direction: row;

  height: 8rem;
  width: 100%;

  margin: auto;
  border: solid transparent;
  border-radius: 2vh;
  border-width: 0.075rem 0.1rem 0.075rem 0;

  background: padding-box,
    linear-gradient(
        90deg,
        ${(props: any) => props.theme.secondary} 25%,
        ${(props: any) => props.theme.primary} 100%
      )
      border-box;

  &:hover {
    div {
      background: ${(props: any) => props.theme.highlight};
    }
  }

  @media (max-width: ${breakpoints.xs}) {
    max-width: none;
  }
`;

export const ImageContainer = styled.div`
  position: relative;

  min-width: 8rem;
  min-height: 8rem;
`;

export const Text = styled.div`
  padding: 1rem;
  width: 100%;

  background: ${(props: any) => props.theme.secondary};
`;

export const Metadata = styled.div``;

/**
 * @description webkit portion allows for ellipsis after reaching two lines of text
 * @see https://chipcullen.com/truncating-type-at-more-than-one-line/
 */
export const Title = styled.h2`
  display: inline-block;
  margin-top: 0;
  height: 2.9rem;
  width: 100%;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

export const InfoContainer = styled.div`
  display: flex;
  margin: 0;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0.5rem 0 0;
  cursor: cell !important;
`;
