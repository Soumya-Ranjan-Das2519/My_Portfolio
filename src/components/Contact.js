// src/components/Contact.js
import React from "react";
import styled from "styled-components";

const ContactSection = styled.section`
  padding: 4rem 2rem;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const ContactForm = styled.form`
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #555;
`;

const Input = styled.input`
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;

  &:focus {
    outline: none;
    border-color: #4caf50;
    box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
  }
`;

const Textarea = styled.textarea`
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  resize: none;
  min-height: 120px;

  &:focus {
    outline: none;
    border-color: #4caf50;
    box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
  }
`;

const SubmitButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 0.8rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

export default function Contact() {
  return (
    <ContactSection id="contact">
      <ContactForm>
        <FormTitle>Contact Us</FormTitle>

        <FormGroup>
          <Label htmlFor="name">Your Name</Label>
          <Input type="text" id="name" placeholder="Enter your name" required />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">Your Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" placeholder="Enter your message" required />
        </FormGroup>

        <SubmitButton type="submit">Send Message</SubmitButton>
      </ContactForm>
    </ContactSection>
  );
}
