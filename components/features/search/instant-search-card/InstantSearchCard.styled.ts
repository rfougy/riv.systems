import { breakpoints } from "../../../../styles/theme";
import styled from "@emotion/styled";

export const Container = styled.div`
  overflow: hidden;
  text-decoration: none;

  display: flex;
  flex-direction: row;
  width: 100%;

  margin: auto;
  padding-bottom: 1rem;

  border-bottom: solid 1px;
  border-color: ${(props: any) => props.theme.primary};

  @media (max-width: ${breakpoints.xs}) {
    max-width: none;
  }
`;

export const ImageContainer = styled.div`
  position: relative;

  min-width: 6.25rem;
  min-height: 6.25rem;
`;

export const Text = styled.div`
  padding: 1rem;
  background: ${(props: any) => props.theme.secondary};
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
