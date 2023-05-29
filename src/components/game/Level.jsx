import * as THREE from 'three'
import { TextureLoader } from 'three';
import { CuboidCollider, RigidBody } from '@react-three/rapier'
import { useMemo, useState, useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { Sparkles, Float, Text, useGLTF, RenderTexture, PerspectiveCamera } from '@react-three/drei'
import Mac from '../Mac';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import useGame from './stores/useGame';

THREE.ColorManagement.legacyMode = false

function SceneSkills() {
    const tree = useGLTF("/tree.gltf");
    tree.scene.children.forEach((mesh) => {
        mesh.castShadow = true
    })

    const rock = useGLTF("/rock.gltf");
    rock.scene.children.forEach((mesh) => {
        mesh.castShadow = true
    })

    const bench = useGLTF("/bench.gltf");
    bench.scene.children.forEach((mesh) => {
        mesh.castShadow = true
    })

    const lamp = useGLTF("/lamp.gltf");

    const farm = useGLTF("/farm.gltf");
    farm.scene.children.forEach((mesh) => {
        mesh.castShadow = true
    })

    return <>
        <RigidBody type='fixed' restitution={0.2} friction={0}>
            <mesh position={[0, 0, 1]} scale={[4, 0.2, 4]} receiveShadow>
                <boxGeometry args={[1, 3, 1]} />
                <meshStandardMaterial color={"#45c421"} />
            </mesh>
            <mesh position={[0, -0.1, 0]} scale={[4, 0.2, 4]} receiveShadow>
                <boxGeometry args={[100, 1, 100]} />
                <meshStandardMaterial color={"#45c421"} />
            </mesh>
        </RigidBody>
        <Float floatIntensity={0.5} rotationIntensity={0.5}>
            <Text scale={0.5} maxWidth={0.25} lineHeight={0.75} textAlign="center" position={[2, 1, 3]}>
                SKILLS
                <meshBasicMaterial toneMapped={false} />
            </Text>
        </Float>
        <RigidBody type='fixed' colliders="trimesh" restitution={0.2} friction={0}>
            <primitive object={tree.scene} position={[3, 0, 1.5]} rotation={[0, -2, 0]} scale={[0.3, 0.3, 0.3]} />
            <primitive object={tree.scene.clone()} position={[-3, 0, 1]} rotation={[0, -2, 0]} scale={[0.3, 0.3, 0.3]} />
            <primitive object={rock.scene} position={[3, 0, 1.9]} rotation={[0, -1, 0]} scale={[0.3, 0.3, 0.3]} />
            <primitive object={rock.scene.clone()} position={[-3, 0, 1.1]} rotation={[0, 2, 0]} scale={[1, 1, 1]} />
            <primitive object={bench.scene} position={[-3, 0, 4]} rotation={[0, 2, 0]} scale={[0.6, 0.6, 0.6]} />
            <primitive object={lamp.scene} position={[-4, 0, 3]} rotation={[0, 1, 0]} scale={[0.6, 0.6, 0.6]} />
            <primitive object={farm.scene} position={[-0.4, -0.01, -10]} rotation={[0, -0.8, 0]} scale={[5, 5, 5]} />
        </RigidBody>
    </>
}

const Cube = ({ position, texture }) => {
    return (
        <RigidBody type='fixed' restitution={0.2} friction={0}>
            <mesh position={position} castShadow receiveShadow>
                <boxGeometry />
                <meshStandardMaterial map={texture} />
            </mesh>
        </RigidBody>
    );
};

function CubeSkills({ position = [0, 0, 0] }) {

    const numCubes = 14;
    const cubePositions = [];

    const textures = [
        './img/icons/html.png',
        './img/icons/css.png',
        './img/icons/sass.png',
        './img/icons/js.png',
        './img/icons/angular.png',
        './img/icons/typescript.png',
        './img/icons/nodejs.png',
        './img/icons/mongodb.png',
        './img/icons/vitejs.png',
        './img/icons/bootstrap.png',
        './img/icons/lunacy.png',
        './img/icons/canva.png',
        './img/icons/threejs.png',
        './img/icons/react.png'
    ];

    for (let i = 0; i < numCubes; i++) {
        const position = [0, i + 1, i - 1];
        cubePositions.push(position);
    }

    return <group position={position} rotation={[0, Math.PI, 0]}>

        {cubePositions.map((position, index) => (
            <Cube key={index} position={position} texture={new TextureLoader().load(textures[index])} />
        ))}

    </group>
}

function SceneWorks() {
    const lightning = useGLTF("/models/lightning.gltf");
    const cauldron = useGLTF("/models/cauldron.gltf");
    const boat = useGLTF("/models/boat.gltf");
    const computer = useGLTF("/models/computer.gltf");
    const keyboard = useGLTF("/models/keyboard.gltf");
    const shield = useGLTF("/models/shield.gltf");
    const spaceship = useGLTF("/models/spaceship.gltf");
    const star = useGLTF("/models/star.gltf");
    const car = useGLTF("/models/car.gltf");

    return <>
        <RigidBody type='fixed' restitution={0.2} friction={0}>
            <mesh position={[0, 14, -62.5]} receiveShadow>
                <boxGeometry args={[100, 1, 100]} />
                <meshStandardMaterial color={"#3e403e"} />
            </mesh>
        </RigidBody>
        <Float floatIntensity={0.2} rotationIntensity={0.2}>
            <Text scale={0.5} maxWidth={0.25} lineHeight={0.75} textAlign="center" position={[2, 16, -15]}>
                WORKS
                <meshBasicMaterial toneMapped={false} />
            </Text>
        </Float>
        <RigidBody type='fixed' restitution={0.2} friction={0}>
            <Mac />
        </RigidBody>
        <RigidBody restitution={0.4}>
            <primitive object={lightning.scene} position={[5.4, 17.5, -16]} rotation={[0, -1, 0]} scale={1} />
        </RigidBody>
        <RigidBody type='fixed' colliders='trimesh'>
        <primitive object={car.scene} position={[5.3, 14.5, -22.4]} rotation={[0, -0.8, 0]} scale={0.5} />
        </RigidBody>
        <RigidBody type='fixed' colliders='hull' restitution={5}>
        <primitive object={shield.scene} position={[4.3, 15.5, -28]} rotation={[0, -0.7, 0]} scale={1.5} />
        </RigidBody>
        <RigidBody type='fixed' colliders='hull'>
        <primitive object={computer.scene} position={[4, 14.5, -34]} rotation={[0, -1, 0]} scale={0.4} />
        </RigidBody>
        <RigidBody type='fixed' colliders='hull'>
        <primitive object={spaceship.scene} position={[-4, 16, -15.8]} rotation={[0, 1, 0]} scale={0.5} />
        </RigidBody>
        <RigidBody type='fixed' colliders='hull'>
        <primitive object={boat.scene} position={[-2, 14.5, -26]} rotation={[0, -2, 0]} scale={0.5} />
        </RigidBody>
        <RigidBody type='fixed' colliders='trimesh'>
        <primitive object={cauldron.scene} position={[-3.5, 14.5, -28]} rotation={[0, -2, 0]} scale={0.8} />
        </RigidBody>
        <RigidBody friction={0}>
        <primitive object={star.scene} position={[-3.5, 15, -34]} rotation={[0, 1, 0]} scale={1} />
        </RigidBody>
        <RigidBody type='fixed' colliders='hull'>
        <primitive object={keyboard.scene} position={[0, 14.5, -36.5]} scale={0.5} />
        </RigidBody>
    </>
}

const Level = () => {
    return <>
        <SceneSkills />
        <CubeSkills />
        <SceneWorks />
    </>
}

export default Level;