import React from 'react'
import styled from 'styled-components'
import SkillsCard from '../components/SkillsCard';
import restimg from '../assets/restapi.webp'
import soapimg from '../assets/soapapi.webp'
import graphql from '../assets/graphql.png'
import neo4jimg from '../assets/neo4j.png'
const OtherSkills = () => {
    const otherSkills=[
        {key:1,image:restimg,title:"Rest API"},
        {key:2,image:soapimg,title:"Soap API"},
        {key:3,image:graphql,title:"GraphQL"},
        {key:4,image:neo4jimg,title:"Neo4J"}
    ]
  return (
<Container>
    <Heading><h2>Others</h2></Heading>
    
    <SkillsGrid>
        {otherSkills.map((skill)=>(
             <SkillsCard key={skill.key} image={skill.image} title={skill.title}></SkillsCard>
        ))}
    </SkillsGrid>
    </Container>
  )
}
const Heading=styled.div`
padding:0 0 0 2.5rem ;
h2{
  font-size: 24px;
  color: white;
}
`;
const Container=styled.div`
display: flex;
flex-direction: column;

`;
const SkillsGrid=styled.div`
width: 100%;
display:grid;
grid-auto-rows: 200px;
@media only screen and (min-width: 768px){
    grid-template-columns: repeat(4,minmax(0,1fr));
}
@media only screen and (max-width: 767px){
    grid-template-columns: repeat(2,40%);
}
grid-gap: 2rem;
padding: 2.5rem;
justify-content: center;
`;
export default OtherSkills