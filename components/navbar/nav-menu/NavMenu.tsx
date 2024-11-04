import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";

import { sectionsList } from "../../../constants/sectionsList";
import externalLinkIcon from "../../../public/assets/icons/external-link-icon.svg";

import { Text, Box, MenuOption, PhotosBox } from "./NavMenu.styled";
import Image from "next/image";

const NavMenu: React.FC = () => {
  const { asPath: path }: NextRouter = useRouter();

  const [hoveredOption, setHoveredOption] = useState<string | null>();
  const [activeOption, setActiveOption] = useState<string | null>();

  function setNavStates(): void {
    const parsedPath: string[] = path.split("/");
    let activeMenuOption: string | null;

    if (parsedPath.length === 2) {
      activeMenuOption = parsedPath[1]; // Content Page
    } else {
      activeMenuOption = parsedPath[2]; // Section Page
    }

    setHoveredOption(activeMenuOption);
    setActiveOption(activeMenuOption);
  }

  useEffect((): void => setNavStates(), [path]);

  return (
    <Box
      onMouseLeave={(): void => setHoveredOption(activeOption as string | null)}
    >
      {sectionsList.map((section: string, index: number) => (
        <MenuOption
          key={index}
          onMouseOver={(): void => setHoveredOption(section)}
        >
          <Link href={`/content/${section}`}>
            <Text
              isActiveOption={section === activeOption}
              isHoveredOption={section === hoveredOption}
              hoverIsActive={typeof hoveredOption === "string"}
              userInHomePage={!activeOption}
            >
              {section === activeOption
                ? "./" + section.toUpperCase()
                : "/" + section.toUpperCase()}
            </Text>
          </Link>
        </MenuOption>
      ))}
      <a href="https://riv-photos.tumblr.com/" target="_blank" rel="noreferrer">
        <PhotosBox>
          <Text isPhotosOption>PHOTOS</Text>
          <Image
            src={externalLinkIcon}
            alt={"external link icon"}
            height={10}
            width={10}
            sizes="100vw"
          />
        </PhotosBox>
      </a>
    </Box>
  );
};

export default NavMenu;
