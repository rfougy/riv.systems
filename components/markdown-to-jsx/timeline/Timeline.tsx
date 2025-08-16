import { IEvent } from "../../../interfaces/timeline/IEvent";
import {
  EventDate,
  EventTitle,
  TimelineContainer,
  TimelineDot,
  TimelineItem,
  TimelineLine,
} from "./Timeline.styled";

const Timeline: React.FC<{
  events: IEvent[];
}> = ({ events }) => {
  // Sort events by date in ascending order
  const sortedEvents = [...events].sort(
    (a, b) => a.date.getTime() - b.date.getTime()
  );

  function formatDate(date: Date) {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Timeline</h2>
      <TimelineContainer>
        <TimelineLine />
        {sortedEvents.map((event, index) => (
          <TimelineItem key={index}>
            <TimelineDot isMajor={event.isMajorEvent} />
            <EventTitle isMajor={event.isMajorEvent}>{event.title}</EventTitle>
            <EventDate>{formatDate(event.date)}</EventDate>
          </TimelineItem>
        ))}
      </TimelineContainer>
    </div>
  );
};

export default Timeline;
