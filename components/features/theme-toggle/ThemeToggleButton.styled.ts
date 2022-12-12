import styled from "@emotion/styled";

export const Container = styled.button`
  background-color: ${(props: any) => props.theme.idle};
  border: 0.1rem solid ${(props: any) => props.theme.primary};
  border-radius: 3vh;

  display: flex;
  flex-wrap: no-wrap;
  flex-direction: ${(props: any) =>
    props.theme.id === "light" ? "row" : "row-reverse"};
  justify-content: space-between;
  align-items: center;

  width: 2.5rem;
  padding: 0;
`;

export const Circle = styled.div`
  background: ${(props: any) => props.theme.primary};
  border-radius: 50%;
  width: 0.75rem;
  height: 0.75rem;
  margin: 0.1rem;
`;

export const Title = styled.h6`
  color: ${(props: any) => props.theme.primary};
  background-color: none;

  margin: 0;
  padding: ${(props: any) =>
    props.theme.id === "light" ? "0 0.6rem 0 0" : "0 0 0 0.6rem"};
`;
