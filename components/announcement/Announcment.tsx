import closeIconDark from "../../public/assets/close-icon-dark.svg";
import closeIconLight from "../../public/assets/close-icon-light.svg";
import Image from "next/image";
import { default as NextLink } from "next/link";

import {
  CloseIconContainer,
  Container,
  Link,
  Text,
} from "./Announcement.styled";
import { IAnnouncement } from "../../interfaces/IAnnouncement";
import { ITheme } from "../../interfaces/ITheme";
import { dateToNumericStr } from "../../utils/dateToNumericStr";

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
        Latest Update {convertedDate}: {announcement.text}{" "}
        {announcement.link && (
          <span>
            <NextLink href={announcement.link} passHref>
              <Link>Click here.</Link>
            </NextLink>
          </span>
        )}
      </Text>
    </Container>
  );
};

export default Announcement;
