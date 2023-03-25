import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";

import { sectionsList } from "../../../constants/sectionsList";

import { A, Container, MenuOption } from "./NavMenu.styled";

const NavMenu: React.FC<{
  activeOption: string | null | undefined;
  hoveredOption: string | null | undefined;
  setHoveredOption: (arg: string | null) => void;
}> = ({ activeOption, hoveredOption, setHoveredOption }) => {
  return (
    <Container
      onMouseLeave={(): void => setHoveredOption(activeOption as string | null)}
    >
      {sectionsList.map((section: string, index: number) => (
        <MenuOption
          key={index}
          onMouseOver={(): void => setHoveredOption(section)}
        >
          <Link href={`/content/${section}`} passHref>
            <A
              isActiveOption={section === activeOption}
              isHoveredOption={section === hoveredOption}
              hoverIsActive={typeof hoveredOption === "string"}
              userInHomePage={!activeOption}
            >
              {section === activeOption
                ? "./" + section.toUpperCase()
                : "/" + section.toUpperCase()}
            </A>
          </Link>
        </MenuOption>
      ))}
      <MenuOption onMouseOver={(): void => setHoveredOption("content")}>
        <Link href={`/content`} passHref>
          <A
            isActiveOption={"content" === activeOption}
            isHoveredOption={"content" === hoveredOption}
            hoverIsActive={typeof hoveredOption === "string"}
            userInHomePage={!activeOption}
          >
            {"content" === activeOption ? "./" + "ALL" : "/" + "ALL"}
          </A>
        </Link>
      </MenuOption>
    </Container>
  );
};

export default NavMenu;
