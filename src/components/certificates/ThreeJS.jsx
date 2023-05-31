import React from 'react';
import Tilt from 'react-parallax-tilt';
import '../../../style.css'
import img from '/img/certificates/threejs3D.png';

const ThreeJS = () => (
  <Tilt
    className="parallax-effect-threejs"
    tiltMaxAngleX={40}
    tiltMaxAngleY={40}
    perspective={800}
    transitionSpeed={1500}
    scale={1.1}
    gyroscope={true}
  >
    <img src={img} className="threejs" alt="pic" />
  </Tilt>
);

export default ThreeJS;
