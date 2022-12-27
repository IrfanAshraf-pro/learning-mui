import {
  Timeline,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
} from "@mui/lab";
import React from "react";

const MUITimeline = () => {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent color="seagreen">
          09:00
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary" variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>City A</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="seagreen">
          12:00
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary" variant="filled" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>City B</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="seagreen">
          05:00
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary" variant="outlined" />
        </TimelineSeparator>
        <TimelineContent>City C</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default MUITimeline;
