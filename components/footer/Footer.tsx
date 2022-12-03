import ISocials from "../../interfaces/ISocials";

const Footer: React.FC = () => {
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
