import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Float, PresentationControls, Sparkles, useGLTF } from "@react-three/drei";
import { FaTimes } from 'react-icons/fa';
import styled from "styled-components";
import Navbar from "../navbar/Navbar.jsx";
import Desk from "./Desk.jsx";
import Effects from "../Effects.jsx"

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  scroll-snap-align: center;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  scroll-snap-align: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
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
  border: whitesmoke solid 5px;
  border-right: none;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Title = styled.h1`
  color: #f6e6db;
  font-size: 74px;
  font-family: 'Permanent Marker', cursive;
  text-align: end;

  @media only screen and (max-width: 768px) {
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
  @media only screen and (max-width: 768px) {
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
  color: #333;
  font-size: medium;
  font-family: 'Permanent Marker', cursive;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    background-color: #683022;
    color: whitesmoke;
  }
`;

const Intro = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: start;
  margin: auto;
  background-color: #f6e6db;
`;

const Text = styled.p`
  padding: 30px;
  line-height: 3;
  text-align: center;
  color: #333;
  font-family: 'Permanent Marker', cursive;
  z-index: 1;
`;

const CloseBtn = styled.button`
  width: 100px;
  height: 30px;
  padding: 10px;
  border: none;
  background-color: #f6e6db;
  color: #333;
  font-size: x-large;
  cursor: pointer;
  z-index: 1;
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
          <Subtitle>Welcome to my portfolio</Subtitle>
          <Description>I enjoy creating websites, 3D experiences and music.</Description>
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
              <Canvas camera={{ fov: 45, near: 0.1, far: 2000, position: [-3, 1.5, 15] }} style={{ position: "absolute", top: 0, left: 0 }}>
                <PresentationControls global rotation={[0.13, 0.1, 0]} polar={[0.2, 0.2]} azimuth={[- 1, 0.75]} config={{ mass: 2, tension: 400 }} snap={{ mass: 4, tension: 400 }}>
                  <Float rotationIntensity={1}>
                    <ambientLight intensity={1} />
                    <primitive object={guitare.scene} position={[-1, -3, 0]} rotation={[-1, 0, 0.5]} scale={[4.5, 4.5, 4.5]} />
                  </Float>
                </PresentationControls>
                <Sparkles count={100} scale={2 * 5} size={10} position-y={-5.8} speed={0.4} color={"black"} />
                <ContactShadows position-y={-4} opacity={0.7} scale={10} blur={2.4} />
                <Effects />
              </Canvas>
              <CloseBtn onClick={handleCloseClick}><FaTimes /></CloseBtn>
            </Intro>
          )}
        </Right>
      </Container>
    </Section>
  );
};

export default Home;
