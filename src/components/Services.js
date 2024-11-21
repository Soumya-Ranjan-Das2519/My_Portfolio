// src/components/Services.js
import React from "react";
import styled from "styled-components";

const ServiceSection = styled.section`
  padding: 4rem 2rem;
  background: #f5f5f5;
  text-align: center;
`;

const Service = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ServicesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default function Services() {
  return (
    <ServiceSection id="services">
      <h2>Services</h2>
      <ServicesContainer>
        <Service>
          <h3>Web Development</h3>
          <p>
            Creating responsive and dynamic websites using modern technologies.
          </p>
        </Service>
        <Service>
          <h3>Responsive Design</h3>
          <p>Building mobile-friendly layouts that adapt to any screen size.</p>
        </Service>
        <Service>
          <h3>Backend Development</h3>
          <p>
            Developing efficient and scalable backend systems using Django and
            more.
          </p>
        </Service>
      </ServicesContainer>
    </ServiceSection>
  );
}
