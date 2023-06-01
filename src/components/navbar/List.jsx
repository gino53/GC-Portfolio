import React, { useState } from "react";
import styled from "styled-components";

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

const List = () => {
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
        <>
            {menuItems.map((item) => {
                const sectionId = item.toLowerCase();
                const isActive = sectionId === activeSection;
                return (
                    <ListStyle key={item} isActive={isActive} onClick={() => handleClick(sectionId)}>
                        {item}
                    </ListStyle>
                );
            })}
        </>
    );
};

export default List;
