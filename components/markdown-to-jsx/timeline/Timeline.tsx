import { IEvent } from "../../../interfaces/timeline/IEvent";
import {
  CaseStudyButton,
  Summary,
  Date,
  Title,
  Box,
  Dot,
  Event,
  Line,
  YearSeparator,
  Year,
} from "./Timeline.styled";
import externalLinkIcon from "../../../public/assets/icons/external-link-icon.svg";
import Image from "next/image";

const Timeline: React.FC<{
  events: IEvent[];
}> = ({ events }) => {
  const sortedEvents = [...events].sort(
    (a, b) => a.date.getTime() - b.date.getTime()
  );

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

    // Add year separator if this is a new year
    if (currYear !== null && eventYear !== currYear) {
      timelineItems.push(
        <YearSeparator key={`year-${eventYear}`}>
          <Year>{eventYear}</Year>
        </YearSeparator>
      );
    }

    if (currYear === null) {
      timelineItems.push(
        <YearSeparator key={`year-${eventYear}`}>
          <Year>{eventYear}</Year>
        </YearSeparator>
      );
    }

    currYear = eventYear;

    timelineItems.push(
      <Event key={i}>
        <Dot isCaseStudy={caseStudy} />
        <Date>{formatDate(date)}</Date>
        <Summary>
          {link ? (
            <a href={link} target="_blank" rel="noreferrer">
              <Title isCaseStudy={caseStudy}>
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
            </a>
          ) : (
            <Title isCaseStudy={caseStudy}>{title}</Title>
          )}
          {caseStudy && <CaseStudyButton>Learn More</CaseStudyButton>}
        </Summary>
      </Event>
    );
  });

  return (
    <div className="max-w-4xl mx-auto p-6 flex flex-col gap-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Timeline</h2>
      <Box>
        <Line />
        {timelineItems}
      </Box>
    </div>
  );
};

export default Timeline;
