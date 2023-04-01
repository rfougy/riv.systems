import { breakpoints } from "./../../../../../styles/theme";
import styled from "@emotion/styled";

export const Container = styled.a`
  overflow: hidden;
  text-decoration: none;

  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 18.75rem;

  margin: auto;
  border: 0.075rem solid transparent;
  border-radius: 2vh;

  background: padding-box,
    linear-gradient(
        180deg,
        ${(props: any) => props.theme.secondary} 55%,
        ${(props: any) => props.theme.primary} 150%
      )
      border-box;

  &:hover {
    background: padding-box,
      linear-gradient(
          180deg,
          ${(props: any) => props.theme.secondary} 55%,
          ${(props: any) => props.theme.primary} 100%
        )
        border-box;
  }

  @media (max-width: ${breakpoints.xs}) {
    border: solid 0.075rem;
    max-width: none;
  }
`;

export const Text = styled.div`
  padding: 1rem;
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
