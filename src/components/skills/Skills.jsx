import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Game from "./Game.jsx";
import useGame from "./stores/useGame.jsx";

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
  width: 100%;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Skills = () => {
  const [ambianceAudio] = useState(() => new Audio('./song/ambiance.mp3'));
  let isPlaying = false;
  const ambianceAudioPlayer = () => {
    if (isPlaying) {
      var player = document.querySelector('.player');
      player.classList.remove('active');
      ambianceAudio.pause();
      isPlaying = false;
    } else {
      var player = document.querySelector('.player');
      player.classList.add('active');
      ambianceAudio.play();
      isPlaying = true;
    }
  };

  const restart = useGame((state) => state.restart)

  const [showInterface, setShowInterface] = useState(false);
  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShowInterface(true);
        } else {
          setShowInterface(false);
        }
      });
    };

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1,
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => {
      if (skillsSection) {
        observer.unobserve(skillsSection);
      }
    };
  }, []);

  return (
    <Section id="skills">
      <Container>
        {showInterface && (
          <div className="interface">
            <div className="player" onClick={ambianceAudioPlayer}>Song</div>
            <div className="restart" onClick={restart}>Restart</div>
          </div>
        )}
        <Game />
      </Container>
    </Section>
  );
};

export default Skills;
