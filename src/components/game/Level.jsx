import * as THREE from 'three'
import { TextureLoader } from 'three';
import { CuboidCollider, RigidBody } from '@react-three/rapier'
import { useMemo, useState, useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { Sparkles, Float, Text, useGLTF, RenderTexture, PerspectiveCamera } from '@react-three/drei'
import Mac from '../Mac';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

THREE.ColorManagement.legacyMode = false

const boxGeometry = new THREE.BoxGeometry(100, 1, 100)
const floor1Material = new THREE.MeshStandardMaterial({ color: '#111111', metalness: 10, roughness: 10 })

const Cube = ({ position, texture }) => {
    return (
        <RigidBody type='fixed' restitution={0.2} friction={0}>
            <mesh position={position}>
                <boxGeometry />
                <meshStandardMaterial map={texture} />
            </mesh>
        </RigidBody>
    );
};

function BlockStart({ position = [0, 0, 0] }) {

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

    const tree = useGLTF("/tree.gltf");
    const rock = useGLTF("/rock.gltf");
    const bench = useGLTF("/bench.gltf");
    const lamp = useGLTF("/lamp.gltf");
    const farm = useGLTF("/farm.gltf");

    return <group position={position} rotation={[0, Math.PI, 0]}>
        <RigidBody type='fixed' colliders="trimesh" restitution={0.2} friction={0}>
            <primitive object={tree.scene.clone()} position={[3, 0, -1.5]} rotation={[0, 2, 0]} scale={[0.3, 0.3, 0.3]} />
            <primitive object={tree.scene.clone()} position={[-3, 0, -1]} rotation={[0, 2, 0]} scale={[0.3, 0.3, 0.3]} />
            <primitive object={rock.scene} position={[-3, 0, -1]} rotation={[0, 2, 0]} scale={[0.3, 0.3, 0.3]} />
            <primitive object={rock.scene.clone()} position={[3, 0, -1.1]} rotation={[0, 2, 0]} scale={[1, 1, 1]} />
            <primitive object={bench.scene} position={[-3, 0, -4]} rotation={[0, 1, 0]} scale={[0.6, 0.6, 0.6]} />
        </RigidBody>

        <RigidBody type='fixed' restitution={0.2} friction={0}>
            <mesh material={floor1Material} position={[0, 0, -1]} scale={[4, 0.2, 4]} receiveShadow>
                <boxGeometry args={[1, 2, 1]} />
            </mesh>
        </RigidBody>

        {cubePositions.map((position, index) => (
            <Cube key={index} position={position} texture={new TextureLoader().load(textures[index])} />
        ))}

        <RigidBody type='fixed' restitution={0.2} friction={0}>
            <mesh position={[0, 14.7, 14.5]} scale={[4, 0.2, 4]} receiveShadow>
                <boxGeometry args={[1, 2, 1]} />
                <meshStandardMaterial />
            </mesh>
            <Mac />

        </RigidBody>

        <RigidBody type='fixed' restitution={0.2} friction={0}>
            <mesh geometry={boxGeometry} material={floor1Material} position={[0, - 0.1, 0]} scale={[4, 0.2, 4]} receiveShadow />
        </RigidBody>
    </group>
}

export default function Level() {

    return <>
        <Float floatIntensity={0.5} rotationIntensity={0.5}>
            <Text
                scale={0.5}
                maxWidth={0.25}
                lineHeight={0.75}
                textAlign="center"
                position={[2, 1, 3]}
            >
                SKILLS
                <meshBasicMaterial toneMapped={false} />
            </Text>
        </Float>
        <BlockStart position={[0, 0, 0]} />
    </>
}