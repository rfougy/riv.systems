import ISocials from "../interfaces/ISocials";

import githubIcon from "../public/assets/icons/socials/github-icon.svg";
import instagramIcon from "../public/assets/icons/socials/instagram-icon.svg";
import tumblrIcon from "../public/assets/icons/socials/tumblr-icon.svg";
import linkedinIcon from "../public/assets/icons/socials/linkedin-icon.svg";
import emailIcon from "../public/assets/icons/socials/send-icon.svg";

export const socialsList: ISocials[] = [
  {
    title: "GitHub",
    url: "https://github.com/rfougy",
    icon: githubIcon,
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/riviere-fougy/",
    icon: linkedinIcon,
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/riv.ig/",
    icon: instagramIcon,
  },
  {
    title: "Email",
    url: "mailto:rivierefougy@gmail.com",
    icon: emailIcon,
  },
];
