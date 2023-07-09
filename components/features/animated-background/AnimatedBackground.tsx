import useThreeScript from "../../../hooks/vanta/useThreeScript";
import useVanta from "../../../hooks/vanta/useVanta";

import { Box } from "./AnimatedBackground.styled";

const AnimatedBackground: React.FC<{
  children: React.ReactNode;
  activateAnime?: boolean;
}> = ({ children, activateAnime }) => {
  useThreeScript();
  const vantaRef = useVanta(activateAnime);

  return <Box ref={vantaRef}>{children}</Box>;
};

export default AnimatedBackground;
