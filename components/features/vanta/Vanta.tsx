import useThreeScript from "../../../hooks/vanta/useThreeScript";
import useVanta from "../../../hooks/vanta/useVanta";

import { Box } from "./Vanta.styled";

const Vanta: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  useThreeScript();
  const vantaRef = useVanta();

  return <Box ref={vantaRef}>{children}</Box>;
};

export default Vanta;
