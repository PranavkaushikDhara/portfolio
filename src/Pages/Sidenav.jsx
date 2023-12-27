import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-regular-svg-icons';
const Sidenav = () => {
    return (
        <Container className='navbar-expand-lg'>
            <NavElements>
                <Elements>
                    <div>
                        <Icon>
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </Icon>
                        <a href="https://www.linkedin.com/in/dharapranavkaushik/" target="_blank">LinkedIn</a>
                    </div>
                    <div>
                        <Icon>
                            <FontAwesomeIcon icon={faGithub} />
                        </Icon>
                        <a href="https://github.com/PranavkaushikDhara" target="_blank">GitHub</a>
                    </div>
                    <div>
                        <Icon>
                            <FontAwesomeIcon icon={faInstagram} />
                        </Icon>
                        <a href="https://www.instagram.com/pranavkaushikk7/" target="_blank">Instagram</a>
                    </div>
                    <div>
                        <Icon>
                            <FontAwesomeIcon icon={faFacebook} />
                        </Icon>
                        <a href="https://www.facebook.com/profile.php?id=100008100047656" target="_blank">Facebook</a>
                    </div>
                    <div>
                        <Icon>
                            <FontAwesomeIcon icon={faFile} />
                        </Icon>
                        <a href="https://drive.google.com/file/d/1O7FMMIzevIfIs4QViEJ_slQO-OpbKP3q/view?usp=sharing" target="_blank">Resume</a>
                    </div>
                </Elements>
            </NavElements>
        </Container>
    )
}

const Container = styled.div`

`;

const Elements = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin-top: 160px;
div:hover{
        transform: scale(1.1);        
    }

    div{
        margin-bottom: 30px;
        display: flex;
        justify-content: center;
    }
    a{
        text-decoration: none;
        color: inherit;
        
    }
`;
const NavElements = styled.div`
display: flex;
flex-direction: column;
flex:1;
background-color: #1c1b23;
`;

const Buttons = styled.div`
display: flex;
gap: 6px;
`;
const Rounded = styled.div`
border-radius: 50%;
height:16px;
width: 16px;
background-color: #2BD576;
`;
const Icon = styled.div`
margin-right: 10px;
max-height: 0px;
font-size: 23px;
`;
export default Sidenav