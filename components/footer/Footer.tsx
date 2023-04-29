import { socialsList } from "../../constants/socialsList";
import ISocials from "../../interfaces/ISocials";
import IconButton from "../shared/icon-button/IconButton";
import sourceCodeIcon from "../../public/assets/icons/source-code-icon.svg";

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
          <IconButton
            src={sourceCodeIcon}
            alt="RIV.SYSTEMS source code"
            ariaLabel="RIV.SYSTEMS source code button"
            height="1rem"
            width="1rem"
          />
        </a>
      </SocialsLink>
      <SocialsList>
        {socialsList.map((social: ISocials, index: number) => (
          <SocialsLink key={index}>
            <a href={social.url} target="_blank" rel="noreferrer">
              <IconButton
                src={social.icon}
                alt={social.title}
                ariaLabel={`${social.icon} button`}
                height="1rem"
                width="1rem"
              />
            </a>
          </SocialsLink>
        ))}
      </SocialsList>
    </Foot>
  );
};

export default Footer;
