import { Button as ButtonStyled } from "./SubscribeButton.styled";

const SubscribeButton: React.FC<{
  handleSubmit: () => void;
}> = ({ handleSubmit }) => (
  <ButtonStyled onClick={() => handleSubmit()}>Subscribe</ButtonStyled>
);

export default SubscribeButton;
