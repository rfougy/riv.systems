import styled from "@emotion/styled";
import { ArrowIcon } from "../../components/icons/ArrowIcon.styled";
import { darkTheme } from "../theme";

export const Box = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2rem;
  max-width: 30rem;
  margin: 0 1rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const Button = styled.button`
  border: 0.1rem solid ${darkTheme.primary};
  border-radius: 5rem;

  display: flex;
  flex-wrap: no-wrap;
  align-items: center;
  gap: 0.35rem;

  padding: 0.5rem 1rem;
  color: ${darkTheme.primary};
  background-color: rgba(16, 16, 16, 0.5);

  font-size: 0.75rem;

  &:hover {
    color: "none";
    background-color: #2d2d2d;

    ${ArrowIcon} {
      border: solid;
      border-width: 0 0.075rem 0.075rem 0;
      padding: 0.125rem;

      transform: rotate(-45deg);
      -webkit-transform: rotate(-45deg);
    }
  }
`;
