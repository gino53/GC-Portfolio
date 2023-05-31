import React from "react";
import styled from "styled-components";
import List from "./List.jsx";
import Logo from "./Logo.jsx";

const Section = styled.div`
  position: fixed;
  z-index: 1;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1400px;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo />
          <List />
        </Links>
      </Container>
    </Section>
  );
};

export default Navbar;
