import styled from "@emotion/styled";
import { ArrowIcon } from "../../components/icons/ArrowIcon.styled";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2rem;
  max-width: 30rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const Button = styled.button`
  border: 0.1rem solid ${(props: any) => props.theme.primary};
  border-radius: 5rem;

  display: flex;
  flex-wrap: no-wrap;
  align-items: center;
  gap: 0.35rem;

  padding: 0.5rem 1rem;
  color: ${(props: any) => props.theme.primary};
  background-color: ${(props: any) =>
    props.theme.id === "light" ? props.theme.secondary : "none"};

  &:hover {
    color: ${(props: any) =>
      props.theme.id === "light" ? props.theme.secondary : "none"};
    background-color: ${(props: any) =>
      props.theme.id === "light" ? props.theme.primary : "#2D2D2D"};

    ${ArrowIcon} {
      border: solid
        ${(props: any) =>
          props.theme.id === "light" ? props.theme.secondary : ""};
      border-width: 0 0.075rem 0.075rem 0;
      padding: 0.125rem;

      transform: rotate(-45deg);
      -webkit-transform: rotate(-45deg);
    }
  }
`;
