import { useTheme } from "@emotion/react";

import { Circle, Box, Title } from "./ThemeToggleButton.styled";

const ThemeToggleButton: React.FC<{
  toggleTheme: () => void;
}> = ({ toggleTheme }) => {
  const { id: themeTitle }: any = useTheme();
  const themeInitial: string = themeTitle.split("")[0].toUpperCase();

  return (
    <Box aria-label="Color Theme Toggle" onClick={(): void => toggleTheme()}>
      <Circle />
      <Title>{themeInitial}</Title>
    </Box>
  );
};

export default ThemeToggleButton;
