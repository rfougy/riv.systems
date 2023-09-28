import ISocials from "../../../interfaces/ISocials";
import SocialsIcon from "../socials-icon/SocialsIcon";
import { List } from "./SocialsList.styled";

const SocialsList: React.FC<{ socials: ISocials[] }> = ({ socials }) => (
  <List>
    {socials.map((social: ISocials, index: number) => (
      <SocialsIcon social={social} key={index} />
    ))}
  </List>
);

export default SocialsList;
