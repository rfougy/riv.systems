import { useEffect, useState } from "react";
import Link from "next/link";

import {
  Inline,
  Metadata,
  Li,
  Title,
  Excerpt,
  Margin,
  Container,
  TitleAndLink,
} from "./Header.styled";

import ArrowIcon from "../../icons/ArrowIcon";
import LinkButton from "../link-button/LinkButton";
import WorksGrid from "../works-grid/WorksGrid";

import { capitalizeFirstChar, dateToStr } from "../../../utils";

import { IPostFrontMatter } from "../../../interfaces/IPostFrontMatter";

const Header: React.FC<{
  slug: string;
  frontmatter: IPostFrontMatter;
}> = ({ slug, frontmatter }) => {
  const [isWorksPage, setIsWorksPage] = useState<boolean>();

  const section: string = slug[0];
  const category: string = slug[1];

  const {
    title,
    datePublished,
    excerpt,
    link,
    worksTeamSize,
    worksRoles,
    worksDuration,
    worksTools,
  } = frontmatter;

  const dateAsStr: string = dateToStr(datePublished);

  useEffect(() => setIsWorksPage(section === "works"), [section]);

  return (
    <Container>
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
            {capitalizeFirstChar(category)}
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
    </Container>
  );
};

export default Header;
