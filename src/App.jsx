import React from "react";
import styled from "styled-components";
import "../style.css";
import Home from "./components/home/Home.jsx";
import Skills from "./components/skills/Skills.jsx";
import Certificates from "./components/certificates/Certificates.jsx";
import Contact from "./components/contact/Contact.jsx";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: hidden;
  overflow-x: hidden;
  scrollbar-width: none;
  color: white;
  background-color: #d3b6a5;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <Container id="container">
      <Home />
      <Skills />
      <Certificates />
      <Contact />
    </Container>
  );
}

export default App;
