import React from 'react'
import styled from 'styled-components'
import Drawer from '../components/Drawer'
const Header = () => {

    const openGmail=()=>{
            var emailAddress = 'pranavkaushik300@gmail.com';
            var composeUrl = 'https://mail.google.com/mail/u/0/?view=cm&fs=1&to=' + encodeURIComponent(emailAddress);
            window.open(composeUrl, '_blank');
    }
    return (
        <Container>
            <ContactMe>
                <button className='btn btn-success' onClick={openGmail}>Contact Me!</button>
            </ContactMe>
            <SideOpen>
                <Drawer></Drawer>
            </SideOpen>
        </Container>
    )
}

const Container = styled.div`
display: flex;
border-radius: 5px;
width: 100%;
height: fit-content;
justify-content: flex-end;
padding: 10px;
gap: 6px;

`;

const SideOpen = styled.div`
@media only screen and (min-width: 1024px){
    display: none;
}
`

const ContactMe = styled.div`
`;
export default Header