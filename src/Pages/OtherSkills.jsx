import React from 'react';
import styled from 'styled-components';
import SkillsCard from '../components/SkillsCard';
import restimg from '../assets/restapi.webp';
import soapimg from '../assets/soapapi.webp';
import graphql from '../assets/graphql.png';
import neo4jimg from '../assets/neo4j.png';

const OtherSkills = () => {
  const otherSkills = [
    { key: 1, image: restimg, title: "Rest API" },
    { key: 2, image: soapimg, title: "Soap API" },
    { key: 3, image: graphql, title: "GraphQL" },
    { key: 4, image: neo4jimg, title: "Neo4J" },
  ];

  return (
    <Container>
      <h2>Other Skills</h2>
      <SkillsGrid>
        {otherSkills.map((skill) => (
          <SkillsCard key={skill.key} image={skill.image} title={skill.title} />
        ))}
      </SkillsGrid>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: #282c34; Dark background for contrast */
  padding: 2rem;
  border-radius: 10px; /* Rounded corners */
  h2 {
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 30px;
        color: #fff;
    }
`;


const SkillsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-auto-rows: 200px;
  grid-gap: 2rem;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  @media only screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default OtherSkills;
