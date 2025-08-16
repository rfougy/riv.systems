import React from "react";
import Timeline from "../components/markdown-to-jsx/timeline/Timeline";
import { IEvent } from "../interfaces/timeline/IEvent";

const TimelineDemo = () => {
  const sampleEvents: IEvent[] = [
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.",
      date: new Date("2023-01-15"),
      isMajorEvent: false,
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.",
      date: new Date("2023-03-22"),
      isMajorEvent: false,
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.",
      date: new Date("2023-06-10"),
      isMajorEvent: true,
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.",
      date: new Date("2023-09-05"),
      isMajorEvent: false,
    },
  ];

  return <Timeline events={sampleEvents} />;
};

export default TimelineDemo;
