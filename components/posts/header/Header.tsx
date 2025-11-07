import { useEffect, useState } from "react";
import Link from "next/link";

import {
  Inline,
  Metadata,
  Li,
  Title,
  Excerpt,
  Margin,
  Box,
  TitleAndLink,
} from "./Header.styled";

import ArrowIcon from "../../icons/ArrowIcon";
import LinkButton from "../link-button/LinkButton";
import WorksGrid from "../works-grid/WorksGrid";

import { capitalizeFirstChar } from "../../../utils/common/capitalizeFirstChar";

import { IPostFrontMatter } from "../../../interfaces/IPostFrontMatter";
import { formatAndStylizeDate } from "../../../utils/common/formatAndStylizeDate";

const Header: React.FC<{
  frontmatter: IPostFrontMatter;
}> = ({ frontmatter }) => {
  const [isWorksPage, setIsWorksPage] = useState<boolean>();

  const {
    title,
    datePublished,
    excerpt,
    link,
    worksTeamSize,
    worksRoles,
    worksDuration,
    worksTools,
    category,
    section,
  } = frontmatter;

  const dateAsStr: string = formatAndStylizeDate(datePublished);

  const categoryCapitalized =
    category === "archive.pdf"
      ? category.replace(/^[^.]+/, (match) => match.toUpperCase())
      : capitalizeFirstChar(category);

  useEffect(() => setIsWorksPage(section === "portfolio"), [section]);

  return (
    <Box>
      <Metadata>
        <Inline>
          <Link href={`/content/${section}`}>
            {capitalizeFirstChar(section)}
          </Link>
        </Inline>
        <Inline>
          <ArrowIcon aria-label="Arrow Icon" />
        </Inline>
        <Inline>
          <Link href={`/content/${section}/${category}`}>
            {categoryCapitalized}
          </Link>
        </Inline>
        <Li>
          <p>{dateAsStr}</p>
        </Li>
      </Metadata>
      <TitleAndLink>
        <Title>{title}</Title>
        {link && <LinkButton url={link} title={title} />}
      </TitleAndLink>
      <Excerpt>{excerpt}</Excerpt>
      {isWorksPage && (
        <WorksGrid
          teamSize={worksTeamSize as number}
          roles={worksRoles as string[]}
          duration={worksDuration as string[]}
          tools={worksTools as string[]}
        />
      )}
      <Margin />
    </Box>
  );
};

export default Header;
