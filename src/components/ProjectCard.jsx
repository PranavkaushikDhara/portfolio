import React from 'react';
import styled from 'styled-components';

const ProjectCard = (props) => {
  return (
    <Link href={props.link}>
      <Container>
        <ImageContainer>
          <Image src={props.image} alt={props.title} />
        </ImageContainer>
        <Details>
          <Title>
            <h5>{props.title}</h5>
          </Title>
          <Desc>
            <h3>{props.desc}</h3>
          </Desc>
        </Details>
      </Container>
    </Link>
  );
};

const Link = styled.a`
  text-decoration: none;
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  }
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
  padding: 20px;
  width: 100%;
  flex: 0.4;
  background-color: #f9f9f9; 
  border-radius: 0 0 10px 10px;
`;

const Title = styled.div`
  h2 {
    color: #333; 
    font-size: 18px;
    font-weight: 700;
    margin: 0;
  }
`;

const Desc = styled.div`
  h3 {
    color: #555; 
    font-size: 14px;
    font-weight: 500;
    margin: 5px 0 0;
  }
`;

export default ProjectCard;
