import { useState } from "react";
import { Box } from "./Newsletter.styled";
import EmailField from "./email-field/EmailField";
import SubscribeButton from "./subscribe-button/SubscribeButton";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState<string>("");

  /**
   * @todo add email validation(?)
   */
  function subscribe() {}

  return (
    <Box>
      <EmailField email={email} setEmail={setEmail} handleSubmit={subscribe} />
      <SubscribeButton handleSubmit={subscribe} />
    </Box>
  );
};

export default Newsletter;
