import React from 'react';
import Tilt from 'react-parallax-tilt';
import '../../../style.css'
import img from '../../../public/img/certificates/openclassrooms3D.png';

const Openclassrooms = () => (
  <Tilt
    className="parallax-effect-openclassrooms"
    tiltMaxAngleX={40}
    tiltMaxAngleY={40}
    perspective={800}
    transitionSpeed={1500}
    scale={1.1}
    gyroscope={true}
  >
    <img src={img} className="openclassrooms" alt="pic" />
  </Tilt>
);

export default Openclassrooms;
