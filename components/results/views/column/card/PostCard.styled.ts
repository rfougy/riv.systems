import { breakpoints } from "../../../../../styles/theme";
import styled from "@emotion/styled";

export const Container = styled.div`
  overflow: hidden;
  text-decoration: none;

  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 50rem;

  margin: auto;
  border: solid transparent;
  border-radius: 2vh;
  border-width: 0 0.075rem 0.1rem 0.075rem;

  background: padding-box,
    linear-gradient(
        180deg,
        ${(props: any) => props.theme.secondary} 86%,
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
    background: padding-box,
      linear-gradient(
          180deg,
          ${(props: any) => props.theme.secondary} 92.5%,
          ${(props: any) => props.theme.primary} 100%
        )
        border-box;
  }

  @media (max-width: ${breakpoints.xxs}) {
    background: padding-box,
      linear-gradient(
          180deg,
          ${(props: any) => props.theme.secondary} 88%,
          ${(props: any) => props.theme.primary} 100%
        )
        border-box;
  }
`;

export const Text = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  padding: 1rem;

  background: ${(props: any) => props.theme.secondary};
`;

export const Metadata = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

/**
 * @description webkit portion allows for ellipsis after reaching two lines of text
 * @see https://chipcullen.com/truncating-type-at-more-than-one-line/
 */
export const Title = styled.h2`
  display: inline-block;
  margin: 0;
  max-height: 2.9rem;
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
