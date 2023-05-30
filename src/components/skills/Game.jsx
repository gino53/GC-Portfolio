import { Canvas } from '@react-three/fiber';
import Experience from './Experience.jsx';
import { KeyboardControls } from "@react-three/drei";
import { useEffect } from 'react';

const Game = () => {
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(event.code)) {
                event.preventDefault();
            }

            if (event.code === 'ArrowUp' || event.code === 'KeyW') {
            } else if (event.code === 'ArrowDown' || event.code === 'KeyS') {

            } else if (event.code === 'ArrowLeft' || event.code === 'KeyA') {

            } else if (event.code === 'ArrowRight' || event.code === 'KeyD') {

            } else if (event.code === 'Space') {
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <KeyboardControls
            map={[
                { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
                { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
                { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
                { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
                { name: 'jump', keys: ['Space'] }
            ]}
        >
            <Canvas
                shadows
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 200,
                    position: [2.5, 4, 6]
                }}
            >
                <Experience />
            </Canvas>
        </KeyboardControls>
    );
};

export default Game;