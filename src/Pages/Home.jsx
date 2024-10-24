import React from 'react';
import styled from 'styled-components';
import Sidenav from './Sidenav';
import Banner from './Banner';
import Header from './Header';
import Projects from './Projects';
import Skills from './Skills';
import CustomTabPanel from './CustomTabPanel';
import Education from './Education';
import Footer from './Footer';
import OtherSkills from './OtherSkills';
import Cerifications from './Cerifications';

const Home = () => {
  return (
    <Container>
      <Sidebar>
        <Sidenav />
      </Sidebar>
      <Mainmatter>
        <Header></Header>
        <Banner />
        <Skills></Skills>
        <Cerifications></Cerifications>
        <Projects></Projects>
        <OtherSkills></OtherSkills>
        <Education></Education>
        <CustomTabPanel></CustomTabPanel>
        <Footer />
      </Mainmatter>
    </Container>
  );
};

const Container = styled.div`
  background-color: #14131a;
  color: #8b8a91;
  margin: 0;
  height: 100vh;
  display: flex;
  width: 100%;
`;



const Sidebar = styled.div`
  margin:10px;
  background-color: #1c1b23;
  border-radius: 15px;
  width: 280px;
  align-items: center;
  padding: 1.25rem;
  color: #8b8a91;
  overflow: scroll;

  @media only screen and (max-width:1023px){
    display: none;
  }
`;

const Mainmatter = styled.div`
  width: 100%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default Home;
