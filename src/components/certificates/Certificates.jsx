import React, { useState } from "react";
import styled from "styled-components";
import ThreeJS from "./ThreeJS.jsx";
import Openclassrooms from "./Openclassrooms.jsx";
import Google from "./Google.jsx";

const data = [
  "ThreeJS",
  "Openclassrooms",
  "Google"
];

const Section = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 100vh;
  scroll-snap-align: center;
  color: black;
  font-size: 14px;
  font-weight: 300;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1400px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    justify-content: center;
    padding: 20px;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
`;

const ListItem = styled.li`
  position: relative;
  color: transparent;
  font-size: 90px;
  font-weight: bold;
  -webkit-text-stroke: 1px white;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    color: white;
    font-size: 24px;
    -webkit-text-stroke: 0px;
  }

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
    color: #f5e4dc;
  }

  &:hover {
    ::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Certificates = () => {
  const [certificate, setCertificate] = useState("ThreeJS");
  return (
    <Section id="certificates">
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => setCertificate(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {certificate === "ThreeJS" ? (
            <ThreeJS />
          ) : certificate === "Openclassrooms" ? (
            <Openclassrooms />
          ) : (
            <Google />
          )}
        </Right>
      </Container>
    </Section>
  );
};

export default Certificates;
