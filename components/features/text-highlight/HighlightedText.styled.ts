import styled from "@emotion/styled";
import { lightTheme } from "../../../styles/theme";

export const Text = styled.mark`
  color: ${(props: any) => props.theme.primary};
  background-color: ${({ highlighted }: { highlighted: boolean }) =>
    highlighted ? lightTheme.yellow : "transparent"};
`;
