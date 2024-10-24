import React from 'react'
import styled from 'styled-components'

const Certifications = () => {
    return (
        <Container>
            <h2>Certifications</h2>
            <CertificationList>
                <StyledLink href="https://www.credly.com/badges/b7a0fdbf-9fb2-4964-a59d-ee7700bdb57d">
                    <CertificationCard>
                        <h3>AWS Solutions Architect Associate</h3>
                        <p>Issued by Amazon Web Services</p>
                        <Date>Issued: October 2024</Date>
                    </CertificationCard>
                </StyledLink>
                <StyledLink href="https://www.credly.com/badges/db6738ac-4dbf-41e6-932b-9e0cbeffe83d">
                    <CertificationCard>
                        <h3>AWS Certfied Developer Associate</h3>
                        <p>Issued by Amazon Web Services</p>
                        <Date>Issued: October 2024</Date>
                    </CertificationCard>
                </StyledLink>
                <StyledLink href="https://www.credly.com/badges/db6738ac-4dbf-41e6-932b-9e0cbeffe83d">
                    <CertificationCard>
                        <h3>AWS Certified Cloud Practitioner</h3>
                        <p>Issued by Amazon Web Services</p>
                        <Date>Issued: February 2024</Date>
                    </CertificationCard>
                </StyledLink>
            </CertificationList>
        </Container>
    )
}

const Container = styled.div`
    padding: 50px 0;
    h2 {
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 30px;
        color: #fff;
    }
`;

const CertificationList = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    text-decoration: none;
`;

const CertificationCard = styled.div`
text-decoration: none;
    background-color: #1c1b23;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    width: 300px;
    padding: 20px;
    margin: 20px;
    text-align: center;
    transition: transform 0.3s ease-in-out;  /* Transition for smooth effect */
    
    &:hover {
        transform: scale(1.1);  /* Scale up the card on hover */
    }

    h3 {
        font-size: 1.5rem;
        color: #007acc;
        margin-bottom: 10px;
    }

    p {
        font-size: 1rem;
        color: #555;
    }
`;

const Date = styled.div`
    display: block;
    margin-top: 10px;
    font-size: 0.9rem;
    color: #777;
`;

const StyledLink = styled.a`
    text-decoration: none; /* Remove text decoration */
`;

export default Certifications;
