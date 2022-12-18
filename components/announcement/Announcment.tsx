import { CloseIconContainer, Container, Text } from "./Announcement.styled";

import closeIconLight from "../../public/assets/close-icon-light.svg";
import closeIconDark from "../../public/assets/close-icon-dark.svg";
import Image from "next/image";

const closeIconTheme: any = {
  light: closeIconLight,
  dark: closeIconDark,
};

const announcementText: string =
  "Latest Update (12/16/22): Announcement Bar can now collapse!";

const Announcement: React.FC<{
  theme: any;
  setAnnouncementIsActive: (bool: boolean) => void;
}> = ({ theme, setAnnouncementIsActive }) => {
  const closeIcon = closeIconTheme[theme.id];

  return (
    <Container>
      <CloseIconContainer>
        <Image
          src={closeIcon}
          alt="announcement close icon"
          onClick={() => setAnnouncementIsActive(false)}
        />
      </CloseIconContainer>
      <Text>{announcementText}</Text>
    </Container>
  );
};

export default Announcement;
