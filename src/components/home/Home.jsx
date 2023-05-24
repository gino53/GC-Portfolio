import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../navbar/Navbar.jsx";
import { Canvas } from "@react-three/fiber";
import Desk from "./Desk.jsx";

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
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
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
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 74px;
  text-align: end;

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
  color: #da4ea2;
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
  background-color: #da4ea2;
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
  position: fixed;
  top: 80%;
  left: 80%;
  width: 500px;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.8);
  color: #000000;
  padding: 20px;
  border-radius: 8px;
  margin: 20px;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  flex: 2;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Home = () => {
  const [showText, setShowText] = useState(false);

  const handleButtonClick = () => {
    setShowText(!showText);
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
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Welcome to my portfolio</Subtitle>
          </WhatWeDo>
          <Desc>
            I enjoy creating websites, 3D experiences and music.
          </Desc>
            <Button onClick={handleButtonClick}>Learn More</Button>
        </Right>
      </Container>
      {showText && (
              <Intro>
                Je suis un développeur web passionné avec une expertise dans la création de sites web et la conception 3D. Ayant suivi des formations approfondies dans ces domaines, j'ai acquis des compétences solides et une compréhension approfondie des principes fondamentaux de la programmation, de la conception graphique et de l'expérience utilisateur.
                En tant que développeur web, j'ai une grande capacité à transformer des idées créatives en réalité fonctionnelle. Je suis capable de travailler sur des projets complexes, en utilisant une variété de langages de programmation et de technologies web pour créer des sites web interactifs, réactifs et conviviaux.
                Ma formation dans la conception 3D m'a permis d'être capable d'intégrer des éléments 3D dans des projets web, apportant ainsi une dimension immersive et captivante aux expériences en ligne.
              </Intro>
            )}
    </Section>
  );
};

export default Home;
