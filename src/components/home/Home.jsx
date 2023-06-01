import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Float, PresentationControls, Sparkles, useGLTF } from "@react-three/drei";
import { FaTimes } from 'react-icons/fa';
import styled from "styled-components";
import Navbar from "../navbar/Navbar.jsx";
import Desk from "./Desk.jsx";
import Effects from "./Effects.jsx"

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  scroll-snap-align: center;

  @media only screen and (max-width: 1440px) {
    flex-direction: column-reverse;
  }
`;

const Left = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 1000px;

  @media only screen and (max-width: 1440px) {
    display: none;
  }
`;

const Right = styled.div`
  position: relative;
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  height: 70%;
  gap: 20px;
  padding: 30px;
  border: #f6e6db solid 5px;
  border-right: none;
  @media only screen and (max-width: 1440px) {
    flex: 1;
    align-items: center;
    border: none;
  }
`;

const Title = styled.h1`
  color: #f6e6db;
  font-size: 74px;
  font-family: cursive;
  text-align: end;

  @media only screen and (max-width: 1440px) {
    text-align: center;
  }
`;

const Subtitle = styled.h2`
  color: #683022;
`;

const Description = styled.p`
  text-align: end;
  color: #683022;
  font-size: 24px;
  @media only screen and (max-width: 1440px) {
    padding: 20px;
    text-align: center;
  }
`;

const OpenBtn = styled.button`
  display: flex;
  justify-content: center;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  background-color: #f6e6db;
  color: #683022;
  font-size: medium;
  font-family: cursive;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    background-color: #683022;
    color: #f6e6db;
  }
`;

const Intro = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  margin: auto;
  background-color: #f6e6db;

  @media (max-width: 1440px) {
    flex-direction: column;
    align-items: end;
  }
`;

const Text = styled.p`
  padding: 30px;
  line-height: 3;
  text-align: center;
  color: #683022;
  font-family: cursive;
  z-index: 1;

  @media (max-width: 1440px) {
    position: relative;
    top: 200px;
  }
`;

const DeskContainer = styled.div`
  display: none;

  @media (max-width: 1440px) {
    display: block;
    width: 100%;
    height: 200px;
  }
`;

const CloseBtn = styled.button`
  width: 100px;
  height: 30px;
  padding: 10px;
  border: none;
  background-color: #f6e6db;
  color: #683022;
  font-size: x-large;
  cursor: pointer;
  z-index: 1;

  @media (max-width: 1440px) {
    position: relative;
    top: -360px;
  }
`;

const Home = () => {
  const [isDivOpen, setIsDivOpen] = useState(false);

  const handleButtonClick = () => {
    setIsDivOpen(true);
  };

  const handleCloseClick = () => {
    setIsDivOpen(false);
  };

  return (
    <Section id="home">
      <Navbar />
      <Container>
        <Left>
          <Canvas flat dpr={[1, 2]} camera={{ fov: 45, near: 0.1, far: 2000, position: [-3, 1.5, 15] }}>
            <Desk />
          </Canvas>
        </Left>
        <Right>
          <Title>Good morning. Bonjour. Buongiorno. Привет.</Title>
          <Subtitle>Welcome, I am Gino</Subtitle>
          <Description>I enjoy creating websites, 3D experiences and music</Description>
          <OpenBtn onClick={handleButtonClick}>Learn More</OpenBtn>
          {isDivOpen && (
            <Intro>
              <Text>
                I am a passionate web developer, specialized in the creation of 3D sites.
                With a solid experience in the field, I have acquired expertise in web development and the design of interactive and immersive sites.
                I am constantly on the lookout for new technologies and innovative techniques to create unique and captivating online experiences.
                In addition to my web development skills, I am also a musician in my spare time.
                Music is another form of artistic expression that fascinates me.
                I love exploring different musical genres and creating original compositions.
                This musical creativity is reflected in my approach to web development, where I always seek to bring an artistic touch to my projects.
              </Text>
              <DeskContainer>
                <Canvas flat dpr={[1, 2]} camera={{ fov: 45, near: 0.1, far: 2000, position: [-3, 1.5, 15] }} style={{ width: '100%', height: '1024px' }}>
                  <Desk />
                </Canvas>
              </DeskContainer>
              <CloseBtn onClick={handleCloseClick}><FaTimes /></CloseBtn>
            </Intro>
          )}
        </Right>
      </Container>
    </Section>
  );
};

export default Home;
