import styled from "@emotion/styled";

export const Button = styled.button`
  all: unset;

  img {
    "-webkit-filter": ${(props: any) =>
      props.theme.id === "light" ? "invert(0)" : "invert(1)"};
    filter: ${(props: any) =>
      props.theme.id === "light" ? "invert(0)" : "invert(1)"};
  }
`;

export const List = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;
