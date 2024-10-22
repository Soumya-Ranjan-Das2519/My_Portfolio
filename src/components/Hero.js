// src/components/Hero.js
import React from "react";
import styled from "styled-components";
import backgroundImage from "../assets/bg.jpg";

const HeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Full viewport height */
  background-image: url(${backgroundImage}); /* Set your background image */
  background-size: cover; /* Cover the entire section */
  background-position: center; /* Center the background image */
  color: white; /* Text color for better contrast */
  position: relative; /* Positioning for pseudo-elements if needed */

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(
      0,
      0,
      0,
      0.5
    ); /* Dark overlay for better text readability */
    z-index: 1; /* Send overlay behind text */
  }

  @media (max-width: 768px) {
    height: 80vh;
  }
`;

const HeroContent = styled.div`
  text-align: center;
  color: black;
  padding: 0 2rem;
  z-index: 2; /* Bring text above the overlay */
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  color: black;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroButton = styled.button`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.8rem 2rem;
  background: #1db954;
  color: white;
  border: none; /* Remove border for button */
  border-radius: 50px;
  font-size: 1rem;
  cursor: pointer; /* Change cursor to pointer on hover */
  transition: background 0.3s ease;

  &:hover {
    background: #17b74d; /* Darker green on hover */
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.5rem;
  }
`;

export default function Hero() {
  const handleClick = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling to Contact section
    }
  };

  return (
    <HeroSection id="home">
      <HeroContent>
        <HeroTitle>Hi, I'm Soumya Ranjan</HeroTitle>
        <p className="p">Building Modern Web Solutions</p>
        <HeroButton onClick={handleClick}>Hire Me</HeroButton>
      </HeroContent>
    </HeroSection>
  );
}
