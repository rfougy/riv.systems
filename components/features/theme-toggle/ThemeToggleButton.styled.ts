import styled from "@emotion/styled";

export const Box = styled.button`
  align-items: center;
  background-color: ${(props: any) =>
    props.theme.id === "light"
      ? "rgba(255, 255, 255, 0.3)"
      : "rgba(0, 0, 0, 0.3)"};
  border: 0.1rem solid ${(props: any) => props.theme.primary};
  border-radius: 3vh;
  display: flex;
  flex-direction: ${(props: any) =>
    props.theme.id === "light" ? "row" : "row-reverse"};
  flex-wrap: no-wrap;
  justify-content: space-between;
  padding: 0;
  width: 2.5rem;
`;

export const Circle = styled.div`
  background: ${(props: any) => props.theme.red};
  border-radius: 50%;
  margin: 0.1rem;

  height: 0.75rem;
  width: 0.75rem;
`;

export const Title = styled.h6`
  color: ${(props: any) => props.theme.primary};
  background-color: none;
  padding: ${(props: any) =>
    props.theme.id === "light" ? "0 0.6rem 0 0" : "0 0 0 0.6rem"};
  margin: 0;
`;
