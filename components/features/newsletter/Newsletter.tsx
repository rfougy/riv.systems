import { useState } from "react";

import EmailField from "./email-field/EmailField";
import SubscribeButton from "./subscribe-button/SubscribeButton";

import { newsletterGroups } from "../../../types/newsletterGroups";

import { Box } from "./Newsletter.styled";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [newsletterGroups, setNewsletterGroups] =
    useState<newsletterGroups[]>();

  /**
   * @todo add email validation(?)
   */
  function subscribe() {
    setEmail("");
  }

  return (
    <Box>
      <EmailField email={email} setEmail={setEmail} handleSubmit={subscribe} />
      <SubscribeButton handleSubmit={subscribe} />
    </Box>
  );
};

export default Newsletter;
