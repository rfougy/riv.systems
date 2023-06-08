import Image from "next/legacy/image";
import Link from "next/link";

import closeIconDark from "../../public/assets/close-icon-dark.svg";
import closeIconLight from "../../public/assets/close-icon-light.svg";

import { ITheme } from "../../interfaces/ITheme";
import { IAnnouncement } from "../../interfaces/IAnnouncement";

import { dateToNumericStr } from "../../utils/dateToNumericStr";

import {
  CloseIconContainer,
  Container,
  StyledLink,
  Text,
} from "./Announcement.styled";

const closeIconTheme: any = {
  dark: closeIconDark,
  light: closeIconLight,
};

/**
 * @attention To change the announcement text, please refer to the variable 'announcement' via _app.tsx
 */
const Announcement: React.FC<{
  announcement: IAnnouncement;
  setAnnouncementIsActive: (bool: boolean) => void;
  theme: ITheme;
}> = ({ announcement, setAnnouncementIsActive, theme }) => {
  const closeIcon = closeIconTheme[theme.id];
  const convertedDate: string = dateToNumericStr(announcement.dateCreated);

  function handleClose(): void {
    sessionStorage.setItem("announcement", JSON.stringify(announcement));
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
        Latest Update ({convertedDate}): {announcement.text}{" "}
        {announcement.link && (
          <span>
            <Link href={announcement.link}>
              <StyledLink>Click here</StyledLink>
            </Link>
          </span>
        )}
      </Text>
    </Container>
  );
};

export default Announcement;
