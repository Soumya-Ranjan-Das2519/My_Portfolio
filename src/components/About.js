// src/components/About.js
import React from "react";
import styled from "styled-components";
import profileImage from "../assets/soumya.jpg"; // Replace with your image path

const AboutSection = styled.section`
  padding: 4rem 2rem;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`;

const Title = styled.h2`
  margin-bottom: 1.5rem;
  color: #333;
  font-size: 2rem;
  text-align: center;
`;

const AboutContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  max-width: 900px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const ImageFrame = styled.div`
  position: relative;
  width: 300px;
  height: 450px;
  border-radius: 50%; /* Makes it circular */
  background: linear-gradient(135deg, #4caf50, #2196f3);
  padding: 5px; /* Space for the gradient border */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 300px;
    height: 450px;
  }

  @media (max-width: 500px) {
    width: 300px;
    height: 450px;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%; /* Ensures the image is circular */
`;

const TextContent = styled.div`
  flex: 1;
  color: #555;
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: center;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export default function About() {
  return (
    <AboutSection id="about">
      <Title>About Me</Title>
      <AboutContent>
        <TextContent>
          <p>
            Hello! I am a passionate web developer with experience in building
            dynamic and responsive websites. I enjoy creating visually appealing
            designs and delivering great user experiences.
          </p>
          <p>
            I specialize in front-end technologies like React, JavaScript, and
            CSS. In my free time, I love exploring new frameworks and improving
            my coding skills.
          </p>
        </TextContent>
        <ImageFrame>
          <ProfileImage src={profileImage} alt="Profile" />
        </ImageFrame>
      </AboutContent>
    </AboutSection>
  );
}
