import { breakpoints } from "./../../../../../styles/theme";
import styled from "@emotion/styled";

export const Container = styled.a`
  overflow: hidden;
  text-decoration: none;

  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 50rem;

  margin: auto;
  border: solid 0.1rem;
  border-radius: 2vh;

  background: ${(props: any) => props.theme.idle};

  &:hover {
    background: ${(props: any) => props.theme.highlight};
  }

  @media (max-width: ${breakpoints.xs}) {
    border: solid 0.075rem;
    max-width: none;
  }
`;

export const Text = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  border-top: solid 0.1rem;
  padding: 1rem;

  @media (max-width: ${breakpoints.xs}) {
    border-top: solid 0.075rem;
  }
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
