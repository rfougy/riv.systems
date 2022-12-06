import styled from "@emotion/styled";

export const Container = styled.button`
  background-color: none;
  border: 0.1rem solid ${(props: any) => props.theme.primary};
  border-radius: 25rem;

  display: flex;
  flex-wrap: no-wrap;
  flex-direction: ${(props: any) =>
    props.theme.id === "light" ? "row" : "row-reverse"};
  justify-content: space-between;
  align-items: center;

  width: 4rem;
  padding: 0.1rem 0.3rem 0.1rem 0.2rem;
`;

export const Circle = styled.div`
  background: ${(props: any) => props.theme.primary};
  border-radius: 50%;
  width: 0.75rem;
  height: 0.75rem;
  margin: 0.1rem;
`;

export const Title = styled.p`
  color: ${(props: any) => props.theme.primary};
  background-color: none;

  margin: 0;
`;
