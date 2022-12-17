import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  align-items: center;
  min-height: 2rem;
  padding: 0.5rem 0.5rem;

  background-color: ${(props: any) => props.theme.primary};
`;

export const CloseIconContainer = styled.button`
  display: flex;
  width: 1.5rem;
  flex-shrink: 0;

  background: none;
  border: none;
  padding: 0;

  cursor: cell;
`;

export const Text = styled.p`
  color: ${(props: any) => props.theme.secondary};
  font-weight: 500;
  text-align: center;
  margin: auto;
  padding-left: 0.75rem;
`;
