import React from 'react'
import styled from 'styled-components'
import ProjectCard from '../components/ProjectCard';
// import amazonimg from '../assets/amazon-clone.webp'
// import kerasimg from '../assets/Keras.jpeg'
import gitimg from '../assets/GitHub.jpeg'
import milvusimg from '../assets/Milvus.jpeg'
import groceryimg from '../assets/grocery.jpeg'
import docuGenieImg from '../assets/DocuGenie.png'
const Projects = () => {

  const projects=[
    {key:1,image:docuGenieImg,title:"DocuGenie",
    desc:"OpenAI, Dall-E, Python, Flask",
    link:"https://github.com/PranavkaushikDhara/DocuGeniee"},
    {key:2,image:groceryimg,title:"GroceryHub",desc:"NodeJs, Express, Mongoose, React,Tailwind CSS",link:"https://github.com/PranavkaushikDhara/GroceryHub"},
    {key:3,image:gitimg,title:"BugHub",desc:"OpenAI, Python,GitHub API,Jupyter,StackExchange API",link:"https://github.com/PranavkaushikDhara/Bug-Hub-Data-Pipeline-for-Stack-Overflow-And-GitHub"},
    {key:4,image:milvusimg,title:"Vector Similarity",desc:"React,Flask,Milvus,OpenAI",link:"https://github.com/PranavkaushikDhara/MilvusSearch"},
  ]
  return (
    <Container>
      <h2>Projects</h2>
    <ProjectsGrid>
      {
        projects.map((project)=>(
          // <a href={project.link}>
          <ProjectCard key={project.key} link={project.link} image={project.image} title={project.title} desc={project.desc}></ProjectCard>
          // </a>
        ))
      }
    </ProjectsGrid>
    </Container>
  )
}


const Container=styled.div`
width: 100%;
margin-top: 20px;
color: white;
/* text-align: center; */
h2{
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 30px;
        color: #fff;
    }
`;

const ProjectsGrid=styled.div`
width: 100%;
display: grid;
justify-content: center;
grid-auto-rows: 300px;
padding: 2.5rem;

@media only screen and (min-width:1024px){
  grid-template-columns: repeat(4,minmax(0,1fr));
}
@media only screen and (min-width:768px) and (max-width:1024px){
    grid-template-columns: repeat(3,minmax(0,1fr));
}

@media only screen and (max-width:767px){
  grid-template-columns: repeat(2,minmax(0,1fr));
}

@media only screen and (max-width:576px) {
    grid-template-columns: repeat(1,minmax(0,1fr));
    grid-gap: 1.25rem;
}
grid-gap: 20px;
`;

export default Projects