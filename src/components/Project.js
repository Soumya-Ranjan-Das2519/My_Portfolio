// src/components/Projects.js
import React from "react";
import styled from "styled-components";

const ProjectsSection = styled.section`
  padding: 4rem 2rem;
`;

const ProjectsContainer = styled.div`
  display: flex;

  gap: 2rem;
  justify-content: space-between;

  @media (max-width: 748px) {
    flex-direction: column;
  }
`;

const Project = styled.div`
  background-color: white;
  padding: 1.2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 30%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default function Projects() {
  return (
    <ProjectsSection id="projects">
      <h2>Projects</h2>
      <ProjectsContainer>
        <Project>
          <h3>Portfolio Website</h3>
          <p>
            A modern portfolio website built using React and styled-components.
          </p>
        </Project>
        <Project>
          <h3>E-commerce Platform</h3>
          <p>
            An online shopping platform with user authentication and payment
            integration.
          </p>
        </Project>
        <Project>
          <h3>Chat Application</h3>
          <p>A real-time chat application built using WebSockets and React.</p>
        </Project>
      </ProjectsContainer>
    </ProjectsSection>
  );
}
