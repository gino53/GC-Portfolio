import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Center, OrbitControls, Text3D } from "@react-three/drei";

const FloatingText = ({ text, position, waveOffset, waveAmplitude, ...rest }) => {
    const textRef = useRef();

    useFrame((state) => {
        const time = state.clock.elapsedTime;
        const y = Math.sin(time + waveOffset) * waveAmplitude;
        textRef.current.position.y = y;
    });

    return (
        <Text3D ref={textRef} position={position} {...rest}>
            {text}
            <OrbitControls enableRotate={false} enableZoom={false} />
        </Text3D>
    );
};

const List = () => {
    const menuItems = ['Home', 'Skills', 'Certificates', 'Contact'];

    const handleClick = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {menuItems.map((item, index) => {
                const sectionId = item.toLowerCase();
                const waveOffset = index * 1;
                const waveAmplitude = 1;
                return (
                    <Canvas key={item} style={{ width: '95px', height: '100px' }} onClick={() => handleClick(sectionId)} onPointerEnter={() => { document.body.style.cursor = 'pointer'; }} onPointerLeave={() => { document.body.style.cursor = 'default'; }}>
                        <ambientLight />
                        <pointLight position={[10, 10, 10]} />
                        <Center>
                            <FloatingText text={item} font="./fonts/helvetiker_regular.typeface.json" color="white" waveOffset={waveOffset} waveAmplitude={waveAmplitude} />
                        </Center>
                    </Canvas>
                );
            })}
        </>
    );
};

export default List;