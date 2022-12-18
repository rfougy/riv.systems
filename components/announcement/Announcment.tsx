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
  announcement: any;
  theme: any;
  setAnnouncementIsActive: (bool: boolean) => void;
}> = ({ announcement, theme, setAnnouncementIsActive }) => {
  const closeIcon = closeIconTheme[theme.id];

  function handleClose() {
    localStorage.setItem("announcement", JSON.stringify(announcement));
    setAnnouncementIsActive(false);
  }

  return (
    <Container>
      <CloseIconContainer>
        <Image
          src={closeIcon}
          alt="announcement close icon"
          onClick={() => handleClose()}
        />
      </CloseIconContainer>
      <Text>
        Latest Update ({new Date(announcement.dateCreated).toLocaleDateString()}
        ): {announcement.text}
      </Text>
    </Container>
  );
};

export default Announcement;
