import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../navbar/Navbar.jsx";
import { Canvas } from "@react-three/fiber";
import Desk from "./Desk.jsx";
import { FaTimes } from 'react-icons/fa';
import { Float, PresentationControls, useGLTF } from "@react-three/drei";

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
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 74px;
  text-align: end;
  font-family: 'Permanent Marker', cursive;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #8e74eb;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  text-align: end;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Button = styled.button`
  background-color: #8e74eb;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
`;

const Intro = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: start;
  background-color: rgb(255, 255, 255);
  margin: auto;
`;

const Text = styled.div`
  padding: 30px;
  color: #000000;
  line-height: 3.5;
  z-index: 1;
`;

const Close = styled.button`
  background-color: #8e74eb;
  color: white;
  font-weight: 500;
  width: 100px;
  height: 100%;
  padding: 10px;
  border: none;
  margin-left: 20px;
  cursor: pointer;
  z-index: 1;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  flex: 2;
  position: relative;
  gap: 20px;
  padding: 30px;
  border-left: white solid 5px;
  border-bottom: white solid 5px;
  border-top: white solid 5px;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
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

  const guitare = useGLTF('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/guitar/model.gltf')


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
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Welcome to my portfolio</Subtitle>
          </WhatWeDo>
          <Desc>
            I enjoy creating websites, 3D experiences and music.
          </Desc>
          <Button onClick={handleButtonClick}>Learn More</Button>
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
              <Canvas camera={{ fov: 45, near: 0.1, far: 2000, position: [-3, 1.5, 15] }} style={{ position: "absolute", top: 100, left: 100 }}>
                <PresentationControls global rotation={[0.13, 0.1, 0]} polar={[0.2, 0.2]} azimuth={[- 1, 0.75]} config={{ mass: 2, tension: 400 }} snap={{ mass: 4, tension: 400 }}>
                  <Float rotationIntensity={1}>
                    <ambientLight intensity={1} />
                    <primitive object={guitare.scene} position={[-2.3, -0.8, 0]} rotation={[-1, 0, 0.5]} scale={[4.5, 4.5, 4.5]} />
                  </Float>
                </PresentationControls>
              </Canvas>
              <Close onClick={handleCloseClick}><FaTimes /></Close>
            </Intro>
          )}
        </Right>
      </Container>
    </Section>
  );
};

export default Home;
