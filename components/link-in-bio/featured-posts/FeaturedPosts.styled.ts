import styled from "@emotion/styled";

export const List = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem 0;

  padding: 2rem;

  border: solid ${(props: any) => props.theme.primary};
  border-radius: 2.5rem;
`;
