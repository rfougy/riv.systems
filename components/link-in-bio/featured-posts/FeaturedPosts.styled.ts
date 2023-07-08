import styled from "@emotion/styled";

export const Container = styled.section`
  padding: 2rem;

  border: solid ${(props: any) => props.theme.primary};
  border-radius: 2.5rem;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem 0;
`;
