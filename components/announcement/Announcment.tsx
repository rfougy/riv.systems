import closeIconDark from "../../public/assets/close-icon-dark.svg";
import closeIconLight from "../../public/assets/close-icon-light.svg";
import Image from "next/image";

import { CloseIconContainer, Container, Text } from "./Announcement.styled";
import { IAnnouncement } from "../../interfaces/IAnnouncement";
import { ITheme } from "../../interfaces/ITheme";
import { dateToNumericStr } from "../../utils/dateToNumericStr";

const closeIconTheme: any = {
  dark: closeIconDark,
  light: closeIconLight,
};

const Announcement: React.FC<{
  announcement: IAnnouncement;
  setAnnouncementIsActive: (bool: boolean) => void;
  theme: ITheme;
}> = ({ announcement, setAnnouncementIsActive, theme }) => {
  const closeIcon = closeIconTheme[theme.id];
  const convertedDate: string = dateToNumericStr(announcement.dateCreated);

  function handleClose(): void {
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
        Latest Update {convertedDate}: {announcement.text}
      </Text>
    </Container>
  );
};

export default Announcement;
