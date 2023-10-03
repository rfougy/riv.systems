import { breakpoints, lightTheme } from "../../../../../styles/theme";
import styled from "@emotion/styled";

export const Box = styled.div`
  overflow: hidden;
  text-decoration: none;
  position: relative;

  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 18.75rem;

  margin: auto;
  border: solid transparent;
  border-radius: 2vh;
  border-width: 0 0.075rem 0.1rem 0.075rem;

  background: padding-box,
    linear-gradient(
        180deg,
        ${(props: any) => props.theme.secondary} 55%,
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

export const Text = styled.div`
  padding: 1rem;
  background: ${(props: any) => props.theme.secondary};
`;

export const MetadataContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

export const Metadata = styled.div`
  padding: ${({ hasWorksDuration }: { hasWorksDuration?: boolean }) =>
    hasWorksDuration ? "0" : "1rem 0 0 0"};
`;

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

export const Info = styled.div`
  cursor: cell !important;
`;

export const Category = styled.div`
  position: absolute;
  display: flex;

  margin: 0.5rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;

  cursor: cell !important;
  color: ${lightTheme.secondary};

  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(2.5px);
`;
