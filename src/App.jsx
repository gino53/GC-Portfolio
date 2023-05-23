import styled from "styled-components";
import Contact from "./components/Contact.jsx";
import Home from "./components/home/Home.jsx";
import Skills from "./components/Skills.jsx";
import Works from "./components/Works.jsx";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar{
    display: none;
  }
`;

function App() {
  return (
    <Container>
      <Home />
      <Skills />
      <Works />
      <Contact />
    </Container>
  );
}

export default App;
