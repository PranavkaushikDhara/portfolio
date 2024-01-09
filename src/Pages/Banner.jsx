import React from 'react'
import styled from 'styled-components'
import dp from '../assets/dp.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import mask from '../assets/paint.png'
import bannerbg from '../assets/bannerbg.jpeg'
const Banner = () => {
    const maskImage = mask;
    return (
        <Container>
            <Inner>
                <Image src={dp} alt="" />
                <BannerDetails>
                    <Name>
                        <h2>Pranav Kaushik Dhara</h2>
                    </Name>
                    <a href="https://www.linkedin.com/in/dharapranavkaushik/" target="_blank">
                    <SmallIcon>
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </SmallIcon>
                    </a>
                    <a href="https://www.linkedin.com/in/dharapranavkaushik/" target="_blank">
                    <Follow>
                        <Icon>
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </Icon>
                        Connect to Me on LinkedIn
                    </Follow>
                    </a>
                    
                </BannerDetails>
            </Inner>
        </Container>
    )
}


const Container = styled.div`
height:350px;
background-color: #1c1b23;
margin-right: 10px;
display: flex;
align-items: center;
width: 100%;
background-image: url(${bannerbg});
background-size: cover;
`;

const Image = styled.img`
border-radius: 50%;
/* background-color: white; */
width: 120px;
height: 120px;
object-fit: cover;
border: 3px solid whitesmoke;


`;

const Inner = styled.div`
  display  :flex ;
  padding:20px 40px;
  gap: 20px;
  width: 100%;
 
`;

const Name = styled.div`
display: flex;
align-items: center;
background: linear-gradient(to right,white,#fad621 ,black);
color: transparent;
background-size: 200%;
-webkit-background-clip: text;
background-clip: text;
animation: anime 3s infinite linear;

@keyframes anime {
    0%{
     background-position  :0% 75% ;
    }
    50%{
     background-position  :100% 30% ;
    }
    100%{
     background-position  :0% 70% ;
    }
}
/* h2{
    color: white;
    font-weight: bold;
} */
`;

const BannerDetails = styled.div`
display: flex;
justify-content:space-between;
gap: 30px;
width: 100%;
align-items: center;
a{
    cursor: pointer;
    text-decoration: none;
    color: inherit;
}
`;

const Follow = styled.div`
display: flex;
align-items: center;
gap: 10px;
background-color: #14131a;
height:50px;
border-radius: 10px;
padding: 0px 10px;
font-weight: bold;
font-size: 12px;

@media only screen and (max-width:794px){
    display: none;
}
`;

const Icon = styled.div`
border: 1px solid white;
padding: 10px 10px;
border-radius: 2px;
display: flex;

`;

const SmallIcon=styled.div`
background-color:#14131a ;
border: 1px solid white;
padding: 10px 10px;
border-radius: 2px;
display: flex;

@media only screen and (min-width:795px){
    display: none;
}
`;
export default Banner