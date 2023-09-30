import styled from "@emotion/styled";
import { lightTheme } from "../../../styles/theme";

export const Text = styled.mark`
  color: ${(props: any) => {
    if (props.theme.id === "light") {
      return props.theme.primary;
    } else {
      return props.highlighted ? props.theme.secondary : props.theme.primary;
    }
  }};
  background-color: ${({ highlighted }: { highlighted: boolean }) =>
    highlighted ? lightTheme.yellow : "transparent"};
`;
