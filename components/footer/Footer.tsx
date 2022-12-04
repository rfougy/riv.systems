import ISocials from "../../interfaces/ISocials";
import { Footer as Foot, SocialsList, SocialsLink } from "./Footer.styled";

const socials: ISocials[] = [
  {
    title: "GitHub",
    url: "https://github.com/rfougy",
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/riviere-fougy/",
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/riv.ig/",
  },
  {
    title: "Email",
    url: "mailto:rivierefougy@gmail.com",
  },
];

const Footer: React.FC = () => {
  return (
    <Foot>
      <SocialsList>
        {socials.map((social: ISocials, index: number) => (
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
