import styled from "@emotion/styled";

export const Box = styled.div`
  align-items: center;
  background-color: ${(props: any) => props.theme.primary};
  display: flex;
  min-height: 2rem;
  padding: 0.5rem 0.5rem;
`;

export const CloseIconBox = styled.button`
  background: none;
  border: none;
  cursor: cell;
  display: flex;
  flex-shrink: 0;
  padding: 0;
  width: 1.5rem;
`;

export const Text = styled.p`
  color: ${(props: any) => props.theme.secondary};
  cursor: crosshair;
  font-weight: 500;
  font-size: 0.75rem;
  margin: auto;
  padding-left: 0.75rem;
  text-align: center;
`;

export const StyledLink = styled.p`
  color: ${(props: any) => props.theme.secondary};
  cursor: cell;
  font-weight: 500;
  text-decoration: underline;
`;
