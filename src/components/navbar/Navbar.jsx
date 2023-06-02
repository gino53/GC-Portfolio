import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import styled from "styled-components";
import Logo from "./Logo.jsx";

const Section = styled.div`
  position: fixed;
  z-index: 1;

  @media only screen and (max-width: 425px) {
    z-index: 1000;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1400px;
  padding: 10px 0px;
`;

const ListContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

  @media only screen and (max-width: 768px) {
    gap: 25px;
  }

  @media only screen and (max-width: 425px) {
    display: none;
  }
`;

const ListContainer425 = styled.div`
  display: none;

  @media only screen and (max-width: 425px) {
    position: fixed;
    top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    gap: 25px;
    background-color: #d3b6a5;
  }
`;

const ListStyle = styled.button`
  display: flex;
  justify-content: center;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  background-color: ${({ isActive }) => (isActive ? "#683022" : "#f6e6db")};
  color: ${({ isActive }) => (isActive ? "#f6e6db" : "#683022")};
  font-size: medium;
  font-family: cursive;
  transition: background-color 0.5s;
  cursor: pointer;

  &:hover {
    background-color: #683022;
    color: #f6e6db;
  }
`;

const Button = styled.button`
  display: none;

  @media only screen and (max-width: 425px) {
    position: fixed;
    right: 20px;
    display: flex;
    padding: 10px;
    border: none;
    border-radius: 10px;
    background-color: #f6e6db;
    color: #683022;
    font-size: x-large;
    cursor: pointer;
  }
`;

const Navbar = () => {
  const [isDivOpen, setIsDivOpen] = useState(false);

  const handleButtonClick = () => {
    setIsDivOpen(true);
  };

  const handleCloseClick = () => {
    setIsDivOpen(false);
  };

  const menuItems = ['Home', 'Experiences', 'Certificates', 'Contact'];
  const [activeSection, setActiveSection] = useState("home");

  const handleClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <Section>
      <Container>
        <Logo />
        <ListContainer>
          {menuItems.map((item) => {
            const sectionId = item.toLowerCase();
            const isActive = sectionId === activeSection;
            return (
              <ListStyle key={item} isActive={isActive} onClick={() => handleClick(sectionId)}>
                {item}
              </ListStyle>
            );
          })}
        </ListContainer>
        <Button onClick={handleButtonClick}>
          <HiMenuAlt3 />
        </Button>
        {isDivOpen && (
          <ListContainer425>
            {menuItems.map((item) => {
              const sectionId = item.toLowerCase();
              const isActive = sectionId === activeSection;
              return (
                <ListStyle key={item} isActive={isActive} onClick={() => { handleClick(sectionId); handleCloseClick(); }}>
                  {item}
                </ListStyle>
              );
            })}
          </ListContainer425>
        )}
      </Container>
    </Section>
  );
};

export default Navbar;
