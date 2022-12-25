import { useTheme } from "@emotion/react";
import { Circle, Container, Title } from "./ThemeToggleButton.styled";

const ThemeToggleButton: React.FC<{ toggleTheme: () => void }> = ({
  toggleTheme,
}) => {
  const { id: theme }: any = useTheme();
  const themeInitial: string = theme.split("")[0].toUpperCase();

  return (
    <Container aria-label="Color Theme Toggle" onClick={() => toggleTheme()}>
      <Circle />
      <Title>{themeInitial}</Title>
    </Container>
  );
};

export default ThemeToggleButton;
