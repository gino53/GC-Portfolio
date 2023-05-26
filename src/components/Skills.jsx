import React, { useState } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { FaTimes } from 'react-icons/fa';
import { ContactShadows, Float, PresentationControls, Sparkles, useGLTF } from "@react-three/drei";
import Effects from "./Effects.jsx"
import Game from "./game/Game.jsx";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Home = () => {
  return (
    <Section id="skills">
      <Container>
        <Game />
      </Container>
    </Section>
  );
};

export default Home;
