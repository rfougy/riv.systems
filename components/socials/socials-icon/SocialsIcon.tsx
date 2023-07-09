import ISocials from "../../../interfaces/ISocials";
import IconButton from "../../shared/icon-button/IconButton";

import { Link } from "./SocialsIcon.styled";

const SocialsIcon: React.FC<{ social: ISocials; index?: number }> = ({
  social,
  index = 0,
}) => (
  <Link key={index}>
    <a href={social.url} target="_blank" rel="noreferrer">
      <IconButton
        src={social.icon}
        alt={social.title}
        ariaLabel={`${social.icon} button`}
        height="1rem"
        width="1rem"
      />
    </a>
  </Link>
);

export default SocialsIcon;
