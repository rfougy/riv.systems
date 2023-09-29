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
  flex-wrap: no-wrap;
  justify-content: space-between;
  padding: 0;
  gap: 0.6rem;
  width: max-content;
  padding: 0.1rem 0.6rem;
`;

export const Title = styled.h6`
  color: ${(props: any) => props.theme.primary};
  background-color: none;
  margin: 0;
`;
