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
      {/* Masters in Computer Science - Illinois Institute of Technology */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0', color: 'text.secondary' }}
          align="right"
          variant="body2"
        >
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#ff4081' }}>
            Masters in Computer Science
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{ backgroundColor: '#ff4081' }}>
            <span className="material-symbols-outlined">school</span>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" sx={{ color: '#3f51b5' }}>
            Illinois Institute of Technology
          </Typography>
          <Typography>
            Chicago, Illinois <br />
            2023-Present <br />
            3.9/4 CGPA
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {/* Bachelor of Technology - Keshav Memorial Institute of Technology */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0', color: 'text.secondary' }}
          align="right"
          variant="body2"
        >
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#ff4081' }}>
            Bachelor of Technology
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{ backgroundColor: '#ff4081' }}>
            <span className="material-symbols-outlined">school</span>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" sx={{ color: '#3f51b5' }}>
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
