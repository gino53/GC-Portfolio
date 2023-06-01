import { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { KeyboardControls, Sky } from "@react-three/drei";
import { Physics } from '@react-three/rapier';
import Lights from './Lights.jsx';
import Level from './Level.jsx';
import Player from './Player.jsx';

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
            <Canvas shadows camera={{ fov: 45, near: 0.1, far: 200, position: [2.5, 4, 6] }}>
                <Sky sunPosition={[100, 20, 100]} />
                <fog attach="fog" args={['#ffffff', 5, 30]} />
                <Physics>
                    <Lights />
                    <Level />
                    <Player />
                </Physics>
            </Canvas>
        </KeyboardControls>
    );
};

export default Game;