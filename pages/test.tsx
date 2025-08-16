import React from "react";
import Timeline from "../components/markdown-to-jsx/timeline/Timeline";
import { IEvent } from "../interfaces/timeline/IEvent";

const TimelineDemo = () => {
  const sampleEvents: IEvent[] = [
    {
      date: new Date("2023-01-15"),
      title:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.",
      link: "https://www.instagram.com/archivepdf/",
      isMajorEvent: false,
    },
    {
      date: new Date("2023-03-22"),
      title: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      link: "https://www.instagram.com/archivepdf/",
      isMajorEvent: false,
    },
    {
      date: new Date("2023-06-10"),
      title:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.",
      link: "https://www.instagram.com/archivepdf/",
      isMajorEvent: true,
      caseStudy:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.",
    },
    {
      date: new Date("2024-09-05"),
      title:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.",
      isMajorEvent: false,
    },
    {
      date: new Date("2024-10-05"),
      title:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.",
      link: "https://www.instagram.com/archivepdf/",
      isMajorEvent: false,
    },
  ];

  return <Timeline events={sampleEvents} />;
};

export default TimelineDemo;
