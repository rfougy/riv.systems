import { useTheme } from "@emotion/react";
import { Circle, Container, Title } from "./ThemeToggle.styled";

const ThemeToggle: React.FC<{ toggleTheme: () => void }> = ({
  toggleTheme,
}) => {
  const { id: theme }: any = useTheme();

  const toggleTitle: string = theme === "light" ? "DARK" : "LIGHT";

  return (
    <Container onClick={() => toggleTheme()}>
      <Circle />
      <Title>{toggleTitle}</Title>
    </Container>
  );
};

export default ThemeToggle;
