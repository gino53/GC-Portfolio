import React from 'react';
import Tilt from 'react-parallax-tilt';
import '../../../style.css'
import img from '../../../public/img/certificates/google3D.png';

const Google = () => (
  <Tilt
    className="parallax-effect-google"
    tiltMaxAngleX={40}
    tiltMaxAngleY={40}
    perspective={800}
    transitionSpeed={1500}
    scale={1.1}
    gyroscope={true}
  >
    <img src={img} className="google" alt="pic" />
  </Tilt>
);

export default Google;
