import React, { useEffect } from "react";
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
  scrollbar-width: none;
  color: white;
  background-color: #d3b6a5;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  useEffect(() => {
    const bloqueScroll = (event) => {
      event.preventDefault();
    };

    const scroll = (enable) => {
      const container = document.getElementById("container");
      if (enable) {
        container.addEventListener("wheel", bloqueScroll, { passive: false });
      } else {
        container.removeEventListener("wheel", bloqueScroll);
      }
    };

    scroll(true);

    return () => {
      scroll(false);
    };
  }, []);

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
