import { socialsList } from "../../constants/socialsList";
import ISocials from "../../interfaces/ISocials";

import { Footer as Foot, SocialsList, SocialsLink } from "./Footer.styled";

const Footer: React.FC = () => {
  return (
    <Foot>
      <SocialsLink>
        <a
          href={"https://github.com/rfougy/riv.systems"}
          target="_blank"
          rel="noreferrer"
        >
          Source Code
        </a>
      </SocialsLink>
      <SocialsList>
        {socialsList.map((social: ISocials, index: number) => (
          <SocialsLink key={index}>
            <a href={social.url} target="_blank" rel="noreferrer">
              {social.title}
            </a>
          </SocialsLink>
        ))}
      </SocialsList>
    </Foot>
  );
};

export default Footer;
