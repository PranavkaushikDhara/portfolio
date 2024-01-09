import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import '../Drawer.css'
const Drawer = () => {
  return (
    <div>
      <a className="btn btn-success" data-bs-toggle="offcanvas" href="#leftnav" role="button" aria-controls="offcanvasExample">
        Socials
      </a>


      <div className="offcanvas offcanvas-start" id="leftnav" aria-labelledby="offcanvasExampleLabel">
        <Container>
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
        </Container>
      </div>
    </div>
  )
}

const Container = styled.div`
width: 100%;
/* background-color: #1b1c23; */
`;

const Elements = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin-top: 90%;
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

const Icon = styled.div`
margin-right: 10px;
max-height: 0px;
font-size: 23px;
`;
export default Drawer