import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-regular-svg-icons';
export default function WorkTimeline() {
  return (
    <Timeline >
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="white"
        >
          Graduate Teaching Assistant
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
          <span className="material-icons-outlined">
monetization_on
</span>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Illinois Institute of Technology
          </Typography>
          {/* <Typography> */}
            <ul>
          <li>Educated 150+ CS students,led recitations,designed labs,class activities,assignments, 
          graded coursework and increased student engagement by 40 % by introducing modern and robust methods for learning.</li>
          <li>Employed different technologies like GraphDB, EdgeDB, Jenkins,LSTM and TensorFlow.</li>
          </ul>
          {/* </Typography> */}
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="white"
        >
         Software Engineer
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
          <span className="material-icons-outlined">
monetization_on
</span>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          <br />
            NCR Corporation
            <br />
          </Typography>
          {/* <Typography> */}
            <ul>
          <li>Specialized in identifying and solving security vulnerabilities and bugs reported by more than 
          10 customers.<br></br></li>
          <li>Constructed more than 10 captivating ATM screens, elevating user experience for NDC and 
            Diebold platforms.<br></br></li>
<li>Coded 10+ Sign-on messages for Visa and Mastercard Interfaces ensuring compliance with strict 
  specifications.<br></br></li>
<li>Created a Java utility to encrypt 15 million encrypted transactions to prevent csrf and 
  trained 2 teams in Git.<br></br></li>
<li>Implemented a Slack Bot that quickly navigates and tracks Jira tickets.</li>
</ul>
          {/* </Typography> */}
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="white"
        >
         SWE Intern
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
          <span className="material-icons-outlined">
monetization_on
</span>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          <br />
          NCR Corporation
          </Typography>
          <Typography>
          Prepared to assist development team members,Wrote code for developing a slack bot
          </Typography>
        </TimelineContent>
      </TimelineItem>
      
    </Timeline>
  );
}