// src/components/Footer.js
import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #0f0f0f;
  color: #fff;
  text-align: center;
  padding: 1rem 0;
  position: relative;
`;

const Copyright = styled.p`
  font-size: 0.9rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;

  a {
    margin: 0 1rem;
    color: white;
    font-size: 1.5rem;
  }
`;

export default function Footer() {
  return (
    <FooterContainer id="footer">
      <SocialLinks>
        <a
          href="https://github.com/Soumya-Ranjan-Das2519"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/soumya-ranjan-das-394701296/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://x.com/sd7557920" target="_blank" rel="noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://www.instagram.com/soumya_ranjan_das2519/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </SocialLinks>
      <Copyright>© 2024 Soumya Ranjan. All Rights Reserved.</Copyright>
    </FooterContainer>
  );
}
