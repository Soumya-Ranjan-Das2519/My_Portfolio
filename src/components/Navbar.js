// src/components/Navbar.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png"; // Adjust your logo path accordingly
import Modal from "./Modal"; // Import the Modal component

const Nav = styled.nav`
  background-color: ${({ isScrolled }) =>
    isScrolled
      ? "#0f0f0f"
      : "transparent"}; // Change background based on scroll
  padding: 1rem 2rem; // Add padding to the navbar
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: background-color 0.3s ease; // Smooth transition for the background
  box-shadow: ${({ isScrolled }) =>
    isScrolled
      ? "0 4px 6px rgba(0, 0, 0, 0.1)"
      : "none"}; // Shadow effect when scrolled
`;

const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
`;

const LogoImage = styled.img`
  height: 40px;
  margin-right: 0.5rem;
  cursor: pointer; /* Show pointer cursor on hover */
`;

const Menu = styled.ul`
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin-right: 50px;

  @media (max-width: 500px) {
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    position: absolute;
    top: 60px;
    right: 20px;
    background-color: #333;
    padding: 1rem;
    border-radius: 8px;
    width: 60%;
    text-align: center;
  }
`;

const MenuItem = styled.li`
  a {
    text-decoration: none;
    color: white;
    font-size: 1.1rem;
    transition: color 0.3s ease;

    &:hover {
      color: #4caf50;
    }
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 500px) {
    display: block;
  }

  i {
    font-size: 1.5rem;
    color: white;
  }
`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [isScrolled, setIsScrolled] = useState(false); // Scroll state

  const handleScroll = () => {
    const offset = window.scrollY;
    setIsScrolled(offset > 50); // Change this value for when the navbar should become solid
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Nav isScrolled={isScrolled}>
        <LogoContainer onClick={toggleModal}>
          <LogoImage src={logo} alt="Logo" />
          <span>SRD</span>
        </LogoContainer>
q
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </Hamburger>

        <Menu isOpen={isOpen}>
          <MenuItem>
            <a href="#home">Home</a>
          </MenuItem>
          <MenuItem>
            <a href="#about">About</a>
          </MenuItem>
          <MenuItem>
            <a href="#services">Services</a>
          </MenuItem>
          <MenuItem>
            <a href="#projects">Projects</a>
          </MenuItem>
          <MenuItem>
            <a href="#contact">Contact</a>
          </MenuItem>
        </Menu>
      </Nav>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={toggleModal} imageSrc={logo} />
    </>
  );
}
