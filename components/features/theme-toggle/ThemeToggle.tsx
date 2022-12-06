import { useTheme } from "@emotion/react";
import { Circle, Container, Title } from "./ThemeToggle.styled";

const ThemeToggle: React.FC<{ toggleTheme: () => void }> = ({
  toggleTheme,
}) => {
  const { id: theme }: any = useTheme();

  return (
    <Container onClick={() => toggleTheme()}>
      <Circle />
      <Title>{theme.toUpperCase()}</Title>
    </Container>
  );
};

export default ThemeToggle;
