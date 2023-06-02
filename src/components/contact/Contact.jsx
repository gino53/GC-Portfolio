import React, { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Linkedin from "./Linkedin.jsx";
import Github from "./Github.jsx";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 50px;

  @media only screen and (max-width: 768px) {
    gap: 0px;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media only screen and (max-width: 1024px) {
    flex: 2;
  }
`;

const Title = styled.h1`
  color: #f6e6db;
  font-size: 42px;
  font-family: cursive;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

const Input = styled.input`
  padding: 20px;
  border: none;
  border-radius: 10px;
  outline: none;
  background-color: #f6e6db;
  color: #683022;
  font-family: cursive;
  font-weight: bold;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 10px;
  outline: none;
  background-color: #f6e6db;
  color: #683022;
  font-family: cursive;
  font-weight: bold;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
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

const Success = styled.h1`
  color: #f6e6db;
  font-family: cursive;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 800px;

  @media only screen and (max-width: 1024px) {
    width: 600px;
    height: 600px;
  }

  @media only screen and (max-width: 768px) {
    width: 400px;
    height: 400px;
  }
`;

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3tw347m",
        "template_cxi7qcz",
        ref.current,
        "U4Gw4uXEQulSdIF4g"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          setTimeout(() => {
            setSuccess(null);
          }, 7000);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <Section id="contact">
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Me</Title>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" />
            <TextArea placeholder="Write your message" name="message" rows={10} />
            <Button type="submit">Send</Button>
            {success &&
              <Success>Your message has been sent 😁</Success>
            }
          </Form>
        </Left>
        <Right>
          <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[3, 2, 1]} />
            <Linkedin />
            <OrbitControls enableRotate={false} enableZoom={false} autoRotate />
          </Canvas>
          <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[3, 2, 1]} />
            <Github />
            <OrbitControls enableRotate={false} enableZoom={false} autoRotate />
          </Canvas>
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
