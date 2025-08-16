import { IEvent } from "../../../interfaces/timeline/IEvent";
import {
  EventDate,
  EventTitle,
  TimelineContainer,
  TimelineDot,
  TimelineItem,
  TimelineLine,
  YearSeparator,
  YearTitle,
} from "./Timeline.styled";

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

  sortedEvents.forEach((event, i) => {
    const eventYear = event.date.getFullYear();

    // Add year separator if this is a new year
    if (currYear !== null && eventYear !== currYear) {
      timelineItems.push(
        <YearSeparator key={`year-${eventYear}`}>
          <YearTitle>{eventYear}</YearTitle>
        </YearSeparator>
      );
    }

    if (currYear === null) {
      timelineItems.push(
        <YearSeparator key={`year-${eventYear}`}>
          <YearTitle>{eventYear}</YearTitle>
        </YearSeparator>
      );
    }

    currYear = eventYear;

    timelineItems.push(
      <TimelineItem key={i}>
        <TimelineDot isMajor={event.isMajorEvent} />
        <EventDate>{formatDate(event.date)}</EventDate>
        <EventTitle isMajor={event.isMajorEvent}>{event.title}</EventTitle>
      </TimelineItem>
    );
  });

  return (
    <div className="max-w-4xl mx-auto p-6 flex flex-col gap-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Timeline</h2>
      <TimelineContainer>
        <TimelineLine />
        {timelineItems}
      </TimelineContainer>
    </div>
  );
};

export default Timeline;
