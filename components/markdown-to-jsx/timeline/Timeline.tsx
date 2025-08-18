import { IEvent } from "../../../interfaces/timeline/IEvent";
import {
  Summary,
  DateText,
  Title,
  Box,
  Dot,
  Event,
  Line,
  YearSeparator,
  Year,
  Hyperlink,
} from "./Timeline.styled";
import externalLinkIcon from "../../../public/assets/icons/external-link-icon.svg";
import Image from "next/image";
import { useMemo } from "react";

const Timeline: React.FC<{
  events: string;
}> = ({ events }) => {
  const parsedEvents: IEvent[] = useMemo(() => {
    return JSON.parse(events).map((event: any) => ({
      ...event,
      date: new Date(event.date),
    }));
  }, [events]);

  const sortedEvents = useMemo(() => {
    return parsedEvents.sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
  }, [parsedEvents]);

  function formatDate(date: Date) {
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${month}.${day}`;
  }

  // Group events by year and create timeline items with year separators
  const timelineItems: React.ReactElement[] = [];
  let currYear: number | null = null;

  sortedEvents.forEach(({ date, title, link, caseStudy }, i) => {
    const eventYear = date.getFullYear();
    const isNewYear = currYear !== null && eventYear !== currYear;

    if (isNewYear)
      timelineItems.push(
        <YearSeparator key={`year-${eventYear}`}>
          <Year>{eventYear}</Year>
        </YearSeparator>
      );

    if (currYear === null)
      timelineItems.push(
        <YearSeparator key={`year-${eventYear}`}>
          <Year>{eventYear}</Year>
        </YearSeparator>
      );

    currYear = eventYear;

    timelineItems.push(
      <Event key={i}>
        <Dot isCaseStudy={caseStudy} />
        <DateText>{formatDate(date)}</DateText>
        <Summary>
          {link ? (
            <Hyperlink
              href={link}
              target="_blank"
              rel="noreferrer"
              className="w-fit"
            >
              <Title isCaseStudy={caseStudy} link={link}>
                {title}{" "}
                <Image
                  src={externalLinkIcon}
                  alt={"external link icon"}
                  height={12}
                  width={12}
                  sizes="100vw"
                  className="inline ml-1 align-baseline"
                />
              </Title>
            </Hyperlink>
          ) : (
            <Title isCaseStudy={caseStudy}>{title}</Title>
          )}
          {/* {caseStudy && <CaseStudyButton>Learn More</CaseStudyButton>} */}
        </Summary>
      </Event>
    );
  });

  return (
    <Box>
      <Line />
      {timelineItems}
    </Box>
  );
};

export default Timeline;
