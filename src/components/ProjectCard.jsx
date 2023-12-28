import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProjectCard = (props) => {
  return (
  
    <Container>
        
      <ImageContainer>
        <Image src={props.image} alt={props.title} />
      </ImageContainer>
      <Details>
        <Title>
          <h2>{props.title}</h2>
        </Title>
        <Desc>
          <h3>{props.desc}</h3>
        </Desc>
      </Details>
      <Outer>
      <a href={props.link} target='_blank'>See Project</a>
      </Outer>
    </Container>
    
  );
};

const Container = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow:10px 10px 30px #8d5858  
`;

const ImageContainer = styled.div`
  flex: 0.6;
  width: 100%;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; 
`;

const Details = styled.div`
  overflow: scroll;
  flex: 0.4;
  padding: 20px;
  width: 100%;
`;

const Title = styled.div`
  h2 {
    color: black;
    font-size: 20px;
    font-weight: bold;
  }
`;

const Desc = styled.div`
  h3 {
    color: black;
    font-size: 16px;
    font-weight: 400;
  }
`;

const Outer=styled.div`
text-decoration: none;
a{
  text-decoration: none;
}
`;
export default ProjectCard;
