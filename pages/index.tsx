import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import React, { useRef, useState } from "react";

import DisplayDotsCoordsProvider from "../context/DisplayDotsCoordsContext";
import DisplayDotsAnime from "../components/features/display-dots-anime/DisplayDotsAnime";
import useOutsideClick from "../hooks/useOutsideClick";
import { sectionsList } from "../constants/sectionsList";
import ArrowIcon from "../components/icons/ArrowIcon";

import {
  Box,
  Description,
  Margin,
  Button as HomeButton,
  DropdownWrapper,
  Dropdown,
  DropdownItem,
  Divider,
} from "../styles/pages/DisplayDotsPage.styled";

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  useOutsideClick(dropdownRef, () => setIsOpen(false));

  return (
    <>
      <DisplayDotsCoordsProvider>
        <Box>
          <Description isIntroText>
            Hi, my name is Riviere, welcome to:
          </Description>
          <Margin>
            <DisplayDotsAnime
              text={"RIV.SYSTEMS"}
              includeRestartButton={true}
            />
          </Margin>
          <Description>
            I created this website to share
            <br />
            my works, projects and experiences.
          </Description>
          <DropdownWrapper ref={dropdownRef}>
            <HomeButton
              $isOpen={isOpen}
              onClick={() => setIsOpen((prev) => !prev)}
              style={{ display: "flex", alignItems: "center", gap: "0.5rem", justifyContent: "center" }}
            >
              EXPLORE
              <ArrowIcon bottom={isOpen} top={!isOpen} />
            </HomeButton>
            {isOpen && (
              <Dropdown>
                {sectionsList.map((section, index) => (
                  <React.Fragment key={section}>
                    <Link href={`/content/${section}`} passHref>
                      <DropdownItem onClick={() => setIsOpen(false)}>
                        {section.toUpperCase()}
                      </DropdownItem>
                    </Link>
                    {index < sectionsList.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </Dropdown>
            )}
          </DropdownWrapper>
        </Box>
      </DisplayDotsCoordsProvider>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      metaTagInputs: {
        page: "home",
        title: "RIV.SYSTEMS: Fashion, Web Development, Life Experiences",
        description:
          "Welcome to RIV.SYSTEMS, a personal portfolio and blog website featuring content on fashion, web development, design and more.",
        isHomePage: true,
      },
      isDisplayDotsPage: true,
    },
  };
};
