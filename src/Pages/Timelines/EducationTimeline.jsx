import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
export default function EducationTimeline() {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="white"
        >
          Masters in Computer Science
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
          <span className="material-symbols-outlined">
school
</span>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Illinois Institute of Technology
          </Typography>
          <Typography>
            Chicago, Illinois <br />
            2023-Present <br />
            3.83/4 CGPA 
           
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="white"
        >
         Bachelor of Technology
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
          <span className="material-symbols-outlined">
school
</span>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          <br />
            Keshav Memorial Institute of Technology
          </Typography>
          <Typography>
           Hyderabad, Telangana, India <br />
           2017-2021 <br />
           7.5 CGPA
          </Typography>
        </TimelineContent>
      </TimelineItem>
      
    </Timeline>
  );
}