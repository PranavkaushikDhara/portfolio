import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-regular-svg-icons';

export default function WorkTimeline() {
  return (
    <Timeline position="alternate">
      {/* Graduate Developer - Illinois Institute of Technology */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0', color: 'text.secondary' }}
          align="right"
          variant="body2"
        >
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#ff4081' }}>
            Graduate Developer
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{ backgroundColor: '#ff4081' }}>
            <FontAwesomeIcon icon={faBuilding} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" sx={{ color: '#3f51b5' }}>
            Illinois Institute of Technology
          </Typography>
          <ul>
            <li>Managed and developed the college website using Next.js and React, ensuring modern user interfaces and responsive design.</li>
            <li>Assisted in the migration of the college’s legacy website to a new Next.js platform, improving performance, scalability, and user experience.</li>
            <li>Developed reusable React components and integrated with APIs to streamline front-end development and enhance dynamic content delivery.</li>
            <li>Implemented SEO best practices and optimized website performance, resulting in faster load times and better search engine rankings.</li>
          </ul>
        </TimelineContent>
      </TimelineItem>


      <TimelineItem>
        <TimelineOppositeContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" sx={{ color: '#3f51b5' }}>
            NCR Corporation
          </Typography>
          <ul>
            <li>Achieved recognition with NCR Early Career Performance and Duct Tape Awards.</li>
            <li>Developed and deployed microservices across both frontend and backend using React, Spring Boot, Hibernate, MySQL, and AWS.</li>
            <li>Resolved 80% of software backlog defects and improved code quality by developing internal tools.</li>
            <li>Enhanced security and compliance of ATMs, POS, and Payment Switch systems by enforcing PCI standards.</li>
            <li>Led application testing using JUnit and Mockito, achieving 99% test coverage.</li>
            <li>Implemented CI/CD pipelines using Jenkins, reducing release cycle time by 15%.</li>
          </ul>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{ backgroundColor: '#ff4081' }}>
            <FontAwesomeIcon icon={faBuilding} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent
          sx={{ m: 'auto 0', color: 'text.secondary' }}
          align="right"
          variant="body2"
        >
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#ff4081' }}>
            Software Engineer
          </Typography>
        </TimelineContent>
      </TimelineItem>

    </Timeline>
  );
}
