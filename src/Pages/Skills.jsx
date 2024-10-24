import React from 'react'
import TechCard from '../components/TechCard';
import styled from 'styled-components';

const Skills = () => {
    const skills=[
        {
            skill:"Frontend",
            key:1,
            techs:["HTML","React","Angular","next.Js","Javascript","Bootstrap","Tailwind"]
        },
        {
            skill:"Backend",
            key:2,
            techs:["Java","Spring","SpringBoot","NodeJs","Express Js"]
        },
        {
            skill:"Database",
            key:3,
            techs:["MySQL","Oracle","Postgres","MongoDB","Milvus","EdgeDB"]
        },
        {
            skill:"Devops",
            key:4,
            techs:["Jenkins","Docker","Kubernetes","GIT"]
        }
    ]
  return (
    <Container>

        <h2>Skills</h2>

        <SkillCards>
        {skills.map(skill=>(
            <TechCard key={skill.key} title={skill.skill} elements={skill.techs}></TechCard>
        ))}
        </SkillCards>
    </Container>
  )
}

const Container=styled.div`
width: 100%;
margin-top: 20px;
h2{
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 30px;
        color: #fff;
    }

`;
const SkillCards=styled.div`
display: grid;
width: 100%;
justify-content: center;
grid-auto-rows: fit-content;
padding: 2.5rem;
@media only screen and (min-width:1024px){
    grid-template-columns: repeat(2,45%);
}
@media only screen and (max-width:1023px){
    grid-template-columns: repeat(2,45%);
}
@media only screen and (max-width:767px){
    grid-template-columns: repeat(1,100%);
}
grid-gap: 20px;
`;
export default Skills