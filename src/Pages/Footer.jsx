import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Container>
      <h3>Ⓒ Developed by Pranav Kaushik Dhara</h3>
    </Container>
  )
}

const Container = styled.div`

display: flex;
background-color: #1b1c23;
color: white;
text-align: center;
justify-content: center;
align-items: center;
height: 200px important;
h3{
    font-size: 13px;
    display: flex;
    align-items: center;
padding: 20px;
}

`;
export default Footer