import styled from "@emotion/styled";

export const LineBreakStyled = styled.hr`
  width: 100%;
  margin: 2rem 0 2rem 0;
  border: ${(props: any) =>
    props.theme.id === "light"
      ? "0.025rem solid rgba(0, 0, 0, 1)"
      : "0.025rem solid rgba(255, 255, 255, 1)"};
`;
