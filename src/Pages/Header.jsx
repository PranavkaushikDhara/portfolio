import React from 'react'
import styled from 'styled-components'
import Drawer from '../components/Drawer'
const Header = () => {
    return (
        <Container>
            <ContactMe>
                <button className='btn btn-success'>Contact Me!</button>
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

const ContactMe = styled.div``;
export default Header