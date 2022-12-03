import ISocials from "../../interfaces/ISocials";

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
    <footer>
      <ul>
        {socials.map((social: ISocials, index: number) => (
          <li key={index}>
            <a href={social.url} target="_blank" rel="noreferrer">
              {social.title}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
